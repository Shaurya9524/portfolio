"use client"

import { useState, useRef, useEffect } from "react"
import styles from "./Dropdown.module.css"

interface DropdownOption<T extends string> {
  value: T
  label: React.ReactNode
}

interface DropdownProps<T extends string> {
  trigger: React.ReactNode
  options: DropdownOption<T>[]
  onSelect: (value: T) => void
  active?: T
}

export default function Dropdown<T extends string>({ trigger, options, onSelect, active }: DropdownProps<T>) {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState<"top" | "bottom">("bottom")
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open || !wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const spaceBelow = window.innerHeight - rect.bottom
    const spaceAbove = rect.top
    setPosition(spaceBelow < 160 && spaceAbove > spaceBelow ? "top" : "bottom")
  }, [open])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button className={styles.trigger} onClick={() => setOpen(prev => !prev)}>
        {trigger}
      </button>

      {open && (
        <div className={`${styles.dropdown} ${styles[position]}`}>
          {options.map((option) => (
            <button
              key={option.value}
              className={`${styles.option} ${active === option.value ? styles.active : ""}`}
              onClick={() => { onSelect(option.value); setOpen(false) }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
