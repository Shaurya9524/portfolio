"use client"

import { useState, useEffect } from "react"
import styles from "./Toggle.module.css"

export default function CursorToggle() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("customCursorEnabled") === "false"
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEnabled(false)
      document.body.classList.add("cursorOff")
    }
  }, [])

  function toggle() {
    setEnabled((prev) => {
      const next = !prev
      document.body.classList.toggle("cursorOff", !next)
      localStorage.setItem("customCursorEnabled", String(next))
      return next
    })
  }

  return (
    <button className={styles.btn} onClick={toggle}>
      <span className={`${styles.dot} ${enabled ? styles.dotOn : ""}`} />
      Custom Cursor: {enabled ? "On" : "Off"}
    </button>
  )
}
