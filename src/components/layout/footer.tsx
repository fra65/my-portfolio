"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowUp, Heart } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Esperienza", href: "#experience" },
  { name: "Servizi", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contatti", href: "#contact" },
]

const services = ["Sviluppo Web", "App Mobile", "UI/UX Design", "Consulenza Tech"]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Marco</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer appassionato di tecnologie moderne e design elegante. Trasformo idee in soluzioni
              digitali innovative.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Link Rapidi</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Servizi</h4>
            <nav className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="block text-sm text-muted-foreground">
                  {service}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contatti</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>marco@example.com</p>
              <p>+39 123 456 7890</p>
              <p>Milano, Italia</p>
            </div>
            <Button onClick={scrollToTop} variant="outline" size="sm" className="w-full bg-transparent">
              <ArrowUp className="mr-2 h-4 w-4" />
              Torna su
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Marco. Tutti i diritti riservati.</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Fatto con <Heart className="w-4 h-4 text-red-500" /> usando Next.js e shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}
