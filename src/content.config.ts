import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    id: z.number(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string().optional(),
    imageAlt: z.string().optional(),
    pubDate: z.string(),
    author: z.string().default('Ben Force'),
    avatarUrl: z.string().optional(),
    category: z.string().default('General'),
    readTime: z.number().optional(),
    featured: z.boolean().default(false)
  })
})

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().optional(),
    updatedDate: z.string().optional()
  })
})

export const collections = { blog, pages }
