import { defineCollection } from "astro:content";
import { postSchema } from "../types";

const posts = defineCollection({
    type: "content",
    schema: postSchema,
});

posts.sort((a, b) => Date.parse(b.frontmatter.pubDate) - Date.parse(a.frontmatter.pubDate));

export const collections = {
    posts,
};
