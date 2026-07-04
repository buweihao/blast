import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['清洁', '补水', '防晒', '抗衰']),
    summary: z.string(),
    image: z.string(),
    moq: z.string(),
    leadTime: z.string(),
    certification: z.string(),
    specs: z.array(z.string()),
    applications: z.array(z.string()),
  }),
});

export const collections = { products };
