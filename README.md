# Portfolio Site

This is a personal portfolio website built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/). It showcases basic profile, projects, skills, experience, and interests. The repository is set up for my profile but it can be forked and edited by anyone for their own content.

## Features

*   **Homepage:** Introduces the site and provides navigation.
*   **About:** Contains information about skills, experience, education, and certifications.
*   **Portfolio:** Displays a collection of projects.
*   **Interests / DIY Projects:** Details personal interests and showcases related DIY projects (see details below).
*   **Blog:** Features articles written in MDX.
*   **Contact:** Provides ways to get in touch.
*   **Responsive Design:** Adapts to different screen sizes using Tailwind CSS.

## Project Structure

```
portfolio-site/
├── .github/
│   └── workflows/
│       └── docker-publish.yml  # GitHub Action for CI/CD (Docker image publishing)
├── public/                     # Static assets (images, icons)
├── src/
│   ├── app/                    # Next.js App Router pages (routing and UI)
│   │   ├── blog/               # Blog list and individual post pages
│   │   ├── interests/          # Interests page
│   │   ├── layout.tsx          # Main application layout
│   │   └── page.tsx            # Homepage
│   ├── components/             # Reusable React components (Header, Footer, Cards, Sections)
│   └── content/                # Content files (e.g., blog posts in MDX)
├── .gitignore                  # Specifies intentionally untracked files that Git should ignore
├── .prettierrc.json            # Configuration for Prettier code formatter
├── Dockerfile                  # Defines the Docker image build process
├── eslint.config.mjs           # Configuration for ESLint code linter
├── LICENSE                     # Project license information
├── next.config.ts              # Configuration for Next.js
├── package.json                # Project metadata and dependencies
├── postcss.config.mjs          # Configuration for PostCSS (used with Tailwind)
├── README.md                   # This file
├── tailwind.config.ts          # Configuration for Tailwind CSS
└── tsconfig.json               # Configuration for TypeScript compiler
```

*   **`src/app/`**: Contains the main application pages and routing logic using the Next.js App Router.
*   **`src/components/`**: Houses reusable UI components used across different pages.
*   **`src/content/`**: Stores content like blog posts, often in Markdown or MDX format.
*   **`public/`**: Holds static assets like images and fonts that are served directly.
*   **`Dockerfile`**: Instructions for building the production Docker image.
*   **`.github/workflows/`**: Contains GitHub Actions workflows for automation (e.g., CI/CD).
*   **Configuration Files**: (`next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, etc.) define settings for the framework, styling, and TypeScript.

### Interests / DIY Projects Feature Details (Adding for additional clarity on usage)

This feature allows showcasing personal interests and detailed DIY projects.

*   **Structure:**
   *   **Main Page (`src/app/interests/page.tsx`):** Displays a list of general interests and a grid of DIY project summary cards.
   *   **Project Data (`src/data/projects.ts`):** An array defining the metadata for each DIY project (title, description, tags, image URLs, optional `slug`). The `ProjectData` interface defines the structure.
   *   **Detailed Content (`src/content/interests/`):** For projects requiring long write-ups, corresponding `.mdx` files (e.g., `home-nas-server.mdx`) are stored here. The filename (without extension) must match the `slug` defined in `projects.ts`.
   *   **Dynamic Project Pages (`src/app/interests/[slug]/page.tsx`):** Automatically generates a page for each project that has a `slug` defined in `projects.ts`. It fetches and renders the content from the corresponding `.mdx` file in `src/content/interests/`.
   *   **UI Components (`src/components/`):**
       *   `InterestSummaryCard.tsx`: Displays the brief summary card on the main interests page. If the project has a `slug`, it links to the dynamic project page; otherwise, it triggers the modal.
       *   `InterestDetailModal.tsx`: A modal dialog used to display details for projects *without* a `slug`.
*   **Adding/Modifying Projects:**
   1.  **Edit Metadata:** Modify the `projects` array in `src/data/projects.ts`. Add or update project objects following the `ProjectData` interface.
   2.  **Add Images:** Place any associated images in the `public/images/` directory (or a subdirectory) and update the `cardImageUrl` and `imageUrls` in `projects.ts`.
   3.  **(Optional) Add Detailed Write-up:**
       *   If the project needs a detailed page, assign a unique `slug` property in its `projects.ts` entry.
       *   Create a corresponding `.mdx` file in `src/content/interests/` (e.g., `src/content/interests/your-slug.mdx`). Write the content using Markdown/MDX.
   4.  **(Optional) Use Modal:** If the project details are brief, simply omit the `slug` property in `projects.ts`. Clicking the summary card will then open the `InterestDetailModal` using the data provided in `projects.ts`.
*   **General Interests:** The list of general interests is hardcoded directly within `src/app/interests/page.tsx`. Edit the `ul` element in that file to update the list.

## Build Process (Docker)

The application is containerized using Docker. The `Dockerfile` defines a multi-stage build process:

1.  **Builder Stage:**
    *   Uses a `node:20-alpine` base image.
    *   Copies `package.json` and `package-lock.json`.
    *   Installs dependencies using `npm install --frozen-lockfile`.
    *   Copies the entire application source code.
    *   Builds the Next.js application using `npm run build` to create a standalone output (`.next/standalone`).
2.  **Runner Stage:**
    *   Uses a clean `node:20-alpine` base image for a smaller final image size.
    *   Copies only the necessary artifacts from the builder stage:
        *   `public` directory.
        *   Standalone server files (`.next/standalone`).
        *   Static assets (`.next/static`).
    *   Exposes port `3000`.
    *   Sets the `PORT` environment variable to `3000`.
    *   Specifies the command `node server.js` to start the application using the optimized Next.js server.

To build the image locally:
```bash
docker build -t portfolio-site .
```

To run the container locally:
```bash
docker run -p 3000:3000 portfolio-site
```

## CI/CD Flow (GitHub Actions)

A GitHub Actions workflow (`.github/workflows/docker-publish.yml`) automates the process of building and publishing the Docker image to Docker Hub:

1.  **Trigger:** The workflow runs automatically on every `push` to the `main` branch.
2.  **Checkout:** Checks out the repository code.
3.  **Setup Buildx:** Sets up Docker Buildx for advanced build capabilities.
4.  **Login:** Logs into Docker Hub using credentials stored as GitHub secrets (`DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`).
5.  **Build and Push:**
    *   Builds the Docker image using the `Dockerfile` in the repository root.
    *   Pushes the built image to Docker Hub.
    *   Tags the image with `latest` and the Git commit SHA for versioning (e.g., `yourdockerhubusername/portfolio-site:latest`, `yourdockerhubusername/portfolio-site:<commit_sha>`).
    *   Utilizes GitHub Actions cache (`type=gha`) to potentially speed up subsequent builds.

## Getting Started (Local Development)

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
# yarn dev
# or
# pnpm dev
# or
# bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.
