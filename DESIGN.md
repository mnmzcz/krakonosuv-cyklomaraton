---
name: Casia Krakonošův cyklomaraton
description: The race's road book. The real elevation profile is the spine of every page; places stand at their kilometre, and red marks only the action and where you are on the road.
colors:
  red: "#e30613"
  red-deep: "#b4000c"
  ridge-950: "#061221"
  ridge-900: "#0c2340"
  ridge-700: "#1d4a82"
  ridge-500: "#4677b0"
  ridge-300: "#8fb2d9"
  ridge-200: "#b9cfe7"
  ridge-100: "#dfe9f4"
  grade-0: "#c9daee"
  grade-1: "#8fb2d9"
  grade-2: "#4677b0"
  grade-3: "#1d4a82"
  snow: "#f4f7fa"
  paper: "#ffffff"
  ink: "#0b1b2e"
  ink-2: "#33465d"
  ink-3: "#566a82"
  line: "#cfdae6"
  line-strong: "#9fb3c9"
  on-dark-2: "#b8cbe1"
  on-dark-line: "rgba(184, 203, 225, 0.28)"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', Arial, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 9.2vw, 6rem)"
    fontWeight: 820
    lineHeight: 1.02
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', Arial, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.2vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 66"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', Arial, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.4vw, 1.875rem)"
    fontWeight: 760
    lineHeight: 1.08
    fontVariation: "'wdth' 72"
  lede:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', Arial, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', Arial, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', Arial, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.045em"
    fontVariation: "'wdth' 62"
  place:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', Arial, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 780
    lineHeight: 1.05
    letterSpacing: "0.03em"
    fontVariation: "'wdth' 62"
  figure:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', Arial, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 780
    lineHeight: 1.05
    fontFeature: "'tnum' 1, 'lnum' 1"
    fontVariation: "'wdth' 70"
  button:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', Arial, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 780
    lineHeight: 1
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 70"
rounded:
  hair: "1px"
  sm: "2px"
  round: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  section: "clamp(4.5rem, 10vw, 9rem)"
  block: "clamp(2.5rem, 5vw, 4rem)"
  column: "clamp(2.5rem, 6vw, 6rem)"
  header: "4.5rem"
  container: "84rem"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.4rem 0.7rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.4rem 0.7rem"
    height: "3.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-small:
    padding: "0.55rem 1rem 0.5rem"
    height: "2.5rem"
  input-text:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.9rem"
    height: "3rem"
  route-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.85rem 1.15rem"
  route-tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  scrub-readout:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.4rem 0.6rem"
  spectator-pin:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.round}"
    size: "1.5rem"
  service-badge:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    size: "1.75rem"
  now-flag:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "0.3rem 0.5rem 0.25rem"
  site-header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "4.5rem"
  page-head:
    backgroundColor: "{colors.ridge-900}"
    textColor: "{colors.paper}"
  site-footer:
    backgroundColor: "{colors.ridge-950}"
    textColor: "{colors.paper}"
---

# Design System: Casia Krakonošův cyklomaraton

## Overview

**Creative North Star: "The Road Book"**

The site is the race's road book, the printed "profil de l'étape" a rider studies the night before a Tour stage. The real elevation profile of the route, drawn from 200 m samples of the actual road, is the spine of every page: it rises out of the bottom of the hero video, forms the lower edge of every subpage header, docks under the header as the ride rail, and carries the full road book with its places, climbs and km ruler. Everything else hangs off the road. Places stand at their kilometre on vertical labels with leader lines; peaks carry their altitude; page sections are stops at real waypoints.

The material is cartographic, not promotional. Ridge blue fields and snow white ground, ruled ink lines, tick marks, tabular figures, condensed caps for every name. The density is that of a printed stage sheet: data sits in ruled rows and plates, never in floating cards. Casia red is the single loud voice. It appears only where the visitor acts, where they are on the road, and what applies now.

The world rejects the category kit of sport-event sites: the italic sport headline, the countdown clock, the row of identical news cards, the decorative mountain silhouette. Every ridge on the site is the real route.

