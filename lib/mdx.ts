import "server-only";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  slug: string;
  category: string;
  tags?: string[];
  author?: string;
  image?: string;
  draft?: boolean;
};

export type Post = {
  meta: PostMeta;
  content: string;
};

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const cleanSlug = decodeURIComponent(slug).replace(/\.mdx$/, "");
  const fullPath = path.join(POSTS_DIR, `${cleanSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const meta: PostMeta = {
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    updatedAt: data.updatedAt ?? data.date ?? "",
    category: data.category ?? "",
    tags: data.tags ?? [],
    author: data.author ?? "",
    image: data.image ?? "",
    draft: data.draft ?? false,
    slug: cleanSlug,
  };

  return {
    meta,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => Boolean(post && !post.meta.draft))
    .map((post) => post.meta)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
