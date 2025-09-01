import { projects } from "@/types/portfolio/projects"
import { ExternalLink, Github } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export function PortfolioSection() {
  const t = useTranslations("PortfolioSection")

  return (
    <section
      id="portfolio"
      className="w-full sm:px-2 md:px-6 lg:px-[10rem] py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Titolo sezione */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-semibold text-foreground mb-3">{t("title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Grid progetti */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden glass-card hover:glass-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border border-white/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Immagine progetto */}
              <div className="relative overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                  {/* Featured label */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 z-20">
                      <div className="bg-gradient-to-r from-primary to-accent text-white text-xs px-2 py-1 rounded-md">
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Categoria */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="text-xs px-2 py-1 rounded-md glass-strong text-white">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottoni hover sopra immagine */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 bg-opacity-90 backdrop-blur-sm text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black bg-opacity-90 backdrop-blur-sm text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Contenuti card */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded-md glass-card text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Azioni bottom */}
                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 bg-opacity-90 backdrop-blur-sm text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black bg-opacity-90 backdrop-blur-sm text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA per tutti i progetti */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-xl glass-card hover:glass-strong transition-all duration-300 hover:-translate-y-0.5 text-foreground font-medium">
            Vedi tutti i progetti →
          </button>
        </div>
      </div>
    </section>
  )
}
