# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output), chosen by the user. Pages keep the WordPress-era URLs (`/registrace/`, `/propozice/`, `/2026/02/15/…/`) so existing links and search results keep working. Content that changes every season (prices, dates, program, partners, routes) lives in `src/data/`; news posts live in `src/content/aktuality/`.

## Users

- **Amateur road cyclists** (18 to 60+, men and women, solo riders and club teams) from the Czech Republic and nearby Poland/Germany. They decide whether to ride, compare the long and short route, register early for the lower price, and come back for practical race-week information (program, start times, parking, kit pickup).
- **Fans and families** (new audience): partners, friends and kids of riders, locals along the route. They want to know where to stand, when the riders come through, what is happening in Trutnov on race day and how to get around.
- **Partners and municipalities**: titular partner Casia, general partner Kasper, the Hradec Králové Region, the town of Trutnov and the Svazek obcí Východní Krkonoše. They expect visible, accurate placement.

## Product Purpose

Krakonošův cyklomaraton is a public road cycling marathon (silniční cyklomaraton, veřejný závod) from Trutnov through the eastern Krkonoše and over the Polish border. The site exists to get riders registered and paid early, to give them every rule and practical detail, and (new) to bring fans to the roadside and the finish area. Success: registrations in the early price tiers, fewer repeated questions to the organisers, more people at the route on race day.

## Positioning

A long-running regional race (14th edition on 12 June 2027) on real mountain roads: the long route climbs to Pomezní Boudy and Pražská bouda, the short route to Pomezní Boudy, both through Lubawka in Poland. The race is run in full traffic, timed by chip, with team classification, kids' races and a family finish area in Trutnov. No other race owns this road.

## Operating Context

- Registration and payment run on SportSoft (`registrace.sportsoft.cz`, event 3625); results on `vysledky.sportsoft.cz`. The site links out; it does not process payments.
- Routes are published as shared Mapy.com routes (2026: short `mapy.com/s/lufujuloce`, long `mapy.com/s/jurotegada`). The 2027 routes are pending police approval.
- Start and finish: Společenské centrum UFFO, Náměstí Republiky 999, Trutnov.
- Race day is mid-June; riders read the site at home in winter (registration) and on a phone outdoors in race week.

## Capabilities and Constraints

- Price tiers depend on the payment date (see `src/data/race.ts`); the site highlights the tier that applies today.
- Forms (team registration, voucher interest, e-shop enquiry) are static HTML forms marked for Netlify Forms; they need a form backend wherever the site is deployed.
- The intro video is the YouTube video `ZuI7GtwW8YM`; the hero keeps it.
- Language: Czech only for now. The old site machine-translated via GTranslate; translations are an open decision.
- Open: 2027 route lengths and elevation are "upřesněno po schválení PČR". The site shows the 2026 routes and says so.

## Brand Commitments

- Name: "Casia Krakonošův cyklomaraton" (Casia is the titular partner until 2031). Logo files: `public/brand/kcm-casia.png` (full colour, with Casia badge), `public/brand/krakonos-white.png` (white wordmark).
- Voice: Czech, friendly and direct, addresses riders with "vy"; news posts sometimes use "ty". Keep the organisers' wording on rules and prices verbatim.
- Contacts: Michaela Musilová (přihlášky, úhrada startovného), Ivan Vetterle (trať), Jan Slavíček (ředitel závodu).
- Site credit: "Created by minimize".

## Evidence on Hand

- Route geometry and elevation of the 2026 routes, sampled from Mapy.com (`src/data/routes.json`): long 134.7 km, +2 489 m, max 1 115 m; short 88.5 km, +1 523 m, max 1 048 m.
- Official 2026 results with split times at Pomezní bouda and Pražská bouda (SportSoft race 805): 223 finishers on the long route, 254 on the short; long-route winner 3:34:52, short-route winner 2:19:52. Pass-time windows on the fans page are computed from these splits.
- Race photography from the organisers' own uploads (`public/photos/`), partner logos (`public/partners/`), six news posts, six rider testimonials.
- Not on hand, never fabricate: 2027 route details, KOM/sprint locations, a total participant count across editions, road closures for 2027, fan-zone attractions beyond the official program.

## Product Principles

1. Registration first: every page can reach the registration in one tap, and the current price is never more than a scroll away.
2. Real road, real numbers: kilometres, altitudes and times come from route data and results, and say which year they are from.
3. Organisers' word is final: rules, prices and deadlines are copied, not paraphrased.
4. Partners are part of the race, not a footer: placement follows the partner tiers.
5. Fans are guests: tell them where, when and how to get there, and how to stay safe next to a race in open traffic.

## Accessibility & Inclusion

WCAG 2.1 AA. The hero video is muted, loops and has a visible pause control; all data shown in the route profile is also available as text.
