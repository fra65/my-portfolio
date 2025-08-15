import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="w-full sm:px-2 md:px-6 lg:px-[10rem] min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 bg-background/80"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Ciao, sono{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Marco</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Creo esperienze digitali moderne e funzionali che combinano design elegante e tecnologie
                all&apos;avanguardia per trasformare le tue idee in realtà.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full"
              >
                Scopri i miei progetti
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group glass-card hover:glass-strong rounded-full hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Scarica CV
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative floating">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 to-accent/20 morph-shape blur-3xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl"></div>

              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden glass-strong shadow-2xl hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/myface.jpg"
                  alt="Marco"
                  width={320}
                  height={320}
                  className="w-full h-full rounded-full object-cover"
                  priority
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
