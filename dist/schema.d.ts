import { z } from "zod";
export declare const SlugSchema: z.ZodString;
export declare const PreviewToolInputSchema: z.ZodObject<{
    markdown: z.ZodString;
    slug: z.ZodOptional<z.ZodString>;
    imageMeta: z.ZodOptional<z.ZodObject<{
        filename: z.ZodString;
        contentType: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        filename: string;
        contentType: string;
    }, {
        filename: string;
        contentType: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    markdown: string;
    slug?: string | undefined;
    imageMeta?: {
        filename: string;
        contentType: string;
    } | undefined;
}, {
    markdown: string;
    slug?: string | undefined;
    imageMeta?: {
        filename: string;
        contentType: string;
    } | undefined;
}>;
export declare const PublishToolInputSchema: z.ZodObject<{
    slug: z.ZodString;
    markdown: z.ZodString;
    frontmatter: z.ZodObject<{
        title: z.ZodString;
        icon: z.ZodString;
        type: z.ZodEnum<["tech", "idea"]>;
        topics: z.ZodArray<z.ZodString, "many">;
        published: z.ZodBoolean;
        category: z.ZodString;
        date: z.ZodString;
        updated: z.ZodOptional<z.ZodString>;
        featured: z.ZodOptional<z.ZodBoolean>;
        series: z.ZodOptional<z.ZodString>;
        seriesOrder: z.ZodOptional<z.ZodNumber>;
        coverImage: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        published: boolean;
        type: "tech" | "idea";
        title: string;
        icon: string;
        date: string;
        topics: string[];
        category: string;
        updated?: string | undefined;
        featured?: boolean | undefined;
        series?: string | undefined;
        seriesOrder?: number | undefined;
        coverImage?: string | undefined;
        description?: string | undefined;
    }, {
        published: boolean;
        type: "tech" | "idea";
        title: string;
        icon: string;
        date: string;
        topics: string[];
        category: string;
        updated?: string | undefined;
        featured?: boolean | undefined;
        series?: string | undefined;
        seriesOrder?: number | undefined;
        coverImage?: string | undefined;
        description?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    markdown: string;
    slug: string;
    frontmatter: {
        published: boolean;
        type: "tech" | "idea";
        title: string;
        icon: string;
        date: string;
        topics: string[];
        category: string;
        updated?: string | undefined;
        featured?: boolean | undefined;
        series?: string | undefined;
        seriesOrder?: number | undefined;
        coverImage?: string | undefined;
        description?: string | undefined;
    };
}, {
    markdown: string;
    slug: string;
    frontmatter: {
        published: boolean;
        type: "tech" | "idea";
        title: string;
        icon: string;
        date: string;
        topics: string[];
        category: string;
        updated?: string | undefined;
        featured?: boolean | undefined;
        series?: string | undefined;
        seriesOrder?: number | undefined;
        coverImage?: string | undefined;
        description?: string | undefined;
    };
}>;
export declare const ListToolInputSchema: z.ZodObject<{
    published: z.ZodOptional<z.ZodBoolean>;
    limit: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    published?: boolean | undefined;
    limit?: number | undefined;
}, {
    published?: boolean | undefined;
    limit?: number | undefined;
}>;
export declare const DeleteToolInputSchema: z.ZodObject<{
    slug: z.ZodString;
}, "strip", z.ZodTypeAny, {
    slug: string;
}, {
    slug: string;
}>;
export declare const GetToolInputSchema: z.ZodObject<{
    slug: z.ZodString;
}, "strip", z.ZodTypeAny, {
    slug: string;
}, {
    slug: string;
}>;
export type PreviewToolInput = z.infer<typeof PreviewToolInputSchema>;
export type PublishToolInput = z.infer<typeof PublishToolInputSchema>;
export type ListToolInput = z.infer<typeof ListToolInputSchema>;
export type DeleteToolInput = z.infer<typeof DeleteToolInputSchema>;
export type GetToolInput = z.infer<typeof GetToolInputSchema>;
