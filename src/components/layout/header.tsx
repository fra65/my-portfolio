"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "../theme/theme-toggle"
import { LanguageToggle } from "../lang/LanguageToggle"
import { useTranslations } from "next-intl"



export function Navbar() {

  const t = useTranslations("Navbar")

  const navItems = [
    { name: t("Home"), href: "#home" },
    { name: t("Skills"), href: "#skills" },
    { name: t("Experience"), href: "#experience" },
    { name: t("Services"), href: "#services" },
    { name: t("Portfolio"), href: "#portfolio" },
    { name: t("About"), href: "#about" },
    { name: t("Contact"), href: "#contact" },
  ]

  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Trova sezione attiva
      const sections = navItems
        .map((item) => {
          const el = document.getElementById(item.href.substring(1))
          if (!el) return null
          const rect = el.getBoundingClientRect()
          return { id: item.href.substring(1), top: rect.top }
        })
        .filter(Boolean) as { id: string; top: number }[]

      let current = "home"
      for (const section of sections) {
        if (section.top <= 150) current = section.id
      }
      if (current !== activeSection) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={cn(
          "fixed top-2 left-1/2 z-50 -translate-x-1/2 rounded-full px-6 py-3 items-center space-x-4 transition-all duration-500 hidden lg:flex",
          isScrolled ? "glass-strong backdrop-blur-lg shadow-lg" : "bg-transparent shadow-none",
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(item.href)
            }}
            className={cn(
              "whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg transition-colors",
              activeSection === item.href.substring(1)
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg scale-105"
                : "text-muted-foreground hover:text-foreground hover:bg-white/10",
            )}
            style={{ transitionProperty: "color, background-color, box-shadow, transform" }}
          >
            {item.name}
          </a>
        ))}

        <Button
          variant="outline"
          size="sm"
          className="btn-modern rounded-full border-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm hover:from-primary/30 hover:to-accent/30 hover:scale-110 hover:shadow-xl text-foreground whitespace-nowrap cursor-pointer"
        >
          <Download className="w-4 h-4 mr-2" />
          {t("downloadCV")}

        </Button>

        {/* Toggles */}
        <ThemeToggle />
        <LanguageToggle />
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={cn(
          "fixed top-2 left-2 right-2 z-50 rounded-3xl px-4 py-3 flex items-center justify-between transition-all duration-500 lg:hidden",
          isScrolled ? "glass-strong backdrop-blur-lg shadow-lg" : "bg-transparent shadow-none",
        )}
      >
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfolio
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <LanguageToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu content */}
          <div className="absolute top-20 left-2 right-2 glass-strong backdrop-blur-lg rounded-3xl p-6 shadow-2xl">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-2xl cursor-pointer transition-all duration-300 text-center",
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/10",
                  )}
                >
                  {item.name}
                </a>
              ))}

              <Button
                variant="outline"
                className="btn-modern rounded-2xl border-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm hover:from-primary/30 hover:to-accent/30 text-foreground mt-4 cursor-pointer"
              >
                <Download className="w-4 h-4 mr-2" />
                {t("downloadCV")}
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="h-16" />
    </>
  )
}