**Key Characteristics:**
- The real route profile is the recurring graphic; every silhouette is data, on one km scale across a page.
- One grotesque (Archivo) in many widths: extra-condensed caps for names and headings, normal width for reading.
- Vertical place labels on 1px stems that end on the profile line, with tabular km and metre figures.
- Ridge blue tonal fields on snow; red reserved for action, position and "now".
- Flat bands and ruled data; shadows only on layers that float over the page.
- 2px corners on every rectangle; circles only for markers on the road.

## Colors

A cold, cartographic palette: one hue family of ridge blues from night to mist on a snow ground, with Casia red as the only warm note.

### Primary
- **Casia Red** (`red`): the action and the race markers. Registrace buttons, the 3px focus ring, text selection, caret, the red underline of nav links and arrow links, the summit dots on the hero ridge, the scrub cursor and dot, the ride-rail marker, numbered spectator pins, the current price step and its "Teď platí" flag, the square bullets of hero facts and key program slots. White text on it measures 4.9:1.
- **Pressed Casia Red** (`red-deep`): the hover and pressed state of the red button, and error text on light ground (7.1:1 with white).

### Secondary
- **Ridge Blue** (`ridge-900`): the deep field. Dark bands (Startovné, Program), the subpage header, the mobile menu panel, the hero's fallback ground and the browser theme color.
- **Night Ridge** (`ridge-950`): the footer only, one step darker than the dark bands, and the base of every scrim and shadow tint (rgba 6, 18, 33).
- **Steep Blue** (`ridge-700`), **Mid Ridge** (`ridge-500`), **Haze** (`ridge-300`): the working blues. Price-climb bars, measured pass-time bars, the short route on the map, the travelled part of the ride rail, list markers in prose.
- **Pale Haze** (`ridge-200`) and **Mist** (`ridge-100`): secondary text on ink (route tab km, readout place name), the cap line of price bars; Mist is the hover fill of tabs, menu items and partner cells, the fans band and the untravelled ride-rail road.

### Tertiary
- **The grade ramp** (`grade-0` to `grade-3`): the profile fill by steepness, one class per 200 m sample. Valley Floor Blue `grade-0` under 2 %, then `grade-1` 2–4 %, `grade-2` 4–6 %, `grade-3` over 6 %. Grades 1–3 deliberately share their values with Haze, Mid Ridge and Steep Blue so the profile and the rest of the page speak one blue.

### Neutral
- **Snow Ground** (`snow`): the page background and the fill of every ridge silhouette, so the profile becomes the ground the next band stands on. Also the halo behind labels drawn over the profile.
- **Paper White** (`paper`): raised material laid on the snow. The header, the docked ride rail, the map plate, partner cells, form panels and fields, place-marker dots, and paper bands (the homepage route section, testimonials, partner board). The route section opens under a 3px ink rule straight after the hero, so the hero's ridge ends with the hero and the road book starts on a fresh sheet.
- **Road Ink** (`ink`): headings, the profile line, stems, axis and ticks, ruled tops of data blocks, the active route tab, the scrub readout and stop tooltips (16:1 on snow).
- **Slate Ink** (`ink-2`): reading text in prose and ledes, legends, bracket outlines (9:1 on snow).
- **Fog Ink** (`ink-3`): data-term labels (Start, Délka, Nejvýš), units, qualifiers ("trasa 2026"), altitudes in place labels, sources and notes (5.2:1 on snow, 4.5:1 on Mist; the lightest text allowed).
- **Hairline** (`line`): 1px separators between rows, cells and facts.
- **Rule Steel** (`line-strong`): dashed altitude gridlines, the stage header's bottom rule, tab separators, quiet underlines. Decorative rules only (2.15:1 on paper).
- **Moonlit Text** (`on-dark-2`) and **Moonlit Hairline** (`on-dark-line`): secondary text and separators on ridge fields (9.5:1 on Ridge Blue).

### Named Rules
**The Red Means Go Rule.** Red marks only three things: what to do (register, the focused control), where you are on the road (cursor, rail marker, summit dots, spectator pins), and what applies now or matters most (the current price step, the small red square that flags a route fact or a key program time). It is never a band, a heading color or a step of the grade ramp.

**The Grade Is Blue Rule.** Steepness is told in the four grade blues, darker is steeper. A gradient never borrows red, green or a rainbow ramp, and every grade fill has a legend swatch.

**The Snow Ground Rule.** The ground is Snow, not white. Paper white is a material placed on the ground, and every ridge silhouette is filled with Snow so the page appears to stand on the road.

