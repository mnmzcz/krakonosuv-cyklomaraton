import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const aktuality = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/aktuality' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      slug: z.string(),
      category: z.string().default('Novinky'),
      image: image(),
      imageAlt: z.string(),
      excerpt: z.string(),
    }),
});

export const collections = { aktuality };
