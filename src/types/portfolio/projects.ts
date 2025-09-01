import { ProjectProps } from "./projectProps"

export const projects: ProjectProps[] = [
  {
    title: "Sito vetrina per ditta di falegnameria",
    description: "Sito vetrina statico per ampliare la visibilità sul web per una piccola ditta di falegnameria e infissi a conduzione familiare",
    image: "/images/mobilidinonnosilvio.png",
    technologies: ["WordPress", "Figma"],
    category: "Sito vetrina/portfolio",
    featured: false,
    demoUrl: "https://mobilidinonnosilvio.it", // Solo demo, niente repo
  },
  {
    title: "Demo Webapp Habits Tracker",
    description: "Realizzazione in locale di una webapp minimale per gestione di abitudini",
    image: "/images/habits-tracker.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    category: "Webapp",
    featured: false,
    demoUrl: "https://habits-tracker-showcase.vercel.app/", // Link demo
    githubUrl: "https://github.com/fra65/habits-tracker-show-site", // Link repo
  },
  {
    title: "Sito vetrina per una piccola palestra di arti marziali",
    description: "Sito vetrina realizzato per una piccola palestra di Aikido, un'arte marziale. Primo progetto effettivamente sviluppato e pubblicato.",
    image: "/images/aikidoseishindo.png",
    technologies: ["WordPress", "Figma"],
    category: "Sito vetrina/portfolio",
    featured: false,
    demoUrl: "https://aikidoseishindo.it", // Solo demo
  }
]
