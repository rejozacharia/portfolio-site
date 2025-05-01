import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

// Function to get all post slugs
function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

// Function to get post data by slug (removed async)
function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      frontmatter: data as { title: string; date: string; description: string },
      content,
      readingTime: stats.text,
    };
  } catch (err) {
    console.error(`Error reading post ${slug}:`, err);
    return null;
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
) {
  // await the dynamic API
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage(
  { params }: { params: { slug: string } }
) {
  // await the dynamic API
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-3xl">
       <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block">
        &larr; Back to Blog
      </Link>
      <article className="prose dark:prose-invert max-w-none">
        <h1>{post.frontmatter.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Published on {new Date(post.frontmatter.date).toLocaleDateString()} | {post.readingTime}
        </p>
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}