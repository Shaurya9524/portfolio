"use client"

import Alert from "./Alert"
import { useAlert } from "@/context/AlertContext"
import styles from "./AlertStack.module.css"

export default function AlertStack() {
  const { alerts, remove } = useAlert()

  return (
    <div className={styles.stack} aria-live="polite" aria-label="Notifications">
      {alerts.map((a) => (
        <Alert
          key={a.id}
          variant={a.variant}
          message={a.message}
          dismissible
          onDismiss={() => remove(a.id)}
          duration={a.duration}
        />
      ))}
    </div>
  )
}
