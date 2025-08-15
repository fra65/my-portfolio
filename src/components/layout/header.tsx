"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      // Find currently active section by checking element positions
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.href.substring(1))
        if (!el) return null
        const rect = el.getBoundingClientRect()
        return { id: item.href.substring(1), top: rect.top }
      }).filter(Boolean) as {id: string, top: number}[]

      // Consider active the last section with top <= 150px from viewport top
      let current = "home"
      for (const section of sections) {
        if (section.top <= 150) current = section.id
      }
      if (current !== activeSection) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // run on mount to set correctly

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-2 left-1/2 z-50 -translate-x-1/2 rounded-3xl px-6 py-3 flex items-center space-x-4 w-auto max-w-full overflow-x-auto transition-all duration-500",
          isScrolled
            ? "glass-strong backdrop-blur-lg shadow-lg"
            : "bg-transparent shadow-none"
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
                : "text-muted-foreground hover:text-foreground hover:bg-white/10"
            )}
            style={{ transitionProperty: "color, background-color, box-shadow, transform" }}
          >
            {item.name}
          </a>
        ))}

        <Button
          variant="outline"
          size="sm"
          className="btn-modern rounded-full border-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm hover:from-primary/30 hover:to-accent/30 hover:scale-110 hover:shadow-xl text-foreground whitespace-nowrap"
        >
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Button>
      </nav>

      <div className="h-16" />
    </>
  )
}
