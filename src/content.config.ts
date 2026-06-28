import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const series = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/series' }),
  schema: z.object({
    slug: z.string(),
    category: z.object({
      en: z.string(),
      fr: z.string().optional()
    }),
    locales: z.array(z.enum(['en', 'fr'])),
    color: z.string().optional(),
    title: z.object({
      en: z.string(),
      fr: z.string().optional()
    }),
    description: z.object({
      en: z.string(),
      fr: z.string().optional()
    }),
    cover: z.object({
      en: z.string(),
      fr: z.string().optional()
    }),
    episodes: z.array(z.object({
      slug: z.string(),
      title: z.object({
        en: z.string(),
        fr: z.string().optional()
      }),
      description: z.object({
        en: z.string(),
        fr: z.string().optional()
      }),
      cover: z.object({
        en: z.string(),
        fr: z.string().optional()
      }),
      audio: z.object({
        en: z.string(),
        fr: z.string().optional()
      }),
      duration: z.string()
    }))
  })
});

export const collections = { series };
