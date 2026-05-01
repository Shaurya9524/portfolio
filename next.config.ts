import createMDX from "@next/mdx"
import type { NextConfig } from "next"
import { redirects } from "@/config/redirects"

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  redirects: async () => redirects
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
