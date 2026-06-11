import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { compileMDX } from "next-mdx-remote/rsc";
import BackButton from "@/components/ui/back-button";
import Image from "next/image";
import remarkGfm from "remark-gfm";

const siteUrl = "https://www.northgtasteel.ca";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | North GTA Steel",
    };
  }

  const url = `${siteUrl}/blogs/${post.meta.slug}`;

  return {
    title: `${post.meta.title} | North GTA Steel`,
    description: post.meta.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url,
      siteName: "North GTA Steel",
      type: "article",
      publishedTime: post.meta.date,
      modifiedTime: post.meta.updatedAt || post.meta.date,
      images: [
        {
          url: `${siteUrl}${post.meta.image}`,
          width: 1200,
          height: 630,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
      images: [`${siteUrl}${post.meta.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: true,
      mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [] },
    },
  });

  const articleUrl = `${siteUrl}/blogs/${post.meta.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    image: `${siteUrl}${post.meta.image}`,
    datePublished: post.meta.date,
    dateModified: post.meta.updatedAt || post.meta.date,
    author: {
      "@type": "Organization",
      name: "North GTA Steel",
    },
    publisher: {
      "@type": "Organization",
      name: "North GTA Steel",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {/* Sticky on mobile, fixed to the left gutter on desktop */}
      <div
        className="mx-auto max-w-3xl px-6 pt-6 
      lg:sticky lg:inset-x-auto lg:left-50 lg:top-50 lg:mx-0 lg:px-0 lg:pt-0"
      >
        <BackButton />
      </div>

      <article className="mx-auto max-w-3xl px-6 pb-20 pt-2 lg:pt-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-steel-red">
          {post.meta.category}
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {post.meta.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {post.meta.description}
        </p>

        <time
          dateTime={post.meta.date}
          className="mt-5 block text-sm text-muted-foreground"
        >
          Published on{" "}
          {new Date(post.meta.date).toLocaleDateString("en-CA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <Image
          src={post.meta.image as string}
          alt={post.meta.title}
          width={0}
          height={0}
          className="h-auto w-full rounded-3xl"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />

        <div className="prose prose-lg prose-zinc mt-12 max-w-none dark:prose-invert">
          {content}
        </div>
      </article>
    </main>
  );
}
