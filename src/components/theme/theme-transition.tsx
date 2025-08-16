'use client'

import { useEffect, useState } from "react"

export function ThemeTransition({ children }: { children: React.ReactNode }) {
  const [isRipple, setIsRipple] = useState(false)

  useEffect(() => {
    const handleThemeChange = () => {
      setIsRipple(true)
      setTimeout(() => setIsRipple(false), 700) // ripple duration
    }

    window.addEventListener("theme-change", handleThemeChange)
    return () =>
      window.removeEventListener("theme-change", handleThemeChange)
  }, [])

  return (
    <div style={{ position: "relative" }}>
      {children}
      {isRipple && (
        <span className="theme-ripple-overlay" />
      )}
    </div>
  )
}
