# Portfolio | Senior Frontend Developer

A modern, visually stunning portfolio website built with Next.js and Three.js. Features an immersive 3D experience with developer-themed visuals.

![Portfolio Preview](./public/og-image.jpg)

## ✨ Features

- **Three.js 3D Scene** - Floating code particles, 3D terminal, and orbiting tech stack
- **Fully Configurable** - All personal data in a single `config/site.ts` file
- **Dark Mode** - Beautiful dark theme with gradient accents
- **Responsive** - Looks great on all devices
- **SEO Optimized** - Meta tags, Open Graph, and Twitter cards
- **Fast** - Built with Next.js 14 and Turbopack

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## ⚙️ Configuration

All your personal information is in **one file**: `config/site.ts`

### Update Your Info

```typescript
// config/site.ts

export const siteConfig = {
  // Your name and title
  name: "Your Name",
  title: "Senior Frontend Developer",
  tagline: "Your awesome tagline",
  email: "your@email.com",
  
  // Social Links - just update URLs
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    facebook: "https://facebook.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    // Leave empty to hide a social link
    instagram: "",
  },
  
  // Your skills (no percentage levels!)
  skills: {
    frontend: ["React", "Next.js", "TypeScript"],
    styling: ["CSS", "Tailwind"],
    tools: ["Git", "VS Code"],
    other: ["Node.js", "APIs"],
  },
  
  // Your projects
  projects: [
    {
      title: "Project Name",
      description: "What it does",
      tech: ["React", "TypeScript"],
      liveUrl: "https://...",
      githubUrl: "https://github.com/...",
      featured: true,
    },
  ],
  
  // Work experience
  experience: [
    {
      company: "Company Name",
      position: "Your Role",
      duration: "2021 - Present",
      description: "What you did",
      technologies: ["React", "TypeScript"],
    },
  ],
};
```

## 📁 Project Structure

```
portfolio/
├── config/
│   └── site.ts          # 🔧 All your personal data here
├── public/
│   └── fonts/           # Fonts for 3D text
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # Hero, About, Skills, etc.
│   │   ├── three/       # 3D components
│   │   └── ui/          # Buttons, Cards, etc.
│   └── ...
└── ...
```

## 🎨 Customization

### Colors

Update theme colors in `config/site.ts`:

```typescript
theme: {
  primaryColor: "#6366f1",  // Indigo
  accentColor: "#22d3ee",   // Cyan
  defaultMode: "dark",
}
```

Or modify CSS variables in `src/app/globals.css`.

### 3D Scene

The Three.js scene includes:
- **CodeParticles** - Floating code symbols
- **FloatingCode** - 3D terminal with syntax highlighting
- **TechOrbit** - Orbiting technology spheres

You can customize these in `src/components/three/`.

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import to Vercel
3. Deploy!

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

Made with ❤️ and lots of ☕
