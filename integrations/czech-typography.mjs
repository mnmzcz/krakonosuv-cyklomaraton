// Czech typesetting over the built HTML, so it covers components, Markdown and data alike.
//
// A space becomes a no-break space (U+00A0) where Czech typography forbids a line break:
//   - after a one-letter preposition or conjunction (v, k, s, z, o, u, a, i)
//   - inside a date: "12. června", "13. 6. 2026"
//   - between an ordinal and the next word: "14. ročníku"
//   - between a number and its unit: "135 km", "1 290 Kč", "5,3 %", "10:00 hodin"
//   - inside thousands groups and phone numbers: "2 489", "+420 739 008 143"
//   - between an academic title or abbreviation and what follows: "Ing. arch. Michala", "č. 5"
//   - before a dash, so a line never starts with one: "18:00 – 20:30"
//
// Only text content changes. Tags and attribute values are copied as they are, and the contents of
// script, style, pre, code, textarea, title and svg are left alone. Text runs are read across inline
// formatting tags (a, strong, span…), so "v <a>Trutnově</a>" binds too. A text node that is nothing
// but whitespace is never touched, because a no-break space there would become a flex or grid item.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const NBSP = '\u00a0';

const MONTHS = 'ledna|února|března|dubna|května|června|července|srpna|září|října|listopadu|prosince';
const UNITS = [
  'km/h',
  'km',
  'm n\\. m\\.',
  'mm',
  'cm',
  'm',
  'kg',
  'g',
  'Kč',
  'EUR',
  '€',
  '%',
  '‰',
  '°C',
  '°',
  'hodin',
  'hod\\.',
  'h',
  'minut',
  'min\\.?',
  'sekund',
  'let',
  'kusů',
  'ks',
].join('|');
const TITLES = 'Ing|arch|Mgr|Bc|MUDr|JUDr|PhDr|RNDr|MBA|doc|prof|tel|č|čp|ul|nám|sv|str';

/**
 * Each rule decides one whitespace run: `before` is tested against the text that ends at the run,
 * `after` against the text that starts right after it. Both are anchored.
 */
