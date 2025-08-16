import { LucideIcon } from "lucide-react"

export default function EducationItem({
  icon: Icon,
  title,
  subtitle,
  period,
  location,
  grade,
}: {
  icon: LucideIcon
  title: string
  subtitle: string
  period: string
  location: string
  grade?: string
}) {
  return (
    <div className="relative bg-white/70 dark:bg-background/60 shadow-lg rounded-2xl px-6 py-5 flex flex-col gap-4 border border-teal-200/20 hover:shadow-emerald-100 transition-all duration-300">
      {/* Icona e Titolo */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-r from-emerald-400 to-teal-400 shadow-sm">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="text-lg font-bold text-foreground leading-tight">{title}</span>
      </div>

      {/* Istituzione e periodo */}
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-muted-foreground">{subtitle}</span>
        <span className="bg-emerald-100 text-emerald-700 font-semibold px-2 py-1 rounded-full text-xs">{period}</span>
      </div>

      {/* Location e grade */}
      <div className="flex items-center justify-between mt-1">
        <span className="text-sm text-muted-foreground">{location}</span>
        {grade && (
          <span className="inline-block px-3 py-1 rounded-xl bg-gradient-to-r from-emerald-500/15 to-teal-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            {grade}
          </span>
        )}
      </div>
    </div>
  )
}
