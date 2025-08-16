import { GraduationCap, Briefcase } from "lucide-react"
import TimelineItem from "../experience-education/TimelineItem"
import { educations } from "@/types/education/educations"
import { experiences } from "@/types/experience/experiences"

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
              {educations.map((edu, index) => (
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
