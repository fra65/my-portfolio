/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    position: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Presente",
    location: "Milano, IT",
    achievements: [
      "Sviluppo di applicazioni React/Next.js per oltre 50k utenti",
      "Implementazione di architetture microservizi con Node.js",
    ],
  },
  {
    position: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    location: "Roma, IT",
    achievements: ["Creazione di 20+ siti web responsive e performanti", "Ottimizzazione SEO e Core Web Vitals"],
  },
  {
    position: "Junior Developer",
    company: "StartupLab",
    period: "2019 - 2020",
    location: "Firenze, IT",
    achievements: ["Sviluppo di MVP per startup innovative", "Collaborazione in team agile con metodologie Scrum"],
  },
]

const education = [
  {
    degree: "Master in Computer Science",
    institution: "Università Bocconi",
    period: "2017 - 2019",
    location: "Milano, IT",
    grade: "110/110 cum laude",
    achievements: ["Tesi su Machine Learning e Web Development", "Progetto finale: E-commerce platform con React"],
  },
  {
    degree: "Laurea in Informatica",
    institution: "Università di Roma",
    period: "2014 - 2017",
    location: "Roma, IT",
    grade: "108/110",
    achievements: ["Specializzazione in Sviluppo Web", "Stage presso azienda di software development"],
  },
]

function TimelineItem({
  icon: Icon,
  title,
  subtitle,
  period,
  location,
  achievements,
  grade,
}: {
  icon: any
  title: string
  subtitle: string
  period: string
  location: string
  achievements: string[]
  grade?: string
}) {
  return (
    <div className=" relative pl-12 pb-12 last:pb-0 group">
      <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"></div>

      <div className="absolute left-4 top-4 w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300"></div>

      <div className="ml-8 p-6 rounded-3xl glass-card hover:glass-strong transition-all duration-500 hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-primary/5">
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-foreground leading-tight">{title}</h3>
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <span className="text-xs font-medium text-primary">{period}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-medium">{subtitle}</span>
              <span className="w-1 h-1 bg-muted-foreground/40 rounded-full"></span>
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {grade && (
            <div className="flex justify-end">
              <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                <span className="text-sm font-semibold text-emerald-400">{grade}</span>
              </div>
            </div>
          )}

          <div className="space-y-3 pt-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 group/item">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                <span className="text-muted-foreground leading-relaxed text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ExperienceEducationSection() {
  return (
    <section id="experience" className="w-full sm:px-2 md:px-6 lg:px-[10rem] py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Esperienza & Formazione</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Il percorso che mi ha formato come sviluppatore
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Esperienza</h3>
            </div>
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  icon={Briefcase}
                  title={exp.position}
                  subtitle={exp.company}
                  period={exp.period}
                  location={exp.location}
                  achievements={exp.achievements}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-in-right">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Formazione</h3>
            </div>
            <div className="space-y-0">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  icon={GraduationCap}
                  title={edu.degree}
                  subtitle={edu.institution}
                  period={edu.period}
                  location={edu.location}
                  achievements={edu.achievements}
                  grade={edu.grade}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
