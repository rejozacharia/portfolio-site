import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: string;
}

// Function to get metadata for all posts
function getAllPostsMetadata(): PostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName): PostMetadata | null => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const stats = readingTime(content);

        // Basic validation for frontmatter
        if (typeof data.title !== 'string' || typeof data.date !== 'string' || typeof data.description !== 'string') {
          console.warn(`Skipping post "${fileName}": Missing or invalid frontmatter.`);
          return null;
        }

        return {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
          readingTime: stats.text,
        };
      } catch (err) {
        console.error(`Error reading metadata for post ${slug}:`, err);
        return null;
      }
    });

  // Filter out null values (posts that failed validation or reading)
  const validPosts = allPostsData.filter((post): post is PostMetadata => post !== null);

  // Sort posts by date in descending order
  return validPosts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}


export const metadata = {
  title: 'Blog | My Portfolio',
  description: 'Read my latest thoughts and articles.',
};

export default function BlogIndexPage() {
  const posts = getAllPostsMetadata();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {new Date(post.date).toLocaleDateString()} | {post.readingTime}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {post.description}
            </p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Read more &rarr;
            </Link>
          </article>
        ))}
        {posts.length === 0 && (
          <p>No blog posts found.</p>
        )}
      </div>
    </div>
  );
}