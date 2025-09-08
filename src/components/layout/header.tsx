"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "../theme/theme-toggle"
import { LanguageToggle } from "../lang/LanguageToggle"
import { useTranslations } from "next-intl"
import Link from "next/link"

export function Navbar() {
  const t = useTranslations("Navbar")

  const navItems = [
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
  }, [activeSection, navItems])

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
          "fixed top-2 left-1/2 z-50 -translate-x-1/2 rounded-full px-10 py-4 items-center space-x-6 transition-all duration-500 hidden lg:flex",
          isScrolled ? "glass-strong backdrop-blur-lg shadow-lg" : "bg-transparent shadow-none",
        )}
      >
        <a
          href="#home"
          onClick={e => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="flex flex-col items-center justify-center mr-4 cursor-pointer select-none px-4 py-2"
          style={{ textDecoration: "none" }}
        >
          <span
            className={cn(
              "font-extrabold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wide transition-all duration-300",
              isScrolled ? "text-lg" : "text-2xl"
            )}
          >
            Francesco
          </span>
          <span
            className={cn(
              "font-extrabold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wide transition-all duration-300",
              isScrolled ? "text-lg" : "text-2xl"
            )}
          >
            Villani
          </span>
        </a>

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

        <a
          href="/cv/CV_Villani.pdf"
          download="CV_Villani.pdf"
          className="btn-modern rounded-full border-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm hover:from-primary/30 hover:to-accent/30 hover:scale-110 hover:shadow-xl text-foreground whitespace-nowrap cursor-pointer flex items-center px-4 py-2"
        >
          <Download className="w-4 h-4 mr-2" />
          {t("downloadCV")}
        </a>

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
          <Link
            href="#home"
            onClick={e => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex flex-col items-center justify-center cursor-pointer select-none px-4 py-0"
            style={{ textDecoration: "none" }}
          >
            <span
              className={cn(
                "font-extrabold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wide transition-all duration-300",
                "text-lg"
              )}
            >
              Francesco
            </span>
            <span
              className={cn(
                "font-extrabold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wide transition-all duration-300",
                "text-lg"
              )}
            >
              Villani
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <LanguageToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-white/10"
            aria-label={isMobileMenuOpen ? "Chiudi menu mobile" : "Apri menu mobile"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed left-0 right-0 z-40 lg:hidden pointer-events-none transition-all",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ top: '68px' }} // (top-16 ~ 64px + margin)
      >
        <div
          className={cn(
            "mx-2 glass-strong backdrop-blur-lg rounded-3xl p-6 shadow-2xl transition-all duration-500 ease-in-out transform",
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          )}
        >
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

            <a
              href="/cv/CV_Villani.pdf"
              download="CV_Villani.pdf"
              className="btn-modern rounded-2xl border-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm hover:from-primary/30 hover:to-accent/30 text-foreground mt-4 cursor-pointer flex items-center justify-center px-4 py-3"
            >
              <Download className="w-4 h-4 mr-2" />
              {t("downloadCV")}
            </a>
          </div>
        </div>
        {/* Backdrop (mascherato sotto il menu, non scrollabile) */}
        <div
          className={cn(
            "fixed inset-0 bg-black/40 transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          style={{ zIndex: -1 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </div>

      <div className="h-16" />
    </>
  )
}
