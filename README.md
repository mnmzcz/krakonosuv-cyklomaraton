# Krakonošův cyklomaraton – web

Nová podoba webu [krakonosuvcyklomaraton.cz](https://krakonosuvcyklomaraton.cz). Statický web v [Astru](https://astro.build), vizuální svět „Profil etapy“: skutečný výškový profil trati jako páteř webu.

## Spuštění

```bash
npm install
npm run dev      # vývojový server na http://localhost:4321
npm run build    # statický web do dist/
npm run preview  # náhled sestaveného webu
```

Vyžaduje Node.js 22.12 nebo novější.

## Kde se co upravuje

| Co | Soubor |
|---|---|
| Datum, ročník, odkazy na registraci a startovní listinu, ceny startovného, program, kontakty, kam chodí formuláře, menu, ohlasy | `src/data/race.ts` |
| Partneři (loga v `src/assets/partners/`) | `src/data/partners.ts` |
| Aktuality (Markdown, obrázek do `src/assets/news/`) | `src/content/aktuality/*.md` |
| Profil tratí (body, výšky, místa) | `src/data/routes.json` |
| Průjezdní časy na stránce Fanoušci | `src/data/splits-2026.json` |
| Barvy, písmo, tlačítka | `src/styles/global.css` |

Cena „teď platí“ se počítá podle dnešního data v prohlížeči návštěvníka, takže po 31. 12. se sama přepne na další stupeň.

Nová aktualita: zkopírujte některý soubor v `src/content/aktuality/`, upravte `title`, `date`, `slug`, `image`, `imageAlt`, `excerpt` a text. Adresa článku bude `/RRRR/MM/DD/slug/` jako na starém webu.

## Adresy a přesměrování

Stránky drží adresy z WordPressu (`/registrace/`, `/propozice/`, `/ubytovani/`, `/vouchery/`, `/e-shop/`, `/vysledky/`, `/fotogalerie/`, `/partneri/`, `/kontakty/`, články `/RRRR/MM/DD/slug/`). Staré podstránky galerie (`/fotogalerie/2026-2/` atd.) trvale přesměrovávají na kotvy na stránce Fotogalerie (pravidlo ve `vercel.json`). Nová stránka: `/fanousci/`. Dokumenty (PDF s výsledky, souhlas zákonného zástupce) jsou v `public/docs/`.

## Formuláře

Formuláře (soutěž týmů, vouchery, poptávka e-shopu) posílají data na `/api/formular/` (`src/pages/api/formular.ts`). Funkce na Vercelu je ověří a pošle e-mailem pořadatelům přes Resend; odpověď na e-mail jde rovnou odesílateli. Po odeslání následuje stránka `/dekujeme/`. Když se odeslání nepovede, zobrazí se chyba pod formulářem a vyplněné údaje zůstanou. Bez JavaScriptu se místo toho otevře stránka `/odeslani-selhalo/`.

Nová položka ve formuláři se musí doplnit i do seznamu polí v `src/pages/api/formular.ts`, jinak se do e-mailu nedostane.

## Měření a cookies

Google Analytics 4 (`gaId` v `src/data/race.ts`) se načte až po souhlasu v cookie liště (`src/components/CookieConsent.astro`). Lišta nabízí „Povolit“ a „Odmítnout“ jako rovnocenná tlačítka, volbu si pamatuje 12 měsíců a v patičce ji jde kdykoli změnit („Nastavení cookies“). Po odvolání souhlasu se měření zastaví a cookies `_ga` se smažou. Co web ukládá, popisuje stránka `/cookies/`. Při přidání dalšího měřicího nebo reklamního nástroje je potřeba upravit lištu i tuto stránku.

## Nasazení (Vercel)

Web běží na Vercelu přes `@astrojs/vercel`. Všechny stránky jsou předem vygenerované, jako funkce běží jen odesílání formulářů. Každý push do hlavní větve se nasadí sám.

Proměnné prostředí (Vercel → Settings → Environment Variables):

| Proměnná | Význam |
|---|---|
| `RESEND_API_KEY` | API klíč z [Resendu](https://resend.com), přes který formuláře odcházejí; doména odesílatele v něm musí být ověřená |
| `FORM_TO` | volitelně jiný příjemce formulářů než `formsTo` v `src/data/race.ts` (teď Michaela Musilová) |
| `FORM_FROM` | volitelně jiný odesílatel než `formsFrom` v `src/data/race.ts` (teď `krakonos@mnmz.cz`) |

Doména: v projektu na Vercelu (Settings → Domains) přidejte `krakonosuvcyklomaraton.cz` i `www.krakonosuvcyklomaraton.cz` a u Websupportu nastavte DNS záznamy, které Vercel ukáže. Záznamy MX a TXT (pošta, SPF) nechte beze změny.

## Úvodní video

Hero přehrává YouTube video `ZuI7GtwW8YM` přes `youtube-nocookie.com`, ztlumené a ve smyčce, s tlačítkem pro pozastavení. Při `prefers-reduced-motion` nebo úsporném režimu dat se video nenačte a zůstane fotka. Pro nejlepší výsledek doporučujeme nahradit YouTube vlastním krátkým MP4/WebM (bez loga YouTube a rychlejší načtení).

## Design

- `PRODUCT.md` – kdo web používá a co musí umět.
- `DESIGN.md` – vizuální systém (barvy, typografie, komponenty).
- `.impeccable/surfaces/home.md` – zadání směru pro úvodní stránku.
- `src/assets/PROVENANCE.md` – původ všech fotek a dat.
