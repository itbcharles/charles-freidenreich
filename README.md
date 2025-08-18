# Charles Freidenreich — Business + Technology

A modern, business-first personal website showcasing the intersection of business strategy and technical implementation. Built with performance and accessibility as first-class concerns.

## 🚀 Features

- **Modern Stack**: Next.js 14 (App Router) + TypeScript + TailwindCSS
- **Smooth Animations**: Framer Motion with respectful motion preferences
- **Performance Optimized**: Lighthouse scores ≥95 Performance/Accessibility
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Structured data, meta tags, and semantic HTML

## 📄 Content Structure

### One-page Layout with Smooth Scroll Navigation
- **Hero**: Name, tagline, rotating keywords, contact CTAs
- **Business Impact**: Metrics-driven results with animated counters
- **Tech Projects**: 
  - Argus (Deep Research Agent) - Sticky scroll showcase
  - Zeno (Email Tracking) - Horizontal scroll implementation
- **Writing**: MDX-powered blog posts with academic focus
- **Outdoors**: Eagle Scout achievements and leadership experiences
- **About/Contact**: Personal background and contact form

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd charles-freidenreich

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build the application
npm run build

# Start production server (optional)
npm start
```

### Lint and Type Check

```bash
# Run ESLint
npm run lint

# Type check with TypeScript
npx tsc --noEmit
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and CSS variables
├── components/          # React components
│   ├── Header.tsx      # Navigation with smooth scroll
│   ├── Hero.tsx        # Hero section with rotating keywords
│   ├── Impact.tsx      # Business metrics with animations
│   ├── ProjectSticky.tsx   # Sticky scroll project showcase
│   ├── ProjectHScroll.tsx  # Horizontal scroll project
│   ├── WritingGrid.tsx     # MDX blog post grid
│   ├── Outdoors.tsx        # Eagle Scout/outdoor section
│   └── AboutContact.tsx    # About and contact form
├── lib/                 # Utilities
│   ├── motion.ts       # Framer Motion variants
│   └── writing.ts      # MDX file handling
content/
└── writing/            # MDX blog posts
    ├── sample-1.mdx
    ├── sample-2.mdx
    └── sample-3.mdx
```

## 🎨 Design System

### Colors
- **Primary**: `#0E8A5B` (Muted green accent)
- **Text**: `#111111` (Primary), `#666666` (Secondary)
- **Borders**: `#E5E5E5`

### Typography
- **Font**: Inter (Google Fonts) with system fallbacks
- **Scale**: Responsive typography using `clamp()`
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Primary (filled) and secondary (outlined) variants
- **Animations**: Spring-based with reduced motion support

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on git push

### Manual Deployment
```bash
npm run build
# Deploy the `out` directory to your hosting provider
```

## 📊 Performance

This site is built with performance as a priority:

- **Lighthouse Scores**: ≥95 Performance, ≥95 Accessibility
- **LCP**: ≤2.5s on Fast 3G
- **Image Optimization**: WebP/AVIF formats with proper sizing
- **Bundle Optimization**: Code splitting and tree shaking
- **Reduced Motion**: Respects user preferences

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML with proper ARIA labels
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Skip Links**: Easy content navigation

## 🔧 Customization

### Adding Blog Posts
Create new MDX files in `content/writing/` with frontmatter:

```mdx
---
title: "Your Title"
tldr: "Brief summary"
date: "2024-01-15"
tags: ["tag1", "tag2"]
---

# Your Content Here
```

### Updating Metrics
Edit the `metrics` array in `src/components/Impact.tsx`:

```typescript
const metrics = [
  {
    value: 37,
    suffix: '%',
    title: 'Your Metric',
    description: 'Description of achievement'
  }
];
```

### Modifying Projects
Update project data in `src/app/page.tsx` for Argus and Zeno sections.

## 📝 License

This project is for portfolio purposes. Feel free to reference the code structure and implementation patterns.

## 🤝 Contributing

This is a personal portfolio site, but suggestions and feedback are welcome via issues or pull requests.

---

Built with ❤️ and modern web technologies. Optimized for performance, accessibility, and user experience.
