import { defineCollection, z } from "astro:content";

const blogsCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    description: z.string(),
    isPublished: z.boolean(),
    imagePath: image().optional(),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = { blogs: blogsCollection };