## Typography

**Display Font:** Archivo Variable, width axis 62–70 (with Archivo, Arial Narrow, Arial fallback)
**Body Font:** Archivo Variable at normal width
**Label/Mono Font:** Archivo Variable at width 62, uppercase, tabular lining figures for numbers

**Character:** One grotesque stretched from extra-condensed to normal. The condensed caps read like the lettering of a printed stage profile: tall, tight, unmistakably sport, never italic. Paragraphs drop back to normal width so the organisers' long rules stay easy to read.

### Hierarchy
- **Display** (820, width 62, clamp(3.25rem, 9.2vw, 6rem), line-height 1.02, uppercase): the hero H1 and subpage H1s (subpages use clamp(3rem, 8vw, 6rem)), max 12–16ch.
- **Headline** (800, width 66, clamp(2.5rem, 6.2vw, 5.25rem), line-height 1.04, uppercase): every section H2 (Trať, Přijďte fandit, Aktuality, Kde fandit).
- **Title** (760, width 72, clamp(1.375rem, 2.4vw, 1.875rem), line-height 1.08, uppercase): program day heads, footer edition line. Sibling caps titles in components sit between width 70 and 80 at 1.06–1.375rem: place names in the timetable and travel list (800, width 72, 1.375rem), climb names (760, width 72), prose H2 (800, width 70, clamp(1.625rem, 3vw, 2.25rem)).
- **Lede** (400, clamp(1.125rem, 1.6vw, 1.3125rem), line-height 1.5, Slate Ink, max 60ch): the paragraph under a section heading.
- **Body** (400, 1.0625rem, line-height 1.6): reading text, prose at max 68ch in Slate Ink with Road Ink for strong and headings.
- **Label** (700, width 62, 0.8125rem, letter-spacing 0.045em, uppercase): data terms, table column heads, partner tier headings, footer column heads, map place names, date stamps.
- **Place** (780, width 62, 0.875rem, letter-spacing 0.03em, uppercase, vertical): place names on profile stems, the altitude following in Fog Ink at weight 500.
- **Figure** (780, width 70, 1.375rem, tabular lining): the value in a stage-header fact (10:00, 134,7 km, 2 489 m), followed by a Fog Ink qualifier at 0.875rem.
- **Button** (780, width 70, 1.125rem, letter-spacing 0.02em, uppercase): buttons; arrow links use width 75, 750.

### Named Rules
**The One Grotesque Rule.** Archivo is the only typeface. Hierarchy comes from width, weight and case, never from a second family, a serif or italics.

**The Accent Clearance Rule.** Multi-line caps never set tighter than their leading token: 1.02 for display, 1.04 for headline, 1.08 for caps titles. Czech accents reach 0.89em (Á, Č, Ř, Š, Ž, Ě) and the ring of Ů 0.94em above the baseline, and collide with the line above below 1.0.

**The Tabular Figures Rule.** Every kilometre, metre, percentage, time and Kč sits in tabular lining figures, in Czech number format (134,7 km; 2 489 m; 1 290 Kč). A build pass binds number and unit, one-letter prepositions, dates and ordinals with no-break spaces, and keeps a dash from starting a line; new copy relies on it rather than hand-placed spaces.

## Layout

A single content column of 84rem plus gutters of clamp(1rem, 4vw, 3rem) carries every page. Bands run full bleed and change the ground rather than drawing boxes: Snow, Paper, Mist (ridge-100) and dark Ridge Blue fields alternate, each padded clamp(4.5rem, 10vw, 9rem) top and bottom. Blocks inside a band are spaced clamp(2.5rem, 5vw, 4rem).

The recurring split is asymmetric: copy in 5fr, data in 7fr, with a column gap of clamp(2.5rem, 6vw, 6rem) (price climb, testimonials, program, registration, and the road book twice: its heading beside its stage header, its legend beside its climbs table). Photographic bands invert it, photo 7fr full bleed and copy 5fr. All of these stack below 60rem; the road book's heading row already stacks below 75rem, where the five stage facts no longer fit 7fr.

**The Same Scale Rule.** Every profile on a page spans the content column on one km scale. The hero ridge, the road book directly below it and the ride rail align, so a place keeps its x position from band to band. Only the subpage header's ridge runs edge to edge.

