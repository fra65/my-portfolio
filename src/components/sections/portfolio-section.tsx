import { projects } from "@/types/portfolio/projects"
import { Download, ExternalLink, Github } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"

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
                  
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={t(`projects.${index}.title`, { defaultValue: project.title })}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                  {/* Featured label */}
                  {project.purchasable && (
                    <div className="absolute top-3 left-3 z-20">
                      <div className="bg-gradient-to-r from-primary to-accent text-white text-xs px-2 py-1 rounded-md">
                        {t("purchasableLabel")}
                      </div>
                    </div>
                  )}

                  {/* Categoria */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="text-xs px-2 py-1 rounded-md glass-strong text-white">
                      {t(`projects.${index}.category`, { defaultValue: project.category })}
                    </span>
                  </div>

                  {/* Bottoni hover sopra immagine */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-medium hover:bg-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{t("demoBtn")}</span>
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/90 backdrop-blur-sm text-background text-sm font-medium hover:bg-foreground/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>{t("codeBtn")}</span>
                      </Link>
                    )}
                    {project.storeUrl && (
                      <Link
                        href={project.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-chart-2/90 backdrop-blur-sm text-primary-foreground text-sm font-medium hover:bg-chart-2/80 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>{t("getBtn")}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Contenuti card */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2">{t(`projects.${index}.title`, { defaultValue: project.title })}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t(`projects.${index}.description`, { defaultValue: project.description })}
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
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-medium hover:bg-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t("demoBtn")}</span>
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/90 backdrop-blur-sm text-background text-sm font-medium hover:bg-foreground/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t("codeBtn")}</span>
                    </Link>
                  )}
                  {project.storeUrl && (
                    <Link
                      href={project.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-chart-2/90 backdrop-blur-sm text-primary-foreground text-sm font-medium hover:bg-chart-2/80 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>{t("getBtn")}</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA per tutti i progetti */}
        <div className="text-center mt-12 flex justify-center gap-4">
          <Link
            href='https://github.com/fra65?tab=repositories' 
            target="_blank"
            className="px-6 py-3 rounded-xl glass-card hover:glass-strong transition-all duration-300 hover:-translate-y-0.5 text-foreground font-medium cursor-pointer"
          >
              {t("allProjectsBtn")} →
          </Link>

          <Link 
            href='https://payhip.com/FrancescoVillani' 
            target="_blank"
            className="px-6 py-3 rounded-xl bg-gradient-to-br from-purple-400 via-blue-400 to-indigo-500 hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600 text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-white/20 backdrop-blur-sm opacity-80"
          >
            {t("allPurchaseBtn")} →
          </Link>

        </div>
      </div>
    </section>
  )
}
