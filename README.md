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
| Datum, ročník, odkazy na registraci a startovní listinu, ceny startovného, program, kontakty, menu, ohlasy | `src/data/race.ts` |
| Partneři (loga v `src/assets/partners/`) | `src/data/partners.ts` |
| Aktuality (Markdown, obrázek do `src/assets/news/`) | `src/content/aktuality/*.md` |
| Profil tratí (body, výšky, místa) | `src/data/routes.json` |
| Průjezdní časy na stránce Fanoušci | `src/data/splits-2026.json` |
| Barvy, písmo, tlačítka | `src/styles/global.css` |

Cena „teď platí“ se počítá podle dnešního data v prohlížeči návštěvníka, takže po 31. 12. se sama přepne na další stupeň.

Nová aktualita: zkopírujte některý soubor v `src/content/aktuality/`, upravte `title`, `date`, `slug`, `image`, `imageAlt`, `excerpt` a text. Adresa článku bude `/RRRR/MM/DD/slug/` jako na starém webu.

## Adresy a přesměrování

Stránky drží adresy z WordPressu (`/registrace/`, `/propozice/`, `/ubytovani/`, `/vouchery/`, `/e-shop/`, `/vysledky/`, `/fotogalerie/`, `/partneri/`, `/kontakty/`, články `/RRRR/MM/DD/slug/`). Staré podstránky galerie (`/fotogalerie/2026-2/` atd.) přesměrovávají na kotvy na stránce Fotogalerie. Nová stránka: `/fanousci/`. Dokumenty (PDF s výsledky, souhlas zákonného zástupce) jsou v `public/docs/`.

## Formuláře

Formuláře (soutěž týmů, vouchery, poptávka e-shopu) jsou připravené pro Netlify Forms (`data-netlify="true"`, po odeslání stránka `/dekujeme/`). Při nasazení jinam je potřeba je napojit na jiný backend.

## Úvodní video

Hero přehrává YouTube video `ZuI7GtwW8YM` přes `youtube-nocookie.com`, ztlumené a ve smyčce, s tlačítkem pro pozastavení. Při `prefers-reduced-motion` nebo úsporném režimu dat se video nenačte a zůstane fotka. Pro nejlepší výsledek doporučujeme nahradit YouTube vlastním krátkým MP4/WebM (bez loga YouTube a rychlejší načtení).

## Design

- `PRODUCT.md` – kdo web používá a co musí umět.
- `DESIGN.md` – vizuální systém (barvy, typografie, komponenty).
- `.impeccable/surfaces/home.md` – zadání směru pro úvodní stránku.
- `src/assets/PROVENANCE.md` – původ všech fotek a dat.