const RULES = [
  // one-letter prepositions and conjunctions: "v Trutnově", "a v cíli"
  { before: /(?:^|[\s(„"‚'[–—/-])[vkszouai]$/iu, after: /^\S/u },
  // day + month: "12. června" (the year may still wrap, so narrow table cells keep fitting)
  { before: /(?:^|[^\d.,])\d{1,2}\.$/u, after: new RegExp(`^(?:${MONTHS})(?![\\p{L}])`, 'iu') },
  // numeric date: "13. 6. 2026", "11. 6."
  { before: /(?:^|[^\d.,])\d{1,2}\.$/u, after: /^\d{1,2}\.(?!\d)/u },
  { before: /(?:^|[^\d.,])\d{1,2}\.\s?\d{1,2}\.$/u, after: /^\d{4}(?!\d)/u },
  // ordinal + following word: "14. ročníku", "13. ročník"
  { before: /(?:^|[^\d.,])\d{1,3}\.$/u, after: /^\p{Ll}/u },
  // number + unit: "135 km", "1 290 Kč", "5,3 %", "10:00 hodin"
  { before: /\d$/u, after: new RegExp(`^(?:${UNITS})(?![\\p{L}\\d])`, 'u') },
  // inside "m n. m."
  { before: /(?:^|[^\p{L}])m$/u, after: /^n\.\s?m\./u },
  { before: /(?:^|[^\p{L}])m n\.$/u, after: /^m\./u },
  // thousands groups and phone numbers: "2 489", "+420 739 008 143"
  { before: /(?:^|[^\d.,:])\d{1,3}$/u, after: /^\d{3}(?!\d)/u },
  // academic titles and abbreviations: "Ing. arch. Michala Rosy", "č. 5"
  { before: new RegExp(`(?:^|[^\\p{L}])(?:${TITLES})\\.$`, 'u'), after: /^[\p{L}\d+]/u },
  // a dash never starts a line: "18:00 – 20:30"
  { before: /\S$/u, after: /^[–—](?=\s|$)/u },
];

const SKIP = new Set(['script', 'style', 'pre', 'code', 'kbd', 'samp', 'textarea', 'title', 'svg', 'math', 'template']);
const INLINE = new Set(['a', 'abbr', 'b', 'bdi', 'bdo', 'cite', 'data', 'dfn', 'em', 'i', 'mark', 'q', 's', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var']);

/** Split HTML into text and markup tokens, respecting quoted attribute values and raw-text elements. */
function tokenize(html) {
  const tokens = [];
  let i = 0;
  let text = '';
  const pushText = () => {
    if (text) tokens.push({ type: 'text', value: text });
    text = '';
  };
  while (i < html.length) {
    const ch = html[i];
    if (ch !== '<' || !/[a-zA-Z/!?]/.test(html[i + 1] ?? '')) {
      text += ch;
      i++;
      continue;
    }
    pushText();
    // comments and declarations
    if (html.startsWith('<!--', i)) {
      const end = html.indexOf('-->', i + 4);
      const stop = end === -1 ? html.length : end + 3;
      tokens.push({ type: 'markup', value: html.slice(i, stop), boundary: true });
      i = stop;
      continue;
    }
    if (html[i + 1] === '!' || html[i + 1] === '?') {
      const end = html.indexOf('>', i);
      const stop = end === -1 ? html.length : end + 1;
      tokens.push({ type: 'markup', value: html.slice(i, stop), boundary: true });
      i = stop;
      continue;
    }
    // a tag: walk to its closing '>' outside quotes
    let j = i + 1;
    let quote = null;
    for (; j < html.length; j++) {
      const c = html[j];
      if (quote) {
        if (c === quote) quote = null;
      } else if (c === '"' || c === "'") quote = c;
      else if (c === '>') break;
    }
    const tag = html.slice(i, j + 1);
    i = j + 1;
    const m = /^<\/?([a-zA-Z][\w:-]*)/.exec(tag);
    const name = m ? m[1].toLowerCase() : '';
    const closing = tag[1] === '/';
    const selfClosing = /\/>$/.test(tag);
    if (!closing && !selfClosing && SKIP.has(name)) {
      // copy everything up to the matching close tag untouched (svg may nest svg)
      let depth = 1;
      const re = new RegExp(`<(/?)${name}(?=[\\s/>])[^>]*?(/?)>`, 'gi');
      re.lastIndex = i;
      let end = html.length;
      let hit;
      while ((hit = re.exec(html))) {
        if (hit[1]) depth--;
        else if (!hit[2]) depth++;
        if (depth === 0) {
          end = re.lastIndex;
          break;
        }
      }
      tokens.push({ type: 'markup', value: tag + html.slice(i, end), boundary: true });
      i = end;
      continue;
    }
    tokens.push({ type: 'markup', value: tag, boundary: !INLINE.has(name) });
  }
  pushText();
  return tokens;
}

/** Apply the rules to one run of text nodes that reads as continuous text. */
function bindRun(nodes) {
  if (!nodes.length) return;
  // Join the nodes with a marker where a tag sat, so "135 km</span><span>Krátká" still ends the
  // unit at the tag while "13. <span>ročník" can bind across it.
  const MARK = '\u0001';
  const starts = [];
  let joined = '';
  for (const n of nodes) {
    starts.push(joined.length);
    joined += n.value + MARK;
  }
  const edits = new Map(); // node index -> [start, end] whitespace runs (node-local) to become one NBSP
  const ws = /\s+/gu; // \s includes U+00A0
  let hit;
  while ((hit = ws.exec(joined))) {
    const a = hit.index;
    const b = a + hit[0].length;
    const k = starts.findLastIndex((s) => s <= a);
    const node = nodes[k];
    if (!node.value.trim() || hit[0] === NBSP) continue;
    // whitespace touching a tag stays breakable: inside a flex or grid parent a no-break space
    // there would show up as an extra gap ("Žáci I <span>PDF</span>")
    if (a === starts[k] || b - starts[k] === node.value.length) continue;
    const before = joined.slice(Math.max(0, a - 40), a).replace(/\u0001+$/u, '');
    const after = joined.slice(b, b + 40).replace(/^\u0001+/u, '');
    if (!RULES.some((r) => r.before.test(before) && r.after.test(after))) continue;
    if (!edits.has(k)) edits.set(k, []);
    edits.get(k).push([a - starts[k], b - starts[k]]);
  }
  for (const [k, runs] of edits) {
    const node = nodes[k];
    let out = '';
    let last = 0;
    for (const [s, e] of runs) {
      out += node.value.slice(last, s) + NBSP;
      last = e;
    }
    node.value = out + node.value.slice(last);
  }
}

export function transform(html) {
  const tokens = tokenize(html);
  let run = [];
  for (const t of tokens) {
    if (t.type === 'text') run.push(t);
    else if (t.boundary) {
      bindRun(run);
      run = [];
    }
  }
  bindRun(run);
  return tokens.map((t) => t.value).join('');
}

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

export default function czechTypography() {
  return {
    name: 'czech-typography',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        for await (const file of htmlFiles(fileURLToPath(dir))) {
          const html = await readFile(file, 'utf8');
          const out = transform(html);
          if (out !== html) await writeFile(file, out);
        }
      },
    },
  };
}
