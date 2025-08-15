import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Heart, Code2, Gamepad2 } from "lucide-react"

const interests = [
  { icon: Code2, label: "Coding", color: "text-blue-500" },
  { icon: Coffee, label: "Coffee", color: "text-amber-500" },
  { icon: Heart, label: "Design", color: "text-red-500" },
  { icon: Gamepad2, label: "Gaming", color: "text-green-500" },
]

const stats = [
  { number: "50+", label: "Progetti Completati" },
  { number: "3+", label: "Anni di Esperienza" },
  { number: "20+", label: "Clienti Soddisfatti" },
  { number: "100%", label: "Dedizione" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Chi sono</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri di più sulla mia storia, le mie passioni e cosa mi motiva ogni giorno a creare soluzioni digitali
            innovative.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center animate-slide-in-left">
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl"></div>

              {/* Profile Image */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-card shadow-2xl">
                <img src="/developer-at-desk.png" alt="Marco al lavoro" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">La mia storia</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sono un <strong className="text-foreground">Full Stack Developer</strong> con oltre 3 anni di
                  esperienza nella creazione di soluzioni digitali innovative. La mia passione per la tecnologia è nata
                  durante gli studi universitari e da allora non ha mai smesso di crescere.
                </p>
                <p>
                  Mi specializzo nello sviluppo di <strong className="text-foreground">applicazioni web moderne</strong>{" "}
                  utilizzando le tecnologie più avanzate come React, Next.js e Node.js. Credo fermamente che il codice
                  debba essere non solo funzionale, ma anche elegante e mantenibile.
                </p>
                <p>
                  Quando non sto programmando, amo esplorare nuove tecnologie, contribuire a progetti open source e
                  condividere le mie conoscenze con la community degli sviluppatori.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Le mie passioni</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => {
                  const Icon = interest.icon
                  return (
                    <Badge key={index} variant="outline" className="px-3 py-2 text-sm">
                      <Icon className={`w-4 h-4 mr-2 ${interest.color}`} />
                      {interest.label}
                    </Badge>
                  )
                })}
              </div>
            </div>

            {/* Stats */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
