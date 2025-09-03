import { experiences } from "@/types/experience/experiences"
import { useTranslations } from "next-intl"
import { Briefcase, GraduationCap } from "lucide-react"
import TimelineItem from "../experience-education/TimelineItem"
import { educations } from "@/types/education/educations"
import EducationItem from "../experience-education/EducationItem"

export function ExperienceEducationSection() {
  const t = useTranslations("ExperienceEducationSection")

  return (
    <section id="experience" className="w-full sm:px-2 md:px-6 lg:px-[10rem] py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("expTitle")}</h3>
            </div>
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  icon={Briefcase}
                  title={t(`experiences.${index}.position`, { defaultValue: exp.position })}
                  subtitle={t(`experiences.${index}.company`, { defaultValue: exp.company })}
                  period={t(`experiences.${index}.period`, { defaultValue: exp.period })}
                  location={t(`experiences.${index}.location`, { defaultValue: exp.location })}
                  achievements={exp.achievements}
                  showAchievements={true} // 👈 mantiene achievements
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-in-right">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("eduTitle")}</h3>
            </div>
            <div className="space-y-0">
              {educations.map((edu, index) => (
                <TimelineItem
                  key={index}
                  icon={GraduationCap}
                  title={t(`educations.${index}.degree`, { defaultValue: edu.degree })}
                  subtitle={t(`educations.${index}.institution`, { defaultValue: edu.institution })}
                  period={t(`educations.${index}.period`, { defaultValue: edu.period })}
                  location={t(`educations.${index}.location`, { defaultValue: edu.location })}
                  grade={t(`educations.${index}.grade`, { defaultValue: edu.grade || "" })}
                  achievements={[]}
                  showAchievements={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
