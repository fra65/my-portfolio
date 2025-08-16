import { LucideIcon } from "lucide-react"

export default function TimelineItem({
  icon: Icon,
  title,
  subtitle,
  period,
  location,
  achievements = [],
  grade,
  showAchievements = true,
}: {
  icon: LucideIcon
  title: string
  subtitle: string
  period: string
  location: string
  achievements?: string[]
  grade?: string
  showAchievements?: boolean
}) {
  return (
    <div className="relative pl-12 pb-12 last:pb-0 group">
      {/* linea verticale della timeline */}
      <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"></div>

      {/* cerchio colorato timeline */}
      <div className="absolute left-4 top-4 w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300"></div>

      <div className="ml-8 p-6 rounded-3xl glass-card hover:glass-strong transition-all duration-500 hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-primary/5">
        <div className="space-y-3">
          {/* Icona e titolo in riga, più ordinati */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground leading-tight">{title}</h3>
          </div>

          {/* sottotitolo (istituzione o azienda) e periodo in riga, ben distanziati */}
          <div className="flex justify-between items-center text-sm text-muted-foreground font-medium">
            <span>{subtitle}</span>
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-xs text-primary">
              {period}
            </span>
          </div>

          {/* location e grade allineati a sinistra (location) e destra (grade) */}
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{location}</span>
            {grade && (
              <span className="px-3 py-1 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-xs">
                {grade}
              </span>
            )}
          </div>

          {/* achievements se presenti e richiesti, con margine ridotto per non appesantire */}
          {showAchievements && achievements.length > 0 && (
            <div className="space-y-2 pt-2 text-sm text-muted-foreground">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
