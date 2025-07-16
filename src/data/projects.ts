// src/data/projects.ts

// Define the structure for project data
export interface ProjectData {
  id: string;
  slug?: string; // Optional slug for dedicated pages
  title: string;
  briefDescription: string;
  category: 'software' | 'hardware' | 'other'; // Example categories
  tags: string[];
  description: string; // Longer description for modal or page
  explanation?: string; // How it works (optional)
  features?: string[]; // Key features (optional)
  githubUrl?: string; // Link to GitHub repo (optional)
  liveUrl?: string; // Link to live demo (optional)
  cardImageUrl: string; // Image for the summary card
  imageUrls?: string[]; // Images for modal or detail page (optional)
  // Add any other fields you might need
  longWriteup?: string | React.ReactNode; // Field to hold extensive content for dedicated pages
}


export const projects: ProjectData[] = [
  {
    id: 'ebook-abridger',
    // slug: 'ebook-abridger', // Removed slug - this project will use the modal
    title: "Ebook Abridger",
    briefDescription: "GenAI-powered app to summarize EPUB ebooks.",
    category: 'software',
    tags: ['Python', 'GenAI', 'LangChain', 'CLI', 'GUI', 'EPUB'],
    description: "A Python application to generate abridged versions of EPUB ebooks using Large Language Models (LLMs). It preserves chapter structure, narrative flow, and key elements while reducing length based on user settings.",
    explanation: "The application reads an EPUB file, then uses AI (specifically, Large Language Models via LangChain) to summarize each chapter individually. It automatically detects if the book is fiction or non-fiction to adjust the summarization style. Short chapters can be skipped. Finally, it combines these summaries into a new, shorter EPUB file, preserving the original's metadata.",
    features: [
      "EPUB Input/Output (preserving metadata)",
      "AI-Powered Summarization (chapter-by-chapter + overall)",
      "Adjustable Summary Length",
      "Genre Auto-detection for better summaries",
      "Option to Skip Short Chapters",
      "Error Reporting for failed chapters",
      "Cost Estimation for API usage",
      "Command-Line Interface (CLI)",
      "Graphical User Interface (GUI)",
      "Supports multiple LLM providers (Gemini, Ollama, OpenRouter)",
    ],
    githubUrl: "https://github.com/rejozacharia/ebook-abridger",
    cardImageUrl: "/images/DIY/ebook-abridger/ebook-abridger-gui.png",
    imageUrls: [
      "/images/DIY/ebook-abridger/ebook-abridger-gui.png",
      "/images/DIY/ebook-abridger/ebook-abridger-complete.png",
    ],
  },
  {
    id: 'home-nas-server',
    slug: 'home-nas-server', // Slug for the dedicated page URL
    title: "Building a Home NAS Server",
    briefDescription: "Detailed guide on building a home NAS using Unraid, Docker, and VMs.",
    category: 'hardware',
    tags: ['NAS', 'Unraid', 'Docker', 'VM', 'Hardware', 'Networking', 'Self-Hosting'],
    description: "A comprehensive walkthrough of selecting hardware, configuring Unraid OS, setting up Docker containers (Plex, Nextcloud), managing VMs, and integrating home automation for a powerful home server.", // Slightly longer description for modal/preview if needed
    cardImageUrl: "/images/DIY/home-nas-server/unraid.png", // Placeholder - replace with actual image path
    imageUrls: [ // Placeholder images for modal/page gallery
        "/images/DIY/nas/nas-placeholder-1.png",
        "/images/DIY/nas/nas-placeholder-2.png",
        "/images/DIY/nas/nas-placeholder-3.png",
    ],
    // We will render the long write-up on the dedicated page component itself
    // Alternatively, you could store the Markdown/JSX content here:
    // longWriteup: `... markdown or JSX content ...`
  },
  // --- Add more project objects here ---
];

// Helper function to find a project by slug (optional but useful)
export const getProjectBySlug = (slug: string): ProjectData | undefined => {
    return projects.find(project => project.slug === slug);
}