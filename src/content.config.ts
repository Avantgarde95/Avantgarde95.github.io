import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { allCategories } from "@/features/blog/constants/Category";

const blog = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*.mdx"],
    base: "./src/features/blog/data",
  }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(allCategories),
  }),
});

const study = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*.mdx"],
    base: "./src/features/study/data",
  }),
});

export const collections = { blog, study };