**The Place Stands At Its Kilometre Rule.** Anything about a place is positioned by its km in the route data, never by a free grid. Labels stand on stems at their km; climb percentages sit where no stem passes; home sections are rail stops at real waypoints (Trať at Trutnov, Fandit at Pomezní Boudy).

The road book stacks a label band (clamp(9.25rem, 12vw, 10rem), 7.5rem on phones) above a plot (clamp(10rem, 22vw, 17rem)) and a 2.25rem km axis. Below 48rem it keeps only first-tier places, drops altitudes from labels, minor ticks and bracket figures, and relies on the climbs table for the numbers. The header is sticky at 4.5rem; the ride rail docks under it (3.5rem, 3rem below 72rem) once the hero has scrolled away, and scroll-padding accounts for both. The desktop nav collapses to a menu at 75rem.

## Elevation & Depth

The ground is flat. Bands, plates, partner cells and data rows carry no shadow; depth comes from the ridge silhouette cutting one band into the next, from tonal fields, and from ruled ink lines. Shadows exist only on layers that float over the page while it scrolls, and they are always soft, offset downward with a negative spread, and tinted Night Ridge.

### Shadow Vocabulary
- **Float panel** (`box-shadow: 0 18px 40px -18px rgba(6, 18, 33, 0.35)`): desktop submenus.
- **Float list** (`box-shadow: 0 18px 32px -20px rgba(6, 18, 33, 0.45)`): the compact ride rail's open list of stops.
- **Docked rail** (`box-shadow: 0 10px 24px -18px rgba(6, 18, 33, 0.4)`): the ride rail under the header.
- **Readout** (`box-shadow: 0 6px 18px -8px rgba(6, 18, 33, 0.45)`): the scrub readout and the rail's stop tooltips.
- **Marker ring** (`box-shadow: 0 0 0 3px var(--paper)`; 2px on the rail): a paper ring that lifts a red dot off the line it rides. Separation, not elevation.
- **Snow halo** (`text-shadow: 0 0 2px var(--snow), 0 0 2px var(--snow), 0 0 3px var(--snow)`): keeps a label legible where it crosses the profile or the map (the halo uses paper on the map plate).
- **Video lift** (`text-shadow: 0 2px 24px rgba(6, 18, 33, 0.35)`): the hero title over moving footage, together with the lower-left scrim.

### Named Rules
**The Flat Ground Rule.** If it scrolls with the page, it has no shadow. Only menus, the docked rail and readouts float, and only they cast one.

## Shapes

Rectangles are nearly square-cornered: 2px on buttons, fields, notices, the map plate, the readout and route letters; 1px on legend swatches and pass-time bars. Circles appear only as markers on the road: the 7px paper dot with a 2px ink ring where a stem meets the line, red summit dots, the red scrub dot, numbered spectator pins, service badges for timing points and feed stations, the ink start-and-finish ring.

Lines do the structural work. A 2px ink rule opens the stage header; a 1.5px ink rule opens every ruled list, table, quote and partner tier; 1px Hairline separates rows; dashed Rule Steel marks altitude gridlines. Panels on light ground (forms, notices) are Paper with a 1px Hairline border and a 3px top rule, ink for forms and red for warnings. Climb brackets are open-bottomed 1.5px outlines spanning the climb from foot to top. Vertical labels read bottom to top (rotated 180° in vertical writing mode). The km ruler, ticks every 2.5 % and 12.5 % over a baseline, divides the footer like a road-book scale.

## Components

### Buttons
Square, uppercase and condensed, like a race-number plate.
- **Shape:** nearly square (2px), 2px border in the fill color.
- **Primary:** Casia Red with white condensed caps, min-height 3.25rem, padding 0.75rem 1.4rem 0.7rem, an arrow icon trailing at 1.15em.
- **Hover / Focus:** fill deepens to Pressed Casia Red over 0.2s; the arrow nudges 0.2em right over 0.35s; pressed moves down 1px; focus shows the 3px red ring at 3px offset.
- **Ghost:** transparent with an ink border and ink text, filling ink with white text on hover. On dark fields the border is 70 % white and the hover fills white with Ridge Blue text. Used for jump links and downloads in subpage headers.
- **Small:** min-height 2.5rem, 1rem type; the header's Registrace.
- **Arrow link:** the secondary action. Condensed caps (width 75, 750) on a 2px red underline with a trailing arrow ("Průvodce pro fanoušky", "Všechny aktuality").

