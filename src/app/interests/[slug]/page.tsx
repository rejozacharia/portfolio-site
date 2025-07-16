import React from 'react';
import { getProjectBySlug } from '@/data/projects';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

// Define category styles (can be shared or redefined)
const categoryStyles = {
  software: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Software' },
  hardware: { bg: 'bg-green-100', text: 'text-green-800', label: 'Hardware' },
  other: { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Project' },
};

// Helper function to get MDX content for a given slug
async function getProjectContent(slug: string) {
  const contentDir = path.join(process.cwd(), 'src', 'content', 'interests');
  const filePath = path.join(contentDir, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return fileContents;
  } catch (err) {
    console.error(`Error reading MDX file for slug \"${slug}\":`, err);
    return null;
  }
}

// This function tells Next.js which slugs are possible (remains the same)
export async function generateStaticParams() {
  const { projects } = await import('@/data/projects');
  return projects
    .filter(p => p.slug)
    .map(project => ({ slug: project.slug! }));
}

// Updated props type: params is now a Promise
interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Make the component async to fetch content and await params
const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const mdxContent = await getProjectContent(slug);

  if (!project || mdxContent === null) {
    notFound();
  }

  const styles = categoryStyles[project.category] || categoryStyles.other;

  return (
    <div className="container mx-auto px-4 py-12 bg-white min-h-screen">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 border-b pb-6 bg-gray-800 rounded-lg overflow-hidden p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            {project.title}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles.bg} ${styles.text}`}>
              {styles.label}
            </span>
          </div>

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium group"
            >
              View on GitHub
              <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          )}
        </header>

        <div className="prose prose-lg max-w-none mb-10">
          <MDXRemote source={mdxContent} />
        </div>
      </article>
    </div>
  );
};

export default ProjectPage;
