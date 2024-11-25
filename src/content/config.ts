import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string().optional(),
      tags: z.array(z.string()),
      description: z.string().optional(),
      pubDate: z.string().transform((str) => new Date(str)).optional(),
      imgUrl: image().optional(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
  blog: blogCollection,
};
