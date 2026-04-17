import type { NextConfig } from "next"
import { redirects } from "@/config/redirects"

const nextConfig: NextConfig = {
  redirects: async () => redirects
}

export default nextConfig
