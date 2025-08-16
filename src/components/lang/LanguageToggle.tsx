"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import "flag-icons/css/flag-icons.min.css";

export function LanguageToggle() {
  const pathname = usePathname()

  // Capisco la lingua attuale in base all'URL
  const isItalian = pathname.startsWith("/it")
  const currentLang = isItalian ? "it" : "en"

  // Prossima lingua e icona (qui JSX, non stringhe)
  const nextLang = isItalian ? "en" : "it"
  const nextIcon = nextLang === "it"
    ? <span className="fi fi-it w-full h-full block rounded-md"></span>
    : <span className="fi fi-gb-eng w-full h-full block rounded-md"></span>

  // Ricostruisci il nuovo pathname sostituendo la parte della lingua
  let newPath
  if (isItalian) {
    newPath = pathname.replace(/^\/it/, "/en")
  } else {
    newPath = pathname.replace(/^\/en/, "/it")
  }

  return (
    <Link className="" href={newPath} scroll={false}>
      <div
        className="w-full h-full rounded-[5px] cursor-pointer"
        aria-label={`Switch to ${nextLang}`}
      >
        {nextIcon}
      </div>
    </Link>
  )
}