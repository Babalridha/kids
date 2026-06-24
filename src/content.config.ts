import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const series = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/series' }),
  schema: ({ image }) => z.object({
    name_en: z.string(),
    name_fr: z.string().optional(),
    color: z.string().optional(),
    description_en: z.string(),
    description_fr: z.string().optional(),
    image_en: image(),
    image_fr: image().optional(),
    locales: z.array(z.enum(['en', 'fr'])),
    episodes: z.array(z.object({
      id: z.string(),
      title_en: z.string(),
      title_fr: z.string().optional(),
      audioUrl: z.string(),
      thumbnail_en: image(),
      thumbnail_fr: image().optional(),
      duration: z.string(),
      description_en: z.string(),
      description_fr: z.string().optional(),
      arabicTitle: z.string().optional()
    }))
  })
});

export const collections = { series };

