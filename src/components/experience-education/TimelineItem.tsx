import { LucideIcon } from "lucide-react"

export default function TimelineItem({
  
  title,
  subtitle,
  period,
  location,
  achievements,
  grade,
}: {
  icon: LucideIcon
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
