# Portfolio Site

This is a personal portfolio website built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/). It showcases projects, skills, experience, and interests.

## Features

*   **Homepage:** Introduces the site and provides navigation.
*   **About:** Contains information about skills, experience, education, and certifications.
*   **Portfolio:** Displays a collection of projects.
*   **Interests:** Details personal interests and related projects/activities.
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
