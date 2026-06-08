import fs from "fs";
import matter from "gray-matter";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  updatedAt: string;
  slug: string;
  category: string;
  tags?: string[];
  author?: string;
  image?: string;
  draft?: boolean;
};

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { meta: { ...(data as Omit<PostMeta, "slug">), slug }, content };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug)!.meta)
    .filter((meta) => !meta.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
