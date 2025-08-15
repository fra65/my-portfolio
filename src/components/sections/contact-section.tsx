'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "marco@example.com",
    href: "mailto:marco@example.com",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+39 123 456 7890",
    href: "tel:+39123456789",
  },
  {
    icon: MapPin,
    label: "Posizione",
    value: "Milano, Italia",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    color: "hover:text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "#",
    color: "hover:text-gray-800",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "#",
    color: "hover:text-blue-400",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contattami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hai un progetto in mente? Parliamone! Sono sempre interessato a nuove sfide e opportunità di collaborazione.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Informazioni di contatto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Seguimi sui social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-muted rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">Pronto per iniziare?</h4>
                <p className="text-muted-foreground mb-4">Trasformiamo insieme la tua idea in realtà digitale.</p>
                <Button className="w-full">
                  Inizia il tuo progetto
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl">Invia un messaggio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" placeholder="Il tuo nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Cognome</Label>
                  <Input id="lastName" placeholder="Il tuo cognome" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="la-tua-email@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Oggetto</Label>
                <Input id="subject" placeholder="Di cosa vuoi parlare?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Messaggio</Label>
                <Textarea id="message" placeholder="Raccontami del tuo progetto..." className="min-h-32" />
              </div>

              <Button className="w-full" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Invia messaggio
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ti risponderò entro 24 ore. I tuoi dati sono al sicuro e non verranno condivisi.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
