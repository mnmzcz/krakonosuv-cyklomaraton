import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/partners/*', { eager: true });
const obceFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/obce/*', { eager: true });

const logo = (file: string) => {
  const hit = files[`../assets/partners/${file}`];
  if (!hit) throw new Error(`Missing partner logo ${file}`);
  return hit.default;
};

export type Partner = { name: string; href?: string; logo: ImageMetadata };

export const titular: Partner = { name: 'Casia', logo: logo('2026_02_casia.png') };
export const general: Partner = { name: 'Kasper', href: 'https://www.kasperkovo.cz/', logo: logo('2023_10_kasper_logo_red.png') };

export const main: Partner[] = [
  { name: 'Královéhradecký kraj', href: 'http://www.khk.cz/', logo: logo('2023_10_standard-dvouradkove-color-cmyk.svg') },
  { name: 'Ethanol Energy', href: 'https://www.novyethanolenergy.cz/', logo: logo('2023_10_ethanol-energy-a-s-vector-logo.svg') },
  { name: 'Město Trutnov', href: 'https://www.trutnov.cz/', logo: logo('2024_06_truntov.png') },
];

/** The organisers' sentence, split so the name can be set in bold: "…záštitou <strong>Ing. arch. Michala Rosy</strong>: starosty…". */
export const patronage = {
  lead: 'Závod se koná pod záštitou',
  name: 'Ing. arch. Michala\u00a0Rosy',
  rest: ': starosty města Trutnova',
};

export const partners: Partner[] = [
  { name: 'Lakol', href: 'http://www.lakol.cz/', logo: logo('2023_10_logo-lakol-micro-text.png') },
  { name: 'Elmtrade', href: 'https://www.elmtrade.com/', logo: logo('2023_10_logo-2.svg') },
  { name: 'Cyklostar', href: 'https://www.cyklostar.cz/', logo: logo('2023_10_logo_CYKLOSTAR-original_2018-05_bez-podkladu_cmyk_jpg.webp') },
  { name: 'Pivovar Krakonoš', href: 'https://www.pivovar-krakonos.cz/', logo: logo('2023_10_r93728310c2af2a03d345dffb3453c210.gif') },
  { name: 'Turistické informační centrum Trutnov', href: 'https://www.ictrutnov.cz/', logo: logo('2024_06_TIC_zkratka_RGB.png') },
  { name: 'BAK', href: 'https://www.bak.cz/cs', logo: logo('2023_10_bak.svg') },
  { name: 'SportHelp', href: 'https://sporthelp.cz/', logo: logo('2025_05_logonew.png') },
  { name: 'Odkolek', href: 'https://odkolek.cz/', logo: logo('2026_02_odkolek.png') },
  { name: 'Havex auto', href: 'https://www.havex.cz/', logo: logo('2026_02_images.png') },
  { name: 'Tufo', href: 'https://www.tufo.com/cz/', logo: logo('2023_10_tufo-bicycle-tyre-company-vector-logo.svg') },
  { name: 'Expres CZ', logo: logo('2024_03_ExpresCZ.jpg') },
  { name: 'Köco', href: 'https://koeco.net/', logo: logo('2023_10_koeco_logo.png') },
  { name: 'Marius Pedersen Group', href: 'https://www.mariuspedersen.cz/', logo: logo('2024_06_mpg_logo2.png') },
  { name: 'STK Dlouhé Pole', logo: logo('2025_04_STK-Dlouhe-Pole-Logo-REVIT.jpg') },
  { name: 'Keramtech', href: 'https://keramtech.cz/', logo: logo('2024_05_keramtech.png') },
  { name: 'Assos', href: 'https://procycle.cz/', logo: logo('2023_10_image.webp') },
  { name: 'Sport Cycling Agency', logo: logo('2024_03_SCA.jpg') },
  { name: 'R&B Sport Bottles', href: 'https://rbmedilek.cz/home', logo: logo('2025_03_RBSB.png') },
  { name: 'Lusti', href: 'http://www.lusti.cz/', logo: logo('2023_10_lusti-logo.png') },
  { name: 'UFFO Trutnov', href: 'http://uffo.cz/', logo: logo('2023_10_uffo.png') },
  { name: 'Protivítr - Invest', href: 'http://www.protivitr-invest.cz/', logo: logo('2023_10_proti.png') },
  { name: 'TST', href: 'http://www.tstu.cz/', logo: logo('2023_10_logo-2.png') },
  { name: 'Amix Nutrition', href: 'https://www.amix-nutrition.cz/', logo: logo('2023_10_logo-3.png') },
  {
    name: 'Transport Trutnov',
    href: 'https://www.mariuspedersen.cz/cs/sluzby-ve-vasem-meste/transport-trutnov-s-r-o/provozovny-k-dispozici/96-transport-trutnov-sro.shtml',
    logo: logo('2023_10_transport.png'),
  },
  { name: 'Gemerka', href: 'https://gemerkavoda.cz/', logo: logo('2023_10_GEMERKA-ZSK-BLUE-RGB-POSITIVE.png') },
  { name: 'Gastpro', href: 'https://www.gastpro.cz/', logo: logo('2023_10_logo.svg') },
  { name: 'Skimu', href: 'https://www.skimu.cz/', logo: logo('2023_10_logo-1.svg') },
  { name: 'ZPA', href: 'https://www.zpa.cz/', logo: logo('2023_10_logo_zpa.svg') },
  { name: 'Radioking', href: 'http://www.radioking.cz/', logo: logo('2023_10_radioking.png') },
  { name: 'Lanová dráha Sněžka', href: 'https://www.snezkalanovka.cz/', logo: logo('2023_10_logo-4.png') },
  { name: 'Mezzo caffè', href: 'https://www.kavaprodej.cz', logo: logo('2026_02_Mezzo.jpg') },
];

