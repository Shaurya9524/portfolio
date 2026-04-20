"use client"

import { createContext, useContext, useReducer, useCallback } from "react"

type AlertVariant = "info" | "success" | "warning" | "error"

interface Alert {
  id: number
  variant: AlertVariant
  message: string
  duration?: number
}

interface AlertState {
  alerts: Alert[]
}

type Action = { type: "add"; payload: Alert } | { type: "remove"; id: number }

const AlertContext = createContext<{
  alerts: Alert[]
  push: (alert: Omit<Alert, "id">) => void
  remove: (id: number) => void
} | null>(null)

let nextId = 0

function alertsReducer(state: AlertState, action: Action): AlertState {
  switch (action.type) {
    case "add": return { alerts: [...state.alerts, action.payload] }
    case "remove": return { alerts: state.alerts.filter(a => a.id !== action.id) }
  }
}

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(alertsReducer, { alerts: [] })

  const push = useCallback((alert: Omit<Alert, "id">) => {
    const id = nextId++
    dispatch({ type: "add", payload: { ...alert, id } })
  }, [])

  const remove = useCallback((id: number) => {
    dispatch({ type: "remove", id })
  }, [])

  return (
    <AlertContext.Provider value={{ alerts: state.alerts, push, remove }}>
      {children}
    </AlertContext.Provider>
  )
}

export function useAlert() {
  const ctx = useContext(AlertContext)
  if (!ctx) throw new Error("useAlert must be used inside AlertProvider")
  return ctx
}
