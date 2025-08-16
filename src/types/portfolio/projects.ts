import { ProjectProps } from "./projectProps";

export const projects: ProjectProps[] = [
  {
    title: "E-Commerce Platform",
    description: "Piattaforma e-commerce completa con gestione inventario, pagamenti e dashboard admin.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "Web App",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "Dashboard completa per analisi dati con grafici interattivi e report automatici.",
    image: "/modern-analytics-dashboard.png",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    category: "Dashboard",
    featured: false,
  },
  {
    title: "Banking App Mobile",
    description: "Applicazione mobile per servizi bancari con sicurezza avanzata e UX intuitiva.",
    image: "/mobile-banking-app.png",
    technologies: ["React Native", "Firebase", "Biometrics"],
    category: "Mobile App",
    featured: false,
  },
  {
    title: "AI Content Generator",
    description: "Piattaforma AI per generazione automatica di contenuti con interfaccia moderna.",
    image: "/ai-content-generation-interface.png",
    technologies: ["Next.js", "OpenAI", "TailwindCSS"],
    category: "AI Platform",
    featured: false,
  },
  {
    title: "Real Estate Platform",
    description: "Piattaforma immobiliare con ricerca avanzata, tour virtuali e gestione proprietà.",
    image: "/real-estate-platform.png",
    technologies: ["React", "Node.js", "MongoDB", "Maps API"],
    category: "Web Platform",
    featured: false,
  },
  {
    title: "Learning Management System",
    description: "Sistema completo per e-learning con corsi interattivi e tracking progressi.",
    image: "/lms-interface.png",
    technologies: ["Next.js", "PostgreSQL", "Video Streaming"],
    category: "EdTech",
    featured: false,
  },
]