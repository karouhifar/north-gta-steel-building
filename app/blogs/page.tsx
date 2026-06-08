// app/blogs/page.tsx

import { getAllPosts } from "@/lib/mdx";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Steel Building Blog | North GTA Steel",
  description:
    "Helpful guides about steel buildings, pre-engineered metal buildings, commercial steel structures, and building costs in Ontario.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Steel Building Blog | North GTA Steel",
    description:
      "Steel building guides, pricing tips, and Ontario construction insights.",
    url: "https://www.northgtasteel.ca/blogs",
    siteName: "North GTA Steel",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600">
          North GTA Steel Blog
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Steel Building Resources for Ontario
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-gray-600">
          Learn about steel building costs, permits, timelines, design options,
          and pre-engineered building systems in Ontario.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <p className="mb-3 text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <h2 className="text-2xl font-semibold">
              <Link href={`/blogs/${post.slug}`} className="hover:text-red-600">
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 text-gray-600">{post.description}</p>

            <Link
              href={`/blogs/${post.slug}`}
              className="mt-5 inline-block font-semibold text-red-600"
            >
              Read article →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
