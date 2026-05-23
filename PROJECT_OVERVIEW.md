# Project Overview: Garvin Portfolio

## Purpose
This file summarizes the entire workspace and provides enough context for an AI to implement a complete new UI Next.js project based on the existing app.

---

## Project Type
- Primary app: `Next.js` app under `src/app`
- Secondary app: root Vite/React app files remain in the workspace
- The project uses Tailwind CSS v4 with class-based dark mode styling

## Tech Stack
- `React 19` / `Next.js` (app router)
- `TypeScript`
- `Tailwind CSS` v4
- `Vite` for the root development environment
- `lucide-react` for icons
- `@tailwindcss/postcss` for PostCSS plugin support

---

## Root Configuration
- `package.json`: scripts, dependencies, devDependencies
- `vite.config.ts`: Vite config with environment alias `@` mapping to the project root and Gemini API env define values
- `postcss.config.mjs`: Tailwind PostCSS plugin config
- `next.config.ts`: empty default Next config placeholder
- `tsconfig.json`: TypeScript config for both Vite and Next code
- `.env.local`: environment variables for `GEMINI_API_KEY`
- `README.md`: run instructions and AI Studio app reference

---

## Source Structure
- `src/app/layout.tsx`: root layout and metadata for the Next.js app
- `src/app/page.tsx`: main page component and app state for navigation and content rendering
- `src/app/globals.css`: Tailwind import, custom theme, animations, dark mode utilities
- `src/components/`: reusable UI parts used by the main page
- `src/lib/constants.tsx`: static site data and portfolio content
- `src/types/index.ts`: TypeScript models for projects, skills, experience, user profile, and views

---

## Key Views and UI Flow
The app implements a multi-view portfolio dashboard with these main states:
- `home`: feed with stories, filter tabs, project cards, and a right summary panel
- `projects`: grid gallery showing all projects and clickable project cards
- `experience`: career timeline / experience list
- `about`: profile view with user bio, skills, project highlights, and achievements
- `contact`: contact form and message interface simulation
- `resume`: badge view with LinkedIn-style summary

Navigation is handled through:
- `Sidebar` component for desktop navigation and theme toggle
- `TopBar` component for page switching
- `MobileNav` component for mobile bottom navigation

A modal is used for project detail presentation:
- `ProjectDetailModal` opens when a project card is clicked
- it supports next/previous navigation and project metadata

---

## Component List
- `Sidebar.tsx`
- `TopBar.tsx`
- `MobileNav.tsx`
- `RightPanel.tsx`
- `PostCard.tsx`
- `Stories.tsx`
- `ProfileView.tsx`
- `ExperienceView.tsx`
- `FilterTabs.tsx`
- `ProjectDetailModal.tsx`
- `Icons.tsx`
- `LinkedInBadge.tsx`

These components are assembled inside `src/app/page.tsx`.

---

## Data Model Overview
### `src/types/index.ts`
- `ProjectCategory`
- `Project`
- `Experience`
- `Skill`
- `ViewType`
- `UserStats`
- `Achievement`
- `UserProfile`
- `Testimonial`

### `src/lib/constants.tsx`
Contains:
- `CURRENT_USER`: main profile and status
- `TESTIMONIALS`
- `CURRENT_STATUS`
- `SKILLS`
- `EXPERIENCE`
- `PROJECTS`
- `ACHIEVEMENTS`

This file is the single source of truth for displayed portfolio content.

---

## Global Styling and Behavior
- `src/app/globals.css` imports Tailwind and defines:
  - custom animation variables
  - keyframes for `fadeIn`, `fadeInUp`, `scaleIn`, `slideIn`
  - color variables for light/dark mode
  - scrollbar hiding utility
- Dark mode is toggled by applying the `dark` class to `document.documentElement`

---

## Important Logic in `src/app/page.tsx`
- `activeView` state controls which main screen is rendered
- `isDarkMode` toggles the `dark` CSS class
- `activeCategory` filters project cards in the home feed
- `selectedProject` controls the detail modal
- `filteredProjects` computed list is used for both feed and modal navigation
- `renderContent()` returns the content block for each screen
- `handleProjectClick`, `handleNextProject`, and `handlePrevProject` power the modal navigation
- `useEffect` updates document title based on `activeView`

---

## Existing UI Patterns
- Responsive layout with desktop sidebar and mobile bottom nav
- Cards and grid systems using Tailwind utility classes
- Animated entrance effects using CSS variables and keyframes
- Contact form with async submission to a webhook endpoint
- Project detail modal with image slider and navigation
- Theme toggle controlling dark mode classes

---

## Notes for Building a New Next.js UI
Use the existing project as a blueprint for:
- page structure and navigation states (`home`, `projects`, `about`, `experience`, `contact`, `resume`)
- data-driven content from `src/lib/constants.tsx`
- component reusability and layout patterns
- dark mode and responsive behavior
- project filtering logic and modal detail flow
- contact form fields and submission flow

If building a fresh Next.js UI, preserve the site’s portfolio/content intent and reimplement the same high-level user journeys with modern Next.js conventions.

---

## Optional Workspace Note
There is also a `my-next-portfolio/` directory in the workspace that appears to be another portfolio project. This summary focuses on the active `src/app` Next.js implementation and the root workspace files.
