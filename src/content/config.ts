import { z, defineCollection, reference } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    relatedPost: reference("posts"),
    age: z.number().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  posts,
};
