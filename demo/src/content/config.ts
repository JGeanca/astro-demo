import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { articles };
