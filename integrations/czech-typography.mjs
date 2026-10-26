// Czech typesetting rule: a one-letter preposition or conjunction never ends a line.
// Runs over the built HTML so it covers components, Markdown and data alike.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ONE_LETTER = /(^|[\s(„])([vkszouaiVKSZOUAI])\s+(?=\S)/g;

function fixText(text) {
  // run twice so "a v Trutnově" binds both words
  return text.replace(ONE_LETTER, '$1$2 ').replace(ONE_LETTER, '$1$2 ');
}

function transform(html) {
  // leave scripts, styles and preformatted blocks alone
  return html
    .split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<pre[\s\S]*?<\/pre>)/)
    .map((part, i) => (i % 2 ? part : part.replace(/>([^<]+)</g, (m, text) => `>${fixText(text)}<`)))
    .join('');
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
