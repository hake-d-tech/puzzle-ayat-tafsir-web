# Puzzle Ayat Tafsir Landing Page

A React-based landing page for **Puzzle Ayat Tafsir**, an interactive Islamic educational app designed for children and families. The project focuses on a clean, modern, and kid-friendly aesthetic with a strong emphasis on responsive design and Islamic-themed visuals.

## Project Overview

- **Purpose**: Landing page to showcase the features and benefits of the Puzzle Ayat Tafsir mobile app.
- **Main Technologies**:
  - **Frontend**: React 18, Vite 6, TypeScript.
  - **Styling**: TailwindCSS 4, Radix UI (Headless UI components).
  - **Routing**: React Router 7.
  - **Icons**: Lucide React.
  - **Animations**: `motion` (Framer Motion).
  - **Other**: Recharts (charts), Embla Carousel.
- **Architecture**:
  - `src/main.tsx`: Entry point.
  - `src/app/routes.tsx`: Centralized routing configuration.
  - `src/app/components/`: Reusable UI components (including a `ui/` directory for Radix-based primitives).
  - `src/app/pages/`: Page-level components (e.g., `Home.tsx`, `PrivacyPolicy.tsx`).
  - `src/styles/`: Global CSS and theme configuration using TailwindCSS 4 and CSS variables.

## Building and Running

- **Development Server**:
  ```bash
  npm run dev
  ```
- **Production Build**:
  ```bash
  npm run build
  ```
- **Dependencies Installation**:
  ```bash
  npm install
  ```

## Development Conventions

- **Component Patterns**:
  - Use Functional Components with TypeScript.
  - Prefer small, focused components in `src/app/components`.
  - UI primitives are located in `src/app/components/ui` (Shadcn-like structure).
- **Styling**:
  - **TailwindCSS 4**: Strictly use Tailwind utility classes for layout and styling.
  - **Theme**: Base theme variables are defined in `src/styles/theme.css`.
  - **Responsive**: Prioritize mobile-friendly layouts (the project is a landing page for a mobile app).
- **Assets**:
  - The project uses a custom `figmaAssetResolver` Vite plugin.
  - Assets can be referenced using the `figma:asset/` prefix (resolved to `src/assets`).
- **Imports**:
  - Use the `@/` alias for absolute imports from the `src` directory (configured in `vite.config.ts`).
- **Icons**:
  - Use `lucide-react` for consistent iconography.
- **Testing**:
  - Currently, there are no automated tests in the project. (TODO: Add Vitest or Playwright for critical path testing).

## Key Components

- `PhoneMockup`: A specialized component for displaying app screenshots within a mobile frame.
- `MockupScreens`: Contains the simulated screens of the mobile app for visual demonstration.
- `Layout`: Wrapper component for consistent header/footer across pages.

## Design Philosophy

- **Islamic-Themed**: Clean, minimal, and respectful design.
- **Kid-Friendly**: Bright yet professional colors (`#1B8A6B` Green, `#D4A843` Gold), flat design, and safe imagery (no faces/characters as per Islamic art conventions).
- **Interactive**: subtle animations and hover effects to engage users.
