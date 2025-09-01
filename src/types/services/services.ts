// types/services.ts
import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react";
import { ServicesProps } from "./servicesProps";

export const services: ServicesProps[] = [
  {
    icon: Code,
    title: "Sito vetrina/portfolio",
    description: "Sviluppo di un sito statico per mostrare al mondo te o la tua azienda",
    featured: true,
    technologies: ["Next.js", "TypeScript", "WordPress"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Progettazione di Interfacce intuitive, accattivanti e professionali",
    featured: false,
    technologies: ["Figma"],
  },
  {
    icon: Smartphone,
    title: "Sviluppo SaaS",
    description: "Servizio ad hoc per aiutare i processi produttivi tuoi o della tua azienda",
    featured: false,
    technologies: ["Next.js", "MySQL", "Java"],
  },
  {
    icon: Globe,
    title: "Sistemazione CV",
    description: "Rendo il tuo CV più professionale ed efficiente",
    featured: false,
    technologies: ["Canva"],
  },
];