### Cards / Containers
There are no floating cards. Content sits in ruled rows and plates.
- **Ruled list:** a 1.5px ink top rule, rows split by 1px Hairline (news list, climbs, timetable, quotes, travel facts).
- **Plate:** Paper, 1px Hairline border, 2px corners (the map plate).
- **Form panel / notice:** Paper, 1px Hairline border, 3px top rule (ink for forms, red for warnings), padding clamp(1.5rem, 3vw, 2.5rem).
- **Logo wall:** Paper cells in a shared 1px Hairline grid, Mist on hover, min-height 6.5rem (8rem for main partners, 11rem bordered for titular and general partners).

### Inputs / Fields
- **Style:** Paper fill, 1.5px stroke, 2px corners, min-height 3rem, padding 0.7rem 0.9rem; labels above in condensed caps (width 75, 720, 0.9375rem). The resting stroke is Ink Muted (`ink-3`, 5.5:1 on Paper, clearing the 3:1 non-text contrast of WCAG 2.1 AA) and darkens to Ink on hover; Rule Steel (2.15:1) is a decorative rule, never a field stroke.
- **Hover:** stroke shifts to Mid Ridge.
- **Focus:** 3px red outline at 0 offset, stroke turns Road Ink.
- **Error:** stroke turns Casia Red after user interaction, with the message in Pressed Casia Red below. Checkboxes and radios take the red accent color at 1.25rem in a 2.75rem row.

### Navigation
- **Header:** Paper, sticky, 4.5rem, 1px Hairline bottom. Logo left; nav links in condensed caps (width 75, 720, 1rem, 0.02em) with a 2px red underline that grows from the left on hover and stays on the current section; small red Registrace at the right.
- **Submenu:** Paper panel with a 3px red top rule, 1px Hairline sides and the float-panel shadow; items highlight in Mist.
- **Mobile:** below 75rem a menu button opens a full-height Ridge Blue panel with a full-width red Registrace and large condensed caps links (width 66, 780, 1.875rem).
- **Ride rail:** a slim long-route profile docked under the header. The untravelled road is Mist with a Haze stroke, the travelled part Haze with a Steep Blue stroke, and a red marker rides the line as the visitor scrolls. Stops stand at their km on stems with condensed caps names and Fog Ink km; the current stop takes a red underline. Below 72rem it becomes one line ("where you are") that opens the list of stops. Under reduced motion the marker jumps between stops.

### Road Book Profile (signature)
The route's stage profile, the heart of the system.
- **Order (home, `layout="split"`):** the section opens with its heading and lede; the stage header stands beside them in 7fr, its ink rule level with the top of the heading, so the route tabs come before everything they switch, and the "Délky podle propozic" footnote follows right under it, beside the asterisks it explains. Then the profile full width, then the legend and the Mapy.com link in 5fr beside the climbs table in 7fr, then the places disclosure. Narrower screens stack the same order. Source order is visual order.
- **Stage header:** a 2px ink top rule over a row of facts (Start, Cíl, Délka, Převýšení, Nejvýš), each a Fog Ink label over a Figure value and a qualifier, split by Hairlines. With two routes it begins with the route switch: lettered tabs (A, B in 1.75rem outlined squares) where the checked route inverts to ink. On the home page the tabs always take their own row, and wherever the five facts share one row (above 48rem) they stand in equal tracks, each value over its qualifier, so the Hairlines hold still when the route changes; phones set them in two columns.
- **Plot:** the grade-0 base with grade 1–3 fills per 200 m sample, a 2px ink line on top, dashed altitude gridlines at 600, 800 and 1000 m.
- **Places:** vertical Place labels on 1px ink stems (55 % opacity) ending in a paper dot on the line; second-tier places hide on phones. Spectator spots replace the stem and dot with red.
- **Climbs:** open brackets above the plot from foot to top, labelled with the average grade where no stem passes.
- **Services:** paper badges with an ink ring holding the clock (timing) and bottle (feed) icons, sitting just above the road.
- **Axis:** a 1.5px ink baseline, ticks every 5 km (major every 10 km, labelled), the unit in a Fog Ink label.
- **Scrub:** pointer, touch or arrow keys move a red cursor and dot along the road; an ink readout beside it shows "km 51,4 · 1 053 m" and the place name in Pale Haze caps. The plot is a slider with a spoken value.
- **Motion:** the profile is drawn left to right once when it enters view (clip-path, 1.9s ease-out); stems, brackets and badges land as the line passes them (0.5s, delayed by km). Reduced motion shows everything at once.
- **Text twin:** a climbs table and a "Místa na trati" disclosure carry every number the drawing shows.

