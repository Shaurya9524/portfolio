"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type Theme = "dark" | "light" | "nord"
const themes: Theme[] = ["dark", "light", "nord"]

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  themes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const resolved = stored ?? (prefersDark ? "dark" : "light")
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(resolved)
    document.documentElement.dataset.theme = resolved
  }, [])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem("theme", next)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
