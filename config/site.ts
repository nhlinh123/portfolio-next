export const siteConfig = {
  // =============================================
  // 🧑‍💻 PERSONAL INFORMATION
  // =============================================
  name: "Hoang Linh",
  title: "Senior Frontend Developer",
  tagline: "Building digital experiences that matter",
  email: "nhlinh123@gmail.com",
  location: "HN, VN",

  // =============================================
  // 🔗 SOCIAL LINKS
  // Update these URLs to your own profiles
  // Set to empty string or remove to hide a link
  // =============================================
  socials: {
    github: "https://github.com/nhlinh123",
    linkedin: "",
    facebook: "https://facebook.com/Linhdeptraiqua",
    twitter: "",
    instagram: "",
    dribbble: "",
    youtube: "",
    medium: "",
  },

  // =============================================
  // 📝 ABOUT SECTION
  // =============================================
  about: {
    description: `I'm a passionate senior frontend developer with over 4 years of experience 
    crafting beautiful, performant, and accessible web applications. I specialize in Angular, React, 
    TypeScript, and modern web technologies. When I'm not coding, you can find me exploring 
    new tech, contributing to open source, or enjoying a good cup of coffee.`,

    resumeUrl: "https://www.upwork.com/freelancers/~0129c99e52c8cd8f4b", // Put your resume in public folder

    highlights: [
      { label: "Years Experience", value: "4+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Happy Clients", value: "10+" },
    ],
  },

  // =============================================
  // 🛠️ SKILLS
  // Group your skills by category
  // No levels - just what you know!
  // =============================================
  skills: {
    frontend: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Three.js",
      "Framer Motion",
    ],
    styling: [
      "Tailwind CSS",
      "Styled Components",
      "CSS Modules",
      "SASS/SCSS",
    ],
    tools: [
      "Git",
      "VS Code",
      "Figma",
      "Webpack",
      "Vite",
      "Docker",
      "Jetbrains",
    ],
    other: [
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Testing (Playwright, Cypress)",
      "CI/CD",
      "Agile/Scrum",
      "C#",
      "Java",
      "Docker",
    ],
  },

  // =============================================
  // 💼 PROJECTS
  // Showcase your best work
  // =============================================
  projects: [
    {
      title: "CRM",
      description: "A multi-tenant, multi-channel CRM system built with Angular, TypeScript, C#, and SQL.",
      image: "/projects/crm.jpg",
      tech: ["Angular", "TypeScript", "C#", "SQL"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Building Management System",
      description: "A building management system built with Angular, TypeScript, C#, Orchard Core and SQL.",
      image: "/projects/building-management-system.jpg",
      tech: ["Angular", "TypeScript", "C#", "SQL", "Orchard Core"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Banking  System",
      description: "A banking system built with Angular, TypeScript, Java Spring Boot, SQL Oracle.",
      image: "/projects/banking-system.jpg",
      tech: ["Angular", "TypeScript", "Java Spring Boot", "SQL Oracle"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Banking  System",
      description: "A banking system built with Angular, TypeScript, Java Spring Boot, SQL Oracle.",
      image: "/projects/banking-system.jpg",
      tech: ["Angular", "TypeScript", "Java Spring Boot", "SQL Oracle"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Health Care System",
      description: "A comprehensive health care system designed for patient, pharmacy, and administrative management.",
      image: "/projects/health-care-system.jpg",
      tech: ["Angular", "TypeScript", "C#", "Xamarin/MAUI", "SQL"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Job Boarding",
      description: "A job boarding website built with Angular, TypeScript, and Node.js.",
      image: "/projects/job-boarding.jpg",
      tech: ["Angular", "TypeScript", "Node.js", "MySQL"],
      liveUrl: "",
      githubUrl: "https://github.com/nhlinh123/job-boarding",
      featured: true,
    },
    {
      title: "Portfolio",
      description: "A portfolio website built with Angular, TypeScript, and Node.js.",
      image: "/projects/portfolio.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
      liveUrl: "",
      githubUrl: "https://github.com/nhlinh123/portfolio",
      featured: true,
    },

  ],

  // =============================================
  // 💼 EXPERIENCE
  // Your work history
  // =============================================
  experience: [
    {
      company: "FPT Software",
      position: "Senior Frontend Developer",
      duration: "2024 - Present",
      description: "Leading the frontend development of a comprehensive Health Care System using React, Next.js, and TypeScript. Responsible for architecting scalable UI components, implementing complex state management with GraphQL, and ensuring application performance and accessibility standards. Mentoring junior developers and conducting code reviews.",
      technologies: ["Angular", "TypeScript", "Xamarin/MAUI", "SQL", "REST APIs", "Agile/Scrum", "Git"],
    },
    {
      company: "TTC Solutions",
      position: "Frontend Developer",
      duration: "2022 - 2024",
      description: "Played a key role in developing a secure Banking System using Angular and TypeScript. Implemented responsive designs using SCSS and collaborated closely with backend teams to integrate REST APIs. Managed CI/CD pipelines with Jenkins and strictly adhered to Agile/Scrum methodologies for timely delivery.",
      technologies: ["Angular", "Jenkins", "SCSS", "REST APIs", "Agile/Scrum", "Git"],
    },
    {
      company: "MetechVN",
      position: "Web Developer",
      duration: "2021 - 2022",
      description: "Full-stack development for CRM and Building Management Systems using Angular, C#, and SQL. Designed and implemented database schemas, developed RESTful APIs, and created intuitive user interfaces. Utilized Docker for containerization and maintained code quality through rigorous testing.",
      technologies: ["JavaScript", "Angular", "TypeScript", "SCSS", "C#", "SQL", "Docker", "REST APIs"],
    },
  ],

  // =============================================
  // 🎨 THEME CONFIGURATION
  // =============================================
  theme: {
    primaryColor: "#6366f1",    // Indigo
    accentColor: "#22d3ee",     // Cyan  
    defaultMode: "dark" as const, // "dark" | "light"
  },

  // =============================================
  // 🔍 SEO & META
  // =============================================
  seo: {
    title: "Hoang Linh | Senior Frontend Developer",
    description: "Senior Frontend Developer specializing in Angular, TypeScript, and modern web technologies. Building beautiful, performant web experiences.",
    keywords: ["frontend developer", "angular developer", "typescript", "web developer", "portfolio"],
    ogImage: "/og-image.jpg",
    twitterHandle: "@nhlinh123",
  },
};

export type SiteConfig = typeof siteConfig;
