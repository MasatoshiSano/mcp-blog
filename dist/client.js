// REST API クライアント — fetch + BLOG_API_KEY ヘッダ
export class ApiError extends Error {
    status;
    constructor(status, message) {
        super(message);
        this.status = status;
        this.name = "ApiError";
    }
}
function getConfig() {
    const endpoint = process.env.BLOG_API_ENDPOINT;
    const apiKey = process.env.BLOG_API_KEY;
    if (!endpoint) {
        throw new Error("BLOG_API_ENDPOINT 環境変数が設定されていません");
    }
    if (!apiKey) {
        throw new Error("BLOG_API_KEY 環境変数が設定されていません");
    }
    return { endpoint: endpoint.replace(/\/$/, ""), apiKey };
}
async function request(method, path, body) {
    const config = getConfig();
    const url = `${config.endpoint}${path}`;
    const headers = {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
    };
    const res = await fetch(url, {
        method,
        headers,
        body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
        let message = `HTTP ${res.status}`;
        try {
            const err = (await res.json());
            if (err.error)
                message = err.error;
        }
        catch {
            // JSON パース失敗は無視
        }
        throw new ApiError(res.status, message);
    }
    return res.json();
}
export async function previewPost(markdown, slug, imageMeta) {
    return request("POST", "/admin/posts/preview", {
        markdown,
        slug,
        imageMeta,
    });
}
export async function publishPost(payload) {
    return request("POST", "/admin/posts/publish", payload);
}
export async function listPosts(published, limit) {
    // API は { posts: [...] } 形式で返すため unwrap する
    const params = new URLSearchParams();
    if (published !== undefined)
        params.set("published", String(published));
    if (limit !== undefined)
        params.set("limit", String(limit));
    const query = params.toString();
    const res = await request("GET", `/admin/posts${query ? `?${query}` : ""}`);
    return res.posts ?? [];
}
export async function getPost(slug) {
    return request("GET", `/admin/posts/${encodeURIComponent(slug)}`);
}
export async function deletePost(slug) {
    return request("DELETE", `/admin/posts/${encodeURIComponent(slug)}`);
}
