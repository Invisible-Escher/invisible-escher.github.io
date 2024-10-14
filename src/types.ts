import { z } from "astro:content";

export const blogTitle = "Invisible Escher";
export const blogDescription = "A blog about webdev, rust and devops";
export const blogUrl = "https://danielgrants.com";
export const blogAuthor = "Invisible Escher";

export const latestPostCount = 3;
export const favouritePostSlugs = ["how-i-made-my-blog"];

export const categoryNames = ["Writings", "rust", "devops"] as const;

export type Category = (typeof categoryNames)[number];

export type CategoryData = {
    name: string;
    description: string;
    color: { dark: string; light: string };
};

export const categories: Record<Category, CategoryData> = {
    Writings: {
        name: "Writings",
        description:
            "Longer from writings, experiments in autie-ethnographic narratives.",
        color: { dark: "0, 216, 255", light: "0, 125, 149" },
    },
    rust: {
        name: "rust",
        description:
            "My thoughts on the blazing fast language, that is everybody's favourite.",
        color: { dark: "244, 102, 35", light: "244, 102, 35" },
    },
    devops: {
        name: "devops",
        description:
            "All about deploying stuff to places: Docker and Kubernetes to on-premise or the cloud.",
        color: { dark: "29, 99, 237", light: "29, 99, 237" },
    },
};

export const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(categoryNames),
});

export type Post = z.infer<typeof postSchema>;

export type LayoutData = Partial<Post> & {
    title: string;
    isCategoryPage?: boolean;
};
