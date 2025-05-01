# Portfolio Site Tactical Improvement Plan

This plan outlines the specific steps to implement the requested improvements to the portfolio site.

## 1. Color Palette & Typography

- **Status:** Partially Complete
- **Completed:**
  - [x] Added new primary color (`#1F4E79`) to `tailwind.config.ts`.
  - [x] Updated `globals.css`: removed old accent variable, added smooth scroll, added base line-height.
  - [x] Replaced Geist font with Inter font in `src/app/layout.tsx`.
  - [x] Replaced old blue/amber colors with `primary` or neutral colors in Header, Portfolio, Hero, Footer, Expertise, Experience, Education, Contact, and Certifications components.
  - [x] Removed unused `Image` import from Hero.
  - [x] Removed unused `idx` variable from Expertise.
- **To Do (Requires Code Mode):**
  - [ ] Ensure consistent text color (charcoal/gray-800) is used universally for body text.
  - [ ] Set consistent heading sizes (e.g., text-5xl H1, text-3xl H2) and spacing.

## 2. Layout & Visual Hierarchy

- **Status:** Partially Complete
- **Completed:**
  - [x] Updated About section list to be a 2-column grid on medium+ screens.
  - [x] Standardized card styles (bg-white, rounded-lg, shadow-md, p-6, hover:shadow-lg) across Portfolio, Education, and Certifications.
  - [x] Applied unified H2 style (bottom border with primary color) to About, Expertise, Experience, Portfolio, Education, and Certifications sections.
- **To Do (Requires Code Mode):**
  - [ ] Apply unified H2 style to Contact section.
  - [ ] Add subtle background shapes/gradients at section dividers.
  - [ ] Increase whitespace around key sections.
  - [ ] Use Tailwind `container` and grid utilities consistently for alignment.
  - [ ] Enhance images: Replace placeholder photo, ensure project images fill cards (`object-cover`), add hover effects.

## 3. Animations & Transitions

- **Status:** Pending
- **To Do (Requires Code Mode):**
  - [ ] Integrate Framer Motion.
  - [ ] Wrap sections in `<motion.div>` for scroll/load animations (fade/slide in).
  - [ ] Add staggered fade for lists (About bullets, project cards).
  - [ ] Add `whileHover={{ scale: 1.02 }}` to cards/buttons.
  - [ ] Apply smooth transitions to link hovers/focus states.
  - [ ] Implement scroll-triggered animations (e.g., Expertise numbers).
  - [ ] Animate header (slide-down, opacity change on scroll).

## 4. Section Flow & Navigation

- **Status:** Pending
- **To Do (Requires Code Mode):**
  - [ ] Make header sticky with scrollspy.
  - [ ] Add "active" state to nav links.
  - [ ] Implement responsive hamburger menu for small screens (using Tailwind UI/Headless UI).
  - [ ] Ensure sections are logically ordered (Hero → About → Expertise → Experience → Portfolio → Education → Certifications → Contact).
  - [ ] Ensure alternating section backgrounds (already seems present).
  - [ ] Add clear CTAs between sections (e.g., "View Experience" button).

## 5. New Content Sections

- **Status:** Pending
- **To Do (Requires Code Mode):**
  - **Personal Blog:**
    - [ ] Create `/src/content/blog/` directory.
    - [ ] Create example `.mdx` blog posts.
    - [ ] Create dynamic route `app/blog/[slug]/page.tsx`.
    - [ ] Implement `generateStaticParams` and MDX rendering.
    - [ ] Style blog list/cards.
  - **Video Intro Section:**
    - [ ] Add a new section or modify Hero.
    - [ ] Embed video using `<video>` or player.
  - **DIY / Interests Page/Section:**
    - [ ] Create new page or section.
    - [ ] Add grid layout for hobbies/projects.
    - [ ] Link in navigation.

## 6. Responsiveness & Readability

- **Status:** Pending
- **To Do (Requires Code Mode):**
  - [ ] Test and adjust layout at mobile, tablet, desktop breakpoints.
  - [ ] Use responsive utilities (`md:`, `sm:`) for stacking/sizing.
  - [ ] Increase mobile tap targets.
  - [ ] Use fluid text sizing.
  - [ ] Ensure readable line lengths (`max-w-prose`).
  - [ ] Verify color contrast ratios.
  - [ ] Optimize images with `next/image`.
  - [ ] Ensure nav collapses correctly.

## 7. Code Refinement & Consistency

- **Status:** Pending
- **To Do (Requires Code Mode):**
  - [ ] Refactor repeated Tailwind classes (@apply or components - e.g., `.card-common`).
  - [ ] Remove any remaining dead code/comments.
  - [ ] Ensure consistent class ordering (use prettier plugin).
  - [ ] Ensure consistent padding/margin patterns.
  - [ ] Unify design tokens (spacing scale).
  - [ ] Clean up Tailwind config (ensure JIT mode).
