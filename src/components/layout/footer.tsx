"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowUp, Heart } from "lucide-react"
import { useTranslations } from "next-intl"


const quickLinks = [
  { name: "Navbar.Home", href: "#home" },
  { name: "Navbar.Skills", href: "#skills" },
  { name: "Navbar.Experience", href: "#experience" },
  { name: "Navbar.Services", href: "#services" },
  { name: "Navbar.Portfolio", href: "#portfolio" },
  { name: "Navbar.About", href: "#about" },
  { name: "Navbar.Contact", href: "#contact" }
]

const serviceKeys = ["web", "mobile", "design", "consulting"];

export function Footer() {
  const t = useTranslations()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">{t("Footer.brandTitle")}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("Footer.brandDesc")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("Footer.quickLinksTitle")}</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(link.name)}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("Footer.servicesTitle")}</h4>
            <nav className="space-y-2">
              {serviceKeys.map((key) => (
                <div key={key} className="block text-sm text-muted-foreground">
                  {t(`Footer.services.${key}`)}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("Footer.contactTitle")}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t("Footer.email")}</p>
              <p>{t("Footer.phone")}</p>
              <p>{t("Footer.place")}</p>
            </div>
            <Button onClick={scrollToTop} variant="outline" size="sm" className="w-full bg-transparent">
              <ArrowUp className="mr-2 h-4 w-4" />
              {t("Footer.scrollTop")}
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{t("Footer.copyright")}</p>
          {/* <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t("Footer.madeWith")} <Heart className="w-4 h-4 text-red-500" /> {t("Footer.using")}
          </p> */}
        </div>
      </div>
    </footer>
  )
}
