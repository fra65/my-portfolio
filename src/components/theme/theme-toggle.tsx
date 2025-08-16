"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    // Dentro la funzione che cambia tema
    window.dispatchEvent(new Event("theme-change"));

  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="p-2 rounded-full hover:bg-white/10">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={changeTheme}
      className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 transition-transform duration-300" />
      ) : (
        <Sun className="h-4 w-4 transition-transform duration-300" />
      )}
    </Button>
  )
}
