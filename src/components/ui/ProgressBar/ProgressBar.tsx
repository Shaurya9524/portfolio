"use client"

import { useEffect, useState } from "react"

export default function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const styles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: `${progress}%`,
    height: 2,
    background: "linear-gradient(90deg, var(--blue), var(--blue-ice))",
    zIndex: 600,
    transition: "width 0.1s linear"
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <div style={styles} />
}
