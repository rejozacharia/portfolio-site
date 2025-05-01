import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import Link from 'next/link';
import type { Metadata } from 'next';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

// Read all .mdx filenames and strip the extension
function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''));
}

// Read and parse a single MDX file by slug
function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      frontmatter: data as {
        title: string;
        date: string;
        description: string;
      },
      content,
      readingTime: stats.text,
    };
  } catch (err) {
    console.error(`Error reading post ${slug}:`, err);
    return null;
  }
}

// Tell Next.js which slugs to generate at build time
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Build page metadata (head tags) dynamically per slug
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: '',
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

// The main page component for /blog/[slug]
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-3xl">
      <Link
        href="/blog"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block"
      >
        &larr; Back to Blog
      </Link>

      <article className="prose dark:prose-invert max-w-none">
        <h1>{post.frontmatter.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Published on{' '}
          {new Date(post.frontmatter.date).toLocaleDateString()} |{' '}
          {post.readingTime}
        </p>
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
