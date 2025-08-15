import { ExternalLink, Github } from "lucide-react"

const projects = [
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

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-semibold text-foreground mb-3">Portfolio</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Progetti selezionati che dimostrano competenza tecnica e creatività
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden glass-card hover:glass-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border border-white/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <div className="bg-gradient-to-r from-primary to-accent text-white text-xs px-2 py-1 rounded-md">
                        Featured
                      </div>
                    </div>
                  )}

                  <div className="absolute top-3 right-3">
                    <span className="text-xs px-2 py-1 rounded-md glass-strong text-white">{project.category}</span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="p-2 rounded-lg glass-strong text-white hover:scale-110 transition-transform">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg glass-strong text-white hover:scale-110 transition-transform">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 rounded-md glass-card text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button className="text-sm text-primary hover:text-accent transition-colors font-medium">
                    Vedi progetto →
                  </button>
                  <button className="p-1.5 rounded-lg glass-card hover:glass-strong transition-all">
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-xl glass-card hover:glass-strong transition-all duration-300 hover:-translate-y-0.5 text-foreground font-medium">
            Vedi tutti i progetti →
          </button>
        </div>
      </div>
    </section>
  )
}
