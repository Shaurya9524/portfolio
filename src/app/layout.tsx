import { Bricolage_Grotesque, Fira_Code } from "next/font/google"

import Cursor from "@/components/ui/Cursor"
import Footer from "@/components/layout/Footer"
import { ThemeProvider } from "@/context/ThemeContext"
import { AlertProvider } from "@/context/AlertContext"
import AlertStack from "@/components/ui/Alert/AlertStack"
import "./globals.css"

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
        <AlertProvider>
          <ThemeProvider>
            <Cursor />
            <AlertStack />
            {children}
            <Footer />
          </ThemeProvider>
        </AlertProvider>
      </body>
    </html>
  )
}
