// Facts of the current edition. Copy is the organisers' wording; change it here, every page reads it.

export const race = {
  name: 'Krakonošův cyklomaraton',
  fullName: 'Casia Krakonošův cyklomaraton',
  edition: 14,
  year: 2027,
  dateISO: '2027-06-12',
  dateLong: '12. června 2027',
  dateDay: 'sobota, 12. června 2027',
  title: 'Krakonošův cyklomaraton 2027',
  tagline: 'Těšíme se na vás na 14. ročníku 12. června 2027!',
  organiser: 'SK Cyklistika Trutnov, z.s.',
  coOrganiser: 'Svazkem obcí Východní Krkonoše',
  venue: 'Trutnov, Společenské centrum Trutnovska pro kulturu a volný čas (UFFO) – Náměstí Republiky 999',
  venueShort: 'Trutnov, UFFO',
  venueMap: 'https://mapy.com/fnc/v1/showmap?mapset=outdoor&center=15.91008,50.56263&zoom=16&marker=true',
  registrationUrl: 'https://registrace.sportsoft.cz/registration.aspx?e=3625',
  startlistUrl: 'https://registrace.sportsoft.cz/startlist.aspx?e=3625',
  youtubeId: 'ZuI7GtwW8YM',
  routesNote: 'Délka a převýšení tratí bude upřesněno po schválení přesné podoby tratí PČR, především s ohledem na aktuální stav komunikací v době konání závodu.',
};

export type PriceTier = { until: string | null; label: string; short?: number; long?: number; cash?: number };

// Labels carry a no-break space (\u00a0) between day and month: the hero rewrites the price line in
// the browser, after the build-time Czech typography pass has run.
export const priceTiers: PriceTier[] = [
  { until: '2026-12-31', label: 'Do 31.\u00a0prosince 2026', short: 1290, long: 1490 },
  { until: '2027-05-12', label: 'Do 12.\u00a0května 2027', short: 1590, long: 1790 },
  { until: '2027-06-09', label: 'Do 9.\u00a0června 2027', short: 1890, long: 2090 },
  { until: null, label: 'Na místě v\u00a0hotovosti', cash: 2600 },
];

export const priceNote = '* Nižší cena je za krátkou trať, vyšší cena je za dlouhou trať';

/** Index of the tier that applies on the given day (a tier is valid through its `until` date). */
export function currentTierIndex(today = new Date()) {
  const day = today.toISOString().slice(0, 10);
  const i = priceTiers.findIndex((t) => t.until && day <= t.until);
  return i === -1 ? priceTiers.length - 1 : i;
}

export const kc = (n: number) => `${n.toLocaleString('cs-CZ').replace(/\s/g, ' ')} Kč`;

export const program = [
  {
    day: 'Pátek 11. 6. 2027',
    items: [{ time: '18:00 – 20:30', what: 'registrace závodníků, výdej startovních čísel' }],
  },
  {
    day: 'Sobota 12. 6. 2027',
    items: [
      { time: '07:30 – 09:30', what: 'registrace závodníků, výdej startovních čísel hlavní závod' },
      { time: '07:30 – 10:00', what: 'registrace závodníků, výdej startovních čísel dětské závody' },
      { time: '10:00', what: 'start hlavního závodu-dlouhá trasa', key: true },
      { time: '10:05', what: 'start hlavního závodu-krátká trasa', key: true },
      { time: '10:30 – 11:45', what: 'dětské závody' },
      { time: '12:30 – 12:45', what: 'předpokládaný příjezd prvních závodníků z hlavního závodu', key: true },
      { time: '16:00', what: 'vyhlášení výsledků, tombola', key: true },
      { time: 'celý den', what: 'doprovodné akce' },
    ],
  },
];

export const programNote =
  'Pořadatel si vyhrazuje právo změny času vyhlášení výsledků a losování tomboly. Sledujte aktuální zprávy speakera závodu.';

export const contacts = [
  { role: 'Přihlášky, úhrada startovného', name: 'Michaela Musilová', phone: '+420 739 008 143', email: 'musilova.m@centrum.cz' },
  { role: 'Trať', name: 'Ivan Vetterle', phone: '+420 602 656 058' },
  { role: 'Ředitel závodu', name: 'Jan Slavíček', phone: '+420 777 722 710', email: 'slavicek@cyclingagency.cz' },
];

export const tel = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;

export const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/krakonosuvcyklomaraton', icon: 'facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/krakonosuvcyklomaraton/', icon: 'instagram' },
  { name: 'YouTube', href: 'https://www.youtube.com/@krakonosuvcyklomaraton9209', icon: 'youtube' },
] as const;

/** external opens in a new tab; mapy marks a route on Mapy.com, shown with its logo */
export type NavItem = { label: string; href?: string; external?: boolean; mapy?: boolean; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: 'Aktuality', href: '/aktuality/' },
  {
    label: 'Závodníci',
    children: [
      { label: 'Registrace', href: '/registrace/' },
      { label: 'Propozice', href: '/propozice/' },
      { label: 'Ubytování', href: '/ubytovani/' },
      { label: 'Krátká trasa 2026', href: 'https://mapy.com/s/lufujuloce', external: true, mapy: true },
      { label: 'Dlouhá trasa 2026', href: 'https://mapy.com/s/jurotegada', external: true, mapy: true },
    ],
  },
  { label: 'Fanoušci', href: '/fanousci/' },
  { label: 'Výsledky', href: '/vysledky/' },
  { label: 'Fotogalerie', href: '/fotogalerie/' },
  { label: 'Partneři', href: '/partneri/' },
  {
    label: 'E-shop',
    children: [
      { label: 'Vouchery', href: '/vouchery/' },
      { label: 'Dárkové předměty', href: '/e-shop/' },
    ],
  },
  { label: 'Kontakt', href: '/kontakty/' },
];

export const testimonials = [
  { quote: 'Famózně zvládnutý závod!', name: 'Petr Benčík', note: 'Trojnásobný mistr ČR' },
  {
    quote:
      'Jela jsem potřetí.... nejedu ani omylem na umístění... Přesto MOC RÁDA pojedu příští rok znovu... Krásný závod, parádní organizace, nádherným koutem naší země, po těch našich krásných krkonošských kopcích.... Beru tento závod jako prestižní záležitost a považuji za čest postavit se na jeho start.. Příští rok se těším...',
    name: 'Jana Kynčlová',
  },
  {
    quote:
      'Toužíte-li se cítit jako v peřince, být hýčkáni, mít na silnici absolutní přednost před auty, jet skvělou trať a na české poměry na luxusním asfaltu, pak doporučuji zúčastnit se Krakonošova cyklomaratonu.',
    name: 'Rychlonožka',
    note: 'Kolokrám team',
  },
  { quote: 'Díky za nádhernou trať, skvělou organizaci a celkově parádní závod, těším se na příští ročník 🤩🤩🤩', name: 'Jiří Švancara' },
  { quote: 'Bylo to super. Všem velké díky za uspořádání takové akce. Přátelé,kamarádi zase za rok 👍🚴', name: 'Pavel Barvínek' },
  { quote: 'Respekt před pořadatelema. Díky všem', name: 'Tadeáš Hlinka' },
];
