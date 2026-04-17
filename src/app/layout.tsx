import { Bricolage_Grotesque, Fira_Code } from "next/font/google"

import "./globals.css"
import Nav from "@/components/layout/Nav"
import Cursor from "@/components/ui/Cursor/Cursor"

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
})

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
})

export * from "@/config/metadata"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${firaCode.variable}`}>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