export const media: Partner[] = [
  { name: 'Česká televize', href: 'https://www.ceskatelevize.cz/', logo: logo('2023_10_logo-ceskatelevize-full.png') },
  { name: 'Trutnovinky', href: 'https://trutnovinky.cz/', logo: logo('2023_10_logo-5.png') },
  { name: 'RoadCycling.cz', href: 'https://www.roadcycling.cz/', logo: logo('2024_12_RC_logo_cmyk.png') },
  { name: 'RoadCup 2025', href: 'https://www.roadcycling.cz/roadcup/rocnik-2025', logo: logo('2024_12_logo_roadcup25.png') },
];

export const union: Partner = {
  name: 'Svazek obcí Východní Krkonoše',
  href: 'http://www.vychodnikrkonose.cz/',
  logo: logo('2023_10_g275-SopS-logo-barva.png'),
};

export const towns = [
  { name: 'Trutnov', href: 'https://www.trutnov.cz/' },
  { name: 'Janské Lázně', href: 'https://janske-lazne.cz/' },
  { name: 'Horní Maršov', href: 'https://www.hornimarsov.cz/' },
  { name: 'Malá Úpa', href: 'https://malaupa.cz/' },
  { name: 'Svoboda nad Úpou', href: 'https://www.musvoboda.cz/' },
  { name: 'Žacléř', href: 'https://www.zacler.cz/' },
  { name: 'Pec pod Sněžkou', href: 'https://www.pecpodsnezkou.cz/' },
  { name: 'Mladé Buky', href: 'https://www.obecmladebuky.cz/' },
  { name: 'Černý Důl', href: 'https://www.cernydul.cz/' },
  { name: 'Lubawka', href: 'http://um.lubawka.eu/' },
  { name: 'Vrchlabí', href: 'https://www.muvrchlabi.cz/' },
  { name: 'Lánov', href: 'https://www.lanov.cz/' },
  { name: 'Strážné', href: 'https://www.strazne.eu/' },
];

const obce = (file: string) => {
  const hit = obceFiles[`../assets/obce/${file}`];
  if (!hit) throw new Error(`Missing town mark ${file}`);
  return hit.default;
};

/**
 * A town's coat of arms or logo. `ink` is the drawn area inside the file as [left, top, width, height]
 * in source pixels (measured with sharp's trim on white), so the board can crop away the padding some
 * files carry and size every mark by its visible area rather than by its canvas.
 */
export type TownMark = { logo: ImageMetadata; ink: [number, number, number, number] };

/** Coats of arms and town logos from the old homepage strip, crests alternating with wordmarks; the town names are listed as text beside them. */
export const townMarks: TownMark[] = [
  { logo: obce('2023_10_janske-lazne-logo-vertikalni-cmyk-barevne.png'), ink: [0, 0, 370, 126] },
  { logo: obce('2023_10_11-1.png'), ink: [101, 18, 132, 164] },
  { logo: obce('2023_10_logo-marsov-660x176-cs.png'), ink: [23, 25, 977, 217] },
  { logo: obce('2023_10_23-1.png'), ink: [101, 18, 136, 164] },
  { logo: obce('2023_10_logopec.png'), ink: [8, 8, 227, 93] },
  { logo: obce('2023_10_logo-12.png'), ink: [18, 23, 68, 85] },
  { logo: obce('2023_10_mulogo-1.png'), ink: [50, 48, 251, 251] },
  { logo: obce('2023_10_44-1.png'), ink: [101, 19, 130, 162] },
  { logo: obce('2023_10_logo-21.png'), ink: [0, 0, 274, 77] },
  { logo: obce('2023_10_znak-1.png'), ink: [278, 77, 445, 523] },
  { logo: obce('2023_10_logo_gmina_lubawka_mieszkanca.png'), ink: [13, 13, 215, 49] },
];

export const support = {
  region: { text: 'Realizováno za finanční podpory Královéhradeckého kraje', logo: logo('2023_10_standard-dvouradkove-color-cmyk.svg') },
  cooperation: { text: 'Realizováno ve spolupráci', logo: logo('2023_10_g275-ESUS-logo.jpg') },
};
