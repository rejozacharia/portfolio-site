# Portfolio Site Tactical Improvement Plan (Page/Component-Based)

This plan outlines the specific steps to implement the requested improvements, organized by the page or component they affect.

## Global / Site-Wide / Configuration

- **Typography & Base Styles (`globals.css`, `layout.tsx`):**
  - [ ] Ensure consistent text color (charcoal/gray-800) is used universally for body text.
  - [ ] Set consistent heading sizes (e.g., text-5xl H1, text-3xl H2) and spacing.
  - [ ] Apply smooth transitions to link hovers/focus states.
  - [ ] Use fluid text sizing.
  - [ ] Ensure readable line lengths (`max-w-prose`) where applicable.
- **Layout & Structure (`globals.css`, Component Styles):**
  - [ ] Add subtle background shapes/gradients at section dividers.
  - [ ] Increase whitespace around key sections.
  - [ ] Use Tailwind `container` and grid utilities consistently for alignment.
- **Responsiveness (`globals.css`, All Components):**
  - [ ] Test and adjust layout at mobile, tablet, desktop breakpoints.
  - [ ] Use responsive utilities (`md:`, `sm:`) for stacking/sizing.
  - [ ] Increase mobile tap targets.
  - [ ] Verify color contrast ratios.
- **Animations (Setup):**
  - [ ] Integrate Framer Motion (`package.json`, potentially `layout.tsx`).
- **Code Quality & Consistency:**
  - [ ] Refactor repeated Tailwind classes (@apply or components - e.g., `.card-common`).
  - [ ] Remove any remaining dead code/comments.
  - [ ] Ensure consistent class ordering (use prettier plugin - setup).
  - [ ] Ensure consistent padding/margin patterns.
  - [ ] Optimize images with `next/image` where needed.
- **Tailwind Config (`tailwind.config.ts`):**
  - [ ] Unify design tokens (spacing scale).
  - [ ] Clean up Tailwind config (ensure JIT mode is implicitly active or explicitly configured if needed).

## `src/app/page.tsx` (Main Page Structure)

- [ ] Ensure sections are logically ordered (Hero → About → Expertise → Experience → Portfolio → Education → Certifications → Contact).
- [ ] Verify alternating section backgrounds.
- [ ] Wrap sections in `<motion.div>` for scroll/load animations (fade/slide in). (Applies to sections rendered here)

## `src/components/Header.tsx`

- [ ] Animate header (slide-down, opacity change on scroll).
- [ ] Make header sticky with scrollspy.
- [ ] Add "active" state to nav links.
- [ ] Implement responsive hamburger menu for small screens (using Tailwind UI/Headless UI).
- [ ] Ensure nav collapses correctly on mobile.
- [ ] Add link for new "DIY / Interests" page/section (when created).
- [ ] Add link for new "Blog" page (when created).

## `src/components/Hero.tsx`

- [ ] Enhance images: Replace placeholder photo.
- [ ] Wrap section in `<motion.div>` for scroll/load animations.
- _Optional: Modify for Video Intro Section (see New Sections)_

## `src/components/About.tsx`

- [ ] Add staggered fade animation for list items.
- [ ] Wrap section in `<motion.div>` for scroll/load animations.
- [ ] Add clear CTA to next section (e.g., "See My Expertise").

## `src/components/Expertise.tsx`

- [ ] Implement scroll-triggered animations for numbers.
- [ ] Wrap section in `<motion.div>` for scroll/load animations.
- [ ] Add clear CTA to next section (e.g., "View My Experience").

## `src/components/Experience.tsx`

- [ ] Wrap section in `<motion.div>` for scroll/load animations.
- [ ] Add clear CTA to next section (e.g., "See My Portfolio").

## `src/components/Portfolio.tsx`

- [ ] Enhance images: Ensure project images fill cards (`object-cover`), add hover effects.
- [ ] Add staggered fade animation for project cards.
- [ ] Add `whileHover={{ scale: 1.02 }}` to project cards.
- [ ] Wrap section in `<motion.div>` for scroll/load animations.
- [ ] Add clear CTA to next section (e.g., "See My Education").

## `src/components/Education.tsx`

- [ ] Add `whileHover={{ scale: 1.02 }}` to education cards.
- [ ] Wrap section in `<motion.div>` for scroll/load animations.
- [ ] Add clear CTA to next section (e.g., "View My Certifications").

## `src/components/Certifications.tsx`

- [ ] Add `whileHover={{ scale: 1.02 }}` to certification cards.
- [ ] Wrap section in `<motion.div>` for scroll/load animations.
- [ ] Add clear CTA to next section (e.g., "Get In Touch").

## `src/components/Contact.tsx`

- [ ] Apply unified H2 style (bottom border with primary color).
- [ ] Wrap section in `<motion.div>` for scroll/load animations.
- [ ] Add `whileHover={{ scale: 1.02 }}` to submit button.

## `src/components/Footer.tsx`

- _(No specific pending actions identified, but review for consistency)_

## New Section: Personal Blog

- [ ] Create `/src/content/blog/` directory.
- [ ] Create example `.mdx` blog posts.
- [ ] Create dynamic route `app/blog/[slug]/page.tsx`.
- [ ] Implement `generateStaticParams` and MDX rendering in `page.tsx`.
- [ ] Create a blog listing page/component (e.g., `app/blog/page.tsx` or integrated into main page).
- [ ] Style blog list/cards.
- [ ] Add link to navigation (`Header.tsx`).

## New Section: Video Intro

- [ ] Decide location (new section or modify Hero).
- [ ] Create component/add structure.
- [ ] Embed video using `<video>` or player component.
- [ ] Style the section.

## New Section/Page: DIY / Interests

- [ ] Decide location (new section on main page or separate page `app/interests/page.tsx`).
- [ ] Create component/page structure.
- [ ] Add grid layout for hobbies/projects.
- [ ] Style the section/page.
- [ ] Add link to navigation (`Header.tsx`).
