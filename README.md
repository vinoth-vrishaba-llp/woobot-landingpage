# 🚀 WooBot Landing Page - React + Vite

A modern, high-performance landing page for WooBot WooCommerce Store Manager, built with cutting-edge technologies and optimized for speed.

## ✨ Technology Stack

This application is built with:

### 🎯 Core Framework
- **⚡ Vite 6** - Next generation frontend tooling with lightning-fast HMR
- **⚛️ React 19** - The latest version of React with improved performance
- **📘 TypeScript 5** - Type-safe JavaScript for better developer experience
- **🎨 Tailwind CSS 4** - Utility-first CSS framework for rapid UI development

### 🧩 UI Components & Styling
- **🧩 shadcn/ui** - High-quality, accessible components built on Radix UI
- **🎯 Lucide React** - Beautiful & consistent icon library
- **🌈 Framer Motion** - Production-ready motion library for React
- **🎬 GSAP** - Professional-grade animation library with ScrollTrigger

### 📋 Forms & Validation
- **🎣 React Hook Form** - Performant forms with easy validation
- **✅ Zod** - TypeScript-first schema validation

### 🔄 State Management & Data Fetching
- **🐻 Zustand** - Simple, scalable state management
- **🔄 TanStack Query** - Powerful data synchronization for React
- **🔄 TanStack Table** - Headless UI for building tables and datagrids

### 🎨 Advanced UI Features
- **🖱️ DND Kit** - Modern drag and drop toolkit for React
- **📊 Recharts** - Redefined chart library built with React and D3
- **📅 Date-fns** - Modern JavaScript date utility library
- **🪝 ReactUse** - Collection of essential React hooks

## 🎯 Why This Stack?

- **⚡ Lightning Fast** - Vite provides instant server start and HMR
- **🎨 Beautiful UI** - Complete shadcn/ui component library with GSAP animations
- **🔒 Type Safety** - Full TypeScript configuration with Zod validation
- **📱 Responsive** - Mobile-first design with smooth scroll animations
- **🚀 Production Ready** - Optimized build with code splitting
- **🤖 AI-Friendly** - Structured codebase perfect for AI assistance

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── index.html           # HTML entry point
├── src/
│   ├── main.tsx        # Application entry point
│   ├── App.tsx         # Main app component
│   ├── index.css       # Global styles with Tailwind
│   ├── components/     # React components
│   │   ├── LandingPage.tsx  # Main landing page
│   │   └── ui/         # shadcn/ui components (50+ components)
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility functions and configurations
├── public/             # Static assets
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Features

### Landing Page Sections
- **Hero Section** - Eye-catching gradient background with animated CTA
- **Pain Points** - Highlighting WooCommerce management challenges
- **Solution** - Introducing WooBot as the answer
- **Features** - Showcasing key capabilities
- **Trust Indicators** - Why clients love WooBot
- **Benefits** - Real business results with statistics
- **Final CTA** - Conversion-optimized call-to-action

### Animations
- **GSAP ScrollTrigger** - Scroll-based animations for all sections
- **Parallax Effects** - Smooth background element movement
- **Fade-in Animations** - Elegant content reveals
- **Stagger Effects** - Sequential element animations

### UI Components (shadcn/ui)
This project includes 50+ pre-built components:
- **Layout**: Card, Separator, Aspect Ratio, Resizable Panels, Sidebar
- **Forms**: Input, Textarea, Select, Checkbox, Radio Group, Switch
- **Feedback**: Alert, Toast (Sonner), Progress, Skeleton
- **Navigation**: Breadcrumb, Menubar, Navigation Menu, Pagination
- **Overlay**: Dialog, Sheet, Popover, Tooltip, Hover Card, Drawer
- **Data Display**: Badge, Avatar, Calendar, Table, Tabs
- **Interactive**: Button, Toggle, Slider, Command, Collapsible

## 🚀 Deployment

This is a static SPA that can be deployed to any hosting platform:

### Recommended Platforms
- **Vercel** - Zero-config deployment
- **Netlify** - Continuous deployment from Git
- **Cloudflare Pages** - Global edge network
- **GitHub Pages** - Free static hosting
- **AWS S3 + CloudFront** - Scalable cloud hosting

### Build Output
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

## ⚡ Performance

- **Build Time**: ~3.5 seconds
- **Dev Server Startup**: ~285ms
- **Hot Module Replacement**: Instant
- **Bundle Size**: Optimized with code splitting

## 🎨 Customization

### Tailwind Configuration
Edit `tailwind.config.ts` to customize:
- Colors and themes
- Border radius
- Spacing
- Breakpoints

### GSAP Animations
Modify animations in `src/components/LandingPage.tsx`:
- ScrollTrigger settings
- Animation timings
- Easing functions
- Parallax effects

### Fonts
Google Fonts (Geist Sans & Geist Mono) are loaded via `index.html`. Update the font links to use different fonts.

## 🤝 Contributing

This project was migrated from Next.js to Vite for improved performance and developer experience. All UI, animations, and functionality have been preserved.

---

Built with ❤️ for WooCommerce store owners. Powered by React + Vite 🚀
