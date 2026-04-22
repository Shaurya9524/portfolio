"use client"

import Dropdown from "@/components/ui/Dropdown"
import { useTheme, Theme } from "@/context/ThemeContext"

const themeData: Record<Theme, { label: string, colors: string[] }> = {
  dark: { label: "Dark", colors: ["#090a10", "#3178c6", "#9099bc"] },
  light: { label: "Light", colors: ["#b8bacf", "#2866b0", "#0d0e1a"] },
  nord: { label: "Nord", colors: ["#1a1f2e", "#5e81ac", "#8fa3b8"] }
}

function Swatches({ colors }: { colors: string[] }) {
  return (
    <span style={{ display: "flex", gap: "3px" }}>
      {colors.map((c, i) => (
        <span key={i} style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: c,
          display: "block",
          outline: "1px solid rgba(128,128,128,0.25)",
          outlineOffset: "1px",
        }} />
      ))}
    </span>
  )
}

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme()

  const options = themes.map((theme) => ({
    value: theme,
    label: (
      <>
        <Swatches colors={themeData[theme].colors} />
        {themeData[theme].label}
      </>
    )
  }))

  const trigger = (
    <>
      <Swatches colors={themeData[theme].colors} />
      {themeData[theme].label}
    </>
  )

  return <Dropdown trigger={trigger} options={options} onSelect={setTheme} active={theme} />
}
