# Puzzle Ayat Tafsir Landing Page

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A modern, responsive landing page for **Puzzle Ayat Tafsir**, an interactive Islamic educational app designed to help children and families learn Al-Qur'an through engaging puzzle-based mechanics and simplified tafsir.

## 🌟 Key Features

- **Hero Section**: High-impact introduction with a clear Call to Action (CTA) and mobile app mockup.
- **Feature Highlights**: Showcases the core values: Puzzle Ayat, Interactive Tafsir, Kid-Friendly design, and Audio-focused learning (No Music).
- **Interactive "How It Works"**: A 3-step guide to the learning process within the app.
- **App Preview**: Realistic mobile mockups showcasing the app's clean and minimal UI.
- **Fully Responsive**: Optimized for all devices, from mobile phones to large desktops.
- **Islamic-Themed Design**: Uses a respectful and professional color palette (`#1B8A6B` Green, `#D4A843` Gold) and adheres to safe visual conventions (no faces/karakter animasi berlebihan).

## 🛠️ Tech Stack

- **Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/) (using the `@tailwindcss/vite` plugin)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) (Headless primitives)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Design Source**: [Figma](https://www.figma.com/design/lei1pIgw1Cm7kEYkZPNtYk/Mobile-Landing-Page-Design)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/puzzle-ayat-tafsir/puzzle-ayat-tafsir.github.io.git
   cd puzzle-ayat-tafsir.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Production Build

Create an optimized production build:
```bash
npm run build
```
The output will be in the `dist/` directory, ready to be hosted on GitHub Pages or any static hosting service.

## 📂 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── components/    # Reusable UI components & Radix primitives
│   │   ├── pages/         # Page components (Home, Privacy Policy)
│   │   └── routes.tsx     # Centralized routing configuration
│   ├── styles/            # Global CSS and Tailwind 4 theme config
│   ├── main.tsx           # Application entry point
│   └── assets/            # Static assets (images, fonts)
├── public/                # Public static files
└── vite.config.ts         # Vite configuration with custom plugins
```

## 📜 License

This project is part of the Puzzle Ayat Tafsir educational initiative. For more information on usage and contributions, please refer to the [ATTRIBUTIONS.md](ATTRIBUTIONS.md) file.
