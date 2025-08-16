// types/services.ts
import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react";
import { ServicesProps } from "./servicesProps";

export const services: ServicesProps[] = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Applicazioni web complete con tecnologie moderne",
    featured: true,
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfacce intuitive e accattivanti",
    featured: false,
    technologies: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "App native e cross-platform",
    featured: false,
    technologies: ["React Native", "Flutter", "Expo"],
  },
  {
    icon: Globe,
    title: "Web Solutions",
    description: "Siti professionali ottimizzati",
    featured: false,
    technologies: ["WordPress", "Headless CMS", "SEO"],
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Architetture scalabili e robuste",
    featured: false,
    technologies: ["Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Ottimizzazioni avanzate",
    featured: false,
    technologies: ["Lighthouse", "Web Vitals", "CDN"],
  },
];
