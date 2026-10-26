import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'aktuality'>;

const pad = (n: number) => String(n).padStart(2, '0');

/** WordPress-era permalink: /YYYY/MM/DD/slug/ */
export const postUrl = (p: Post) => {
  const d = p.data.date;
  return `/${d.getUTCFullYear()}/${pad(d.getUTCMonth() + 1)}/${pad(d.getUTCDate())}/${p.data.slug}/`;
};

export const postDate = (p: Post) =>
  p.data.date.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const postDateShort = (p: Post) =>
  `${p.data.date.getUTCDate()}. ${p.data.date.getUTCMonth() + 1}. ${p.data.date.getUTCFullYear()}`;

export async function getPosts() {
  const posts = await getCollection('aktuality');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
