"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./Cursor.module.css"

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    setEnabled(localStorage.getItem("customCursorEnabled") !== "false")

    const onToggle = (e: Event) => {
      setEnabled((e as CustomEvent<{ enabled: boolean }>).detail.enabled)
    }

    window.addEventListener("cursorToggle", onToggle)

    return () => {
      window.removeEventListener("cursorToggle", onToggle)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`
        dotRef.current.style.top = `${my}px`
      }
    }

    const tick = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`
        ringRef.current.style.top = `${ry}px`
      }
      rafId = requestAnimationFrame(tick)
    }

    const onEnter = () => {
      const ring = ringRef.current
      if (!ring) return
      ring.style.width = "46px"
      ring.style.height = "46px"
      ring.style.borderColor = "var(--blue)"
    }

    const onLeave = () => {
      const ring = ringRef.current
      if (!ring) return
      ring.style.width = "32px"
      ring.style.height = "32px"
      ring.style.borderColor = "var(--cursor-ring)"
    }

    const bindHoverTargets = () => {
      document.querySelectorAll<HTMLElement>("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter)
        el.addEventListener("mouseleave", onLeave)
      })
    }

    document.addEventListener("mousemove", onMove)
    bindHoverTargets()
    rafId = requestAnimationFrame(tick)

    // re-bind when DOM changes (e.g. after navigation)
    const observer = new MutationObserver(bindHoverTargets)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [enabled])

  return mounted && enabled && (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