### Page Head
A Ridge Blue band whose lower edge is the real long-route profile filled with Snow. A Display H1, a Mist lede, optional ghost jump buttons, an optional photograph under a bottom-up Night Ridge scrim, and an optional mark: a red dot on the ridge's own vertex with a white stem and the place name in vertical condensed caps. The ridge rides in left to right on load.

### Hero
The intro video full bleed under the white header, a lower-left scrim, copy lower left (Display H1, tagline, route facts as condensed caps with red square bullets, red Registrace and the price-now line), and the long-route profile rising out of the bottom edge in Snow with Pomezní Boudy and Pražská bouda on red summit dots. A visible pause control sits top right.

### Price Climb
Startovné as a staircase on a dark field: one Steep Blue bar per deadline with a Pale Haze cap line, the price in Figure type above it, the deadline label below. Past steps fade to 40 % with the price struck through; the current step turns red with a white cap and carries the red "Teď platí" flag. Below 34rem the stairs become horizontal bars.

### Map Plate and Timetable
The map draws both routes from the same samples, north up, on a Paper plate with a Mist 5 km grid: the long route as a 2.5px ink line, the short route in Mid Ridge where it leaves the long one, both cased in paper, with direction arrowheads, a north arrow and a scale bar. Spectator spots are red numbered pins that match the timetable rows. The timetable is a ruled list: a red numbered disc and condensed caps place name, a note and a "Na mapě" pin link, km per route, and pass-time bars on a 10:00–17:00 hour grid (solid Steep Blue for measured windows, hatched Haze for computed ones, a red tick for the start).

### Icons
One stroke family on a 24 grid: 1.75 stroke, square caps, miter joins, inherited color. Only play, pause and the Facebook and YouTube marks are filled.

## Do's and Don'ts

### Do:
- **Do** draw every ridge, profile and map from the route data (200 m samples) and say which year the route is from ("trasa 2026").
- **Do** stand place names vertically on a 1px stem that ends on the drawn line, in Place type with the altitude in Fog Ink.
- **Do** keep all profiles on one page on the content column's km scale (The Same Scale Rule).
- **Do** set names, headings and labels in condensed caps (width 62–80) and reading text at normal width, prose at max 68ch.
- **Do** put every number in tabular lining figures and Czech format (134,7 km; 1 290 Kč).
- **Do** open data blocks with a ruled ink line (2px stage header, 1.5px lists and tables) and split rows with a 1px Hairline.
- **Do** give every graphic a text twin: the climbs table, the places table, the timetable.
- **Do** use the 3px red focus ring at 3px offset on every interactive element, and make sliders keyboard operable.
- **Do** reveal a profile once, left to right with ease-out cubic-bezier(0.16, 1, 0.3, 1), landing its markers by km, and show it complete under reduced motion.

### Don't:
- **Don't** use red as a band, a heading color or a step of the grade ramp (The Red Means Go Rule).
- **Don't** draw a decorative mountain silhouette; every ridge is the real route.
- **Don't** add a second typeface, a serif or italic display type.
- **Don't** reach for the category kit: italic sport headlines, countdown clocks, rows of identical news cards.
- **Don't** put content in floating cards with shadows; use ruled rows, plates and panels (The Flat Ground Rule).
- **Don't** round rectangles beyond 2px or use pill shapes; circles are for markers on the road only.
- **Don't** set multi-line caps tighter than their leading token (1.02, 1.04, 1.08) (The Accent Clearance Rule).
- **Don't** put a label line above a section heading as a kicker. Labels name data (Start, Délka, Nejvýš) or are the heading themselves (partner tiers, footer columns).
- **Don't** set text lighter than Fog Ink (`ink-3`) on light ground or Moonlit Text (`on-dark-2`) on ridge fields.
- **Don't** mix icon families; new pictograms follow the 24 grid, 1.75 square-capped stroke.
