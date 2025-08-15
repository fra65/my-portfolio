import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react"

const services = [
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
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Servizi</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Soluzioni digitali per trasformare le tue idee
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                  service.featured
                    ? "glass-strong bg-gradient-to-br from-primary/5 to-accent/5"
                    : "glass-card hover:glass-strong"
                } animate-fade-in-up hover:shadow-2xl hover:shadow-primary/10`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6">
                    <div className="bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                      Featured
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Icon più grande e moderno */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      service.featured
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
                        : "glass-card group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25"
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content più pulito */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground leading-tight">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-medium px-3 py-1.5 rounded-full glass-card text-muted-foreground hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button className="text-primary hover:text-accent transition-colors font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-2">
                        Scopri di più
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
