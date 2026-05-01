export declare function handlePreviewPost(rawInput: unknown): Promise<string>;
export declare function handlePublishPost(rawInput: unknown): Promise<string>;
export declare function handleListPosts(rawInput: unknown): Promise<string>;
export declare function handleGetPost(rawInput: unknown): Promise<string>;
export declare function handleDeletePost(rawInput: unknown): Promise<string>;
export declare const toolDefinitions: {
    name: string;
    description: string;
    inputSchema: Record<string, unknown>;
}[];
