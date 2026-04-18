import { Metadata } from "next"
import { siteUrl } from "./constants"

const siteName = "Shaurya - Portfolio"
const description = "Shaurya's personal portfolio website showcasing projects, skills, and experience in software development."
const twitterHandle = "@Shaurya9524"
const keywords = [
  "Shaurya",
  "Shaurya Portfolio",
  "Shaurya Software Developer",
  "Shaurya Full Stack Developer",
  "Full Stack Developer",
  "Web Developer",
  "Portfolio"
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description,
  keywords,
  authors: [{ name: "Shaurya", url: siteUrl }],
  creator: "Shaurya",
  category: "Portfolio",
  applicationName: "Shaurya's Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteName,
    description,
    siteName: siteName,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/opengraph-image.png"],
    creator: twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/site.webmanifest"
}
