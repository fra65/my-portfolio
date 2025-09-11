import { ProjectProps } from "./projectProps"

export const projects: ProjectProps[] = [
  {
    title: "PortfolioSection.projects.0.title",
    description: "PortfolioSection.projects.0.description",
    image: "/images/photomaker_portfolio.png",
    technologies: ["Next.js", "TypeScript", "Figma"],
    category: "PortfolioSection.projects.0.category",
    purchasable: true,
    demoUrl: "https://photographer-portfolio-ashy.vercel.app/", // Solo demo, niente repo
    storeUrl: "https://payhip.com/b/WOI1D"
  },
  {
    title: "PortfolioSection.projects.1.title",
    description: "PortfolioSection.projects.1.description",
    image: "/images/mobilidinonnosilvio.png",
    technologies: ["WordPress", "Figma"],
    category: "PortfolioSection.projects.1.category",
    purchasable: false,
    demoUrl: "https://mobilidinonnosilvio.it", // Solo demo, niente repo
  },
  {
    title: "PortfolioSection.projects.2.title",
    description: "PortfolioSection.projects.2.description",
    image: "/images/habits-tracker.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    category: "PortfolioSection.projects.2.category",
    purchasable: false,
    demoUrl: "https://habits-tracker-showcase.vercel.app/", // Link demo
    githubUrl: "https://github.com/fra65/habits-tracker-show-site", // Link repo
  },
  {
    title: "PortfolioSection.projects.3.title",
    description: "PortfolioSection.projects.3.description",
    image: "/images/aikidoseishindo.png",
    technologies: ["WordPress", "Figma"],
    category: "PortfolioSection.projects.3.category",
    purchasable: false,
    demoUrl: "https://aikidoseishindo.it", // Solo demo
  }
]
