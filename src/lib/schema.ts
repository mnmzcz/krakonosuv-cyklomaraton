// Structured data (schema.org JSON-LD) for search engines, built from the same data the pages show.
// The homepage carries the race as a SportsEvent with the organisation and the site; news posts are
// NewsArticles. Check changes with Google's Rich Results Test.
import data from '../data/routes.json';
import { priceTiers, race, social } from '../data/race';

const routes = data.routes;

const organisation = (site: URL) => ({
  '@type': 'Organization',
  '@id': new URL('#organizace', site).href,
  name: race.fullName,
  alternateName: race.name,
  url: site.href,
  logo: new URL('/brand/kcm-logo-square.jpg', site).href,
  sameAs: social.map((s) => s.href),
});

// price labels carry no-break spaces for the page; search engines get plain ones
const plain = (s: string) => s.replace(/\u00a0/g, ' ');

/** The day after a date given as YYYY-MM-DD: when the next price tier starts. */
const nextDay = (day: string) => {
  const d = new Date(`${day}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
};

function offers() {
  const list: object[] = [];
  priceTiers.forEach((t, i) => {
    const validFrom = i > 0 && priceTiers[i - 1].until ? nextDay(priceTiers[i - 1].until!) : undefined;
    const base = { '@type': 'Offer', priceCurrency: 'CZK', url: race.registrationUrl, availability: 'https://schema.org/InStock', validFrom };
    if (t.cash) {
      list.push({ ...base, name: plain(t.label), price: t.cash, validFrom: race.dateISO, validThrough: race.dateISO });
      return;
    }
    if (t.long) list.push({ ...base, name: `${routes.long.name}, ${plain(t.label).toLowerCase()}`, price: t.long, validThrough: t.until });
    if (t.short) list.push({ ...base, name: `${routes.short.name}, ${plain(t.label).toLowerCase()}`, price: t.short, validThrough: t.until });
  });
  return list;
}

/** The race, the organisation behind its name and the site, for the homepage. */
export function homeSchema(site: URL, image: string) {
  const [lon, lat] = new URL(race.venueMap).searchParams.get('center')!.split(',').map(Number);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organisation(site),
      {
        '@type': 'WebSite',
        '@id': new URL('#web', site).href,
        name: race.fullName,
        url: site.href,
        inLanguage: 'cs',
        publisher: { '@id': new URL('#organizace', site).href },
      },
      {
        '@type': 'SportsEvent',
        '@id': new URL('#zavod', site).href,
        name: `${race.fullName} ${race.year}`,
        description: race.pitch,
        sport: 'Silniční cyklistika',
        url: site.href,
        image: [image],
        // the race is always in mid-June, on Central European Summer Time
        startDate: `${race.dateISO}T${routes.long.start}:00+02:00`,
        endDate: race.dateISO,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Společenské centrum UFFO',
          address: {
            '@type': 'PostalAddress',
            streetAddress: race.venue.split('– ').pop(),
            addressLocality: 'Trutnov',
            addressCountry: 'CZ',
          },
          geo: { '@type': 'GeoCoordinates', latitude: lat, longitude: lon },
        },
        organizer: { '@type': 'SportsOrganization', name: race.organiser, url: site.href },
        offers: offers(),
      },
    ],
  };
}

/** A news post. */
export function articleSchema(site: URL, page: URL, post: { title: string; date: Date; excerpt?: string }, image: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.excerpt,
    image: [image],
    datePublished: post.date.toISOString().slice(0, 10),
    mainEntityOfPage: page.href,
    author: { '@type': 'Organization', name: race.fullName, url: site.href },
    publisher: organisation(site),
  };
}
