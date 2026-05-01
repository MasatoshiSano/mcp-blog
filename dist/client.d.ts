export interface ApiClientConfig {
    endpoint: string;
    apiKey: string;
}
export interface PreviewResponse {
    correctedMarkdown: string;
    correctedFrontmatter: Record<string, unknown>;
    diff: Record<string, unknown>;
    unsplashImageUrl?: string;
}
export interface PublishResponse {
    slug: string;
    deployingAt: string;
    estimatedReady: string;
}
export interface ListPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    published: boolean;
}
export interface DeleteResponse {
    deleted: string;
    deployingAt: string;
}
export interface PresignResponse {
    uploadUrl: string;
    key: string;
}
export declare class ApiError extends Error {
    readonly status: number;
    constructor(status: number, message: string);
}
export declare function previewPost(markdown: string, slug?: string, imageMeta?: {
    filename: string;
    contentType: string;
}): Promise<PreviewResponse>;
export declare function publishPost(payload: {
    slug: string;
    markdown: string;
    frontmatter: Record<string, unknown>;
}): Promise<PublishResponse>;
export declare function listPosts(published?: boolean, limit?: number): Promise<ListPost[]>;
export declare function getPost(slug: string): Promise<{
    slug: string;
    markdown: string;
    frontmatter: Record<string, unknown>;
}>;
export declare function deletePost(slug: string): Promise<DeleteResponse>;
