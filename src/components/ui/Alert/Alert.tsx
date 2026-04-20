"use client"

import { IconType } from "react-icons"
import { accentRgb } from "@/lib/utils/color"
import { useEffect, useState, useCallback } from "react"
import { InfoIcon, SuccessIcon, WarnIcon, ErrorIcon, DismissIcon } from "../Icons"
import styles from "./Alert.module.css"

type AlertVariant = "info" | "success" | "warning" | "error"

interface AlertProps {
  message: string
  onDismiss: () => void
  variant?: AlertVariant
  duration?: number
  dismissible?: boolean
}

const variantMeta: Record<AlertVariant, { label: string; Icon: IconType; rgb: string }> = {
  info: { label: "Info", Icon: InfoIcon, rgb: accentRgb.blueIce },
  success: { label: "Success", Icon: SuccessIcon, rgb: accentRgb.green },
  warning: { label: "Warning", Icon: WarnIcon, rgb: accentRgb.gold },
  error: { label: "Error", Icon: ErrorIcon, rgb: accentRgb.red },
}

export default function Alert({ variant = "info", message, dismissible, onDismiss, duration = 5000 }: AlertProps) {
  const [leaving, setLeaving] = useState(false)
  const { label, Icon, rgb } = variantMeta[variant]
  const accent = `rgb(${rgb})`
  const glow = `rgba(${rgb}, 0.12)`
  const border = `rgba(${rgb}, 0.35)`

  const handleDismiss = useCallback(() => {
    setLeaving(true)
    setTimeout(() => {
      onDismiss()
    }, 200)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (duration && duration > 0) {
      const timer = setTimeout(() => {
        handleDismiss()
      }, duration)
      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={`${styles.alert} ${leaving ? styles.leaving : ""}`}
      role="alert"
      style={{
        "--accent": accent,
        "--glow": glow,
        "--border": border
      } as React.CSSProperties}
    >
      <Icon className={styles.icon} />
      <div className={styles.body}>
        <div className={styles.label}>{label}</div>
        <div className={styles.message}>{message}</div>
      </div>
      {dismissible && (
        <button className={styles.dismiss} onClick={handleDismiss} aria-label="Dismiss">
          <DismissIcon />
        </button>
      )}
    </div>
  )
}
