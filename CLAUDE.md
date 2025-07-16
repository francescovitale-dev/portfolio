# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint for code quality checks

### Utility Scripts
- `pnpm generate-icons` - Generate icons using scripts/generate-icons.js
- `pnpm update-sitemap` - Update sitemap.xml using scripts/update-sitemap.js
- `pnpm optimize-images` - Optimize images using scripts/optimize-images.js

## Architecture Overview

This is a React 18 portfolio website built with Vite, using modern web technologies and best practices.

### Tech Stack
- **Frontend**: React 18 with Vite for fast development and building
- **Styling**: TailwindCSS with shadcn/ui components and CSS variables for theming
- **Animations**: Framer Motion for smooth page transitions and animations
- **Icons**: Lucide React and Radix UI icons
- **Email**: EmailJS for contact form functionality
- **Notifications**: React Hot Toast and SweetAlert2 for user feedback
- **SEO**: React Helmet Async for meta tag management
- **PWA**: Service worker registered for offline capabilities

### Project Structure
- **src/components/**: Main page components (Home, Projects, About, Contact, etc.)
- **src/components/ui/**: Reusable UI components from shadcn/ui
- **src/layouts/**: Layout components including main Layout wrapper
- **src/lib/**: Utility functions (mainly Tailwind class merging)
- **src/assets/**: Static assets including images and PDF
- **scripts/**: Build and optimization scripts for icons, images, and sitemap
- **public/**: Static files including PWA manifests and service worker

### Key Configuration
- **Vite**: Uses `@` alias pointing to `./src` directory
- **Tailwind**: Configured with shadcn/ui theme system using CSS variables
- **ESLint**: Modern flat config with React, React Hooks, and React Refresh plugins
- **shadcn/ui**: Configured for new-york style, no RSC, JSX (not TSX)

### Component Architecture
The app uses a single-page structure with all main sections (Home, Projects, About, Contact) rendered in App.jsx. The Layout component provides the overall structure including Navbar and Footer. Components use Framer Motion for animations and follow React best practices with functional components and hooks.

### Styling Approach
Uses TailwindCSS with shadcn/ui components for consistent design. The theme system is built on CSS variables defined in index.css, supporting both light and dark modes through the 'class' strategy. Custom animations and keyframes are defined in the Tailwind config.

### Development Notes
- Package manager is pnpm (configured in packageManager field)
- Uses modern ESLint flat config format
- All components are functional components with hooks
- Email functionality is handled client-side with EmailJS
- Service worker is registered for PWA capabilities