# mcp-blog

Claude Code / Cursor から自然言語でブログ記事を投稿できる MCP サーバーです。

## できること

自分のプロジェクトで作業しながら、Claude に話しかけるだけでブログに投稿できます。

```
「今日のデバッグ作業をブログ記事にして投稿して」
「記事の一覧を見せて」
「slug が xxx の記事を削除して」
```

## 仕組み

```
あなた（Claude Code / Cursor）
  ↓ 自然言語で指示
MCP サーバー（このパッケージ）
  ↓ HTTPS
ブログ API（Lambda）
  ↓
S3 に保存 → GitHub Actions が起動 → サイト自動更新（1〜3分）
```

## セットアップ

### 必要なもの

- Node.js v20 以上
- ブログ API キー（管理者から発行）

### 設定ファイルに追加

**Claude Code** (`~/.claude/settings.json`) または **Cursor** (`~/.cursor/mcp.json`) に追記します。

```jsonc
{
  "mcpServers": {
    "blog": {
      "command": "npx",
      "args": ["-y", "github:MasatoshiSano/mcp-blog"],
      "env": {
        "BLOG_API_ENDPOINT": "https://dxbqlfvrescw1.cloudfront.net/api",
        "BLOG_API_KEY": "your-api-key"
      }
    }
  }
}
```

設定後は Claude Code / Cursor を再起動すると使えるようになります。

## ツール一覧

| ツール | 説明 |
|---|---|
| `blog_preview_post` | markdown を渡すと AI がフロントマターを自動補完・本文を校正してプレビューを返す |
| `blog_publish_post` | 記事を S3 に保存して GitHub Actions のビルドをトリガーする |
| `blog_list_posts` | 記事一覧を取得する（公開済み・下書きでフィルタ可能） |
| `blog_get_post` | 指定 slug の記事 Markdown を取得する |
| `blog_delete_post` | 記事を削除してビルドをトリガーする |

## 環境変数

| 変数名 | 必須 | 説明 |
|---|---|---|
| `BLOG_API_ENDPOINT` | ✅ | ブログ API のベース URL（例: `https://xxx.cloudfront.net/api`） |
| `BLOG_API_KEY` | ✅ | 認証用 API キー |

## 開発者向け: ローカルビルド

```bash
cd mcp-blog
npm install
npm run build
# → dist/index.js が生成される
```

ローカルビルドを使う場合は `npx` の代わりに直接 `node` で指定します：

```jsonc
{
  "mcpServers": {
    "blog": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-blog/dist/index.js"],
      "env": { ... }
    }
  }
}
```
