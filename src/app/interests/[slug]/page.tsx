// src/app/interests/[slug]/page.tsx
import React from 'react';
import { getProjectBySlug } from '@/data/projects';
import { notFound } from 'next/navigation';
// import Image from 'next/image'; // Removed unused import
import fs from 'fs'; // To read files
import path from 'path'; // To handle file paths
// import matter from 'gray-matter'; // Removed unused import
import { MDXRemote } from 'next-mdx-remote/rsc'; // Import the RSC version

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
    // Use gray-matter to parse the post metadata section (optional)
    // const { data, content } = matter(fileContents);
    // For now, just return the raw content as we don't have front matter yet
    return fileContents;
  } catch (err) {
    console.error(`Error reading MDX file for slug "${slug}":`, err);
    return null; // Return null if file doesn't exist or error occurs
  }
}


// This function tells Next.js which slugs are possible (remains the same)
export async function generateStaticParams() {
  const { projects } = await import('@/data/projects');
  return projects
    .filter(p => p.slug) // Only generate pages for projects with slugs
    .map((project) => ({
      slug: project.slug!,
    }));
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Make the component async to fetch content
const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const { slug } = params;
  const project = getProjectBySlug(slug); // Get metadata (title, tags etc.)
  const mdxContent = await getProjectContent(slug); // Get MDX content string

  // If project metadata or MDX content not found, show 404
  if (!project || mdxContent === null) {
    notFound();
  }

  const styles = categoryStyles[project.category] || categoryStyles.other;

  // Define components to allow in MDX (e.g., custom Image component)
  // const components = {
  //   img: (props: any) => (
  //     <div className="relative aspect-video my-4">
  //       <Image {...props} layout="fill" objectFit="contain" alt={props.alt || ''} />
  //     </div>
  //   ),
  //   // Add other custom components here if needed
  // };

  return (
    <div className="container mx-auto px-4 py-12 bg-white min-h-screen">
      <article className="max-w-4xl mx-auto">
        {/* Header Section - Check styling here */}
        <header className="mb-8 border-b pb-6">
           {/* Heading with potentially problematic styling? */}
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{project.title}</h1>
           <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
             <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles.bg} ${styles.text}`}>
               {styles.label}
             </span>
             {/* Add date published or last updated if available */}
           </div>
           {project.tags && project.tags.length > 0 && (
             <div className="flex flex-wrap gap-2">
               {project.tags.map((tag) => (
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
                <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>
            )}
        </header>

        {/* Main Content Area - Render MDX */}
        <div className="prose prose-lg max-w-none mb-10">
            {/* Render the MDX content using MDXRemote */}
            {/* Pass allowed components if defined: components={components} */}
            <MDXRemote source={mdxContent} />
        </div>

      </article>
    </div>
  );
};

export default ProjectPage;