import { Project } from "@/types/project"
import { github } from "@/config/constants"
import { accentRgb } from "@/lib/utils/color"

export const projects: Project[] = [
  {
    index: 1,
    title: "Pingify",
    description: "Pingify is a Discord notification bot delivering real-time alerts for new content from all your favorite platforms, YouTube, Reddit, X, and more directly to your Discord server.",
    href: "https://pingify-bot.vercel.app",
    statusLabel: "Live",
    tags: ["Discord Bot", "Web App", "TypeScript", "Next.js"],
    tech: ["TypeScript", "Next.js", "MongoDB", "Supabase", "Discord.js"],
    category: "Discord Bot",
    accentRgb: accentRgb["blue"],
    links: {
      "GitHub": `${github}/pingify`,
      "Web Dashboard": `https://pingify-bot.vercel.app`,
      "Add to Discord": "https://pingify-bot.vercel.app/invite"
    }
  },
  {
    index: 2,
    title: "Nightfang",
    description: "Nightfang is a verified Discord bot that effortlessly integrates moderation tools with customizable features, like ticketing, and giveaways redefining your server environment.",
    href: "https://nightfang.vercel.app",
    statusLabel: "Verified · 120+ servers",
    tags: ["Discord Bot", "Verified", "Moderation", "Ticketing"],
    tech: ["TypeScript", "MongoDB", "Supabase", "Express", "Discord.js"],
    category: "Discord Bot",
    accentRgb: accentRgb["gold"],
    links: {
      "Web App": `https://nightfang.vercel.app`,
      "Add to Discord": `https://nightfang.vercel.app/invite`
    }
  },
  {
    index: 3,
    title: "Crossroads",
    description: "The Life Sandbox: an AI-powered web app teaching real-world skills through branching comic panels and interactive scenarios. Learn by experiencing, not reading.",
    href: "https://crossroads-sandbox.vercel.app",
    statusLabel: "In Progress",
    tags: ["Next.js", "AI", "Team"],
    tech: ["TypeScript", "Next.js", "MongoDB", "Firebase", "AI Studio"],
    category: "Web App",
    accentRgb: accentRgb["green"],
    links: {
      "GitHub": `https://github.com/undefined-crew/crossroads`,
      "Live": "https://crossroads-sandbox.vercel.app"
    }
  },
  {
    index: 4,
    title: "web-discord-transcripts",
    description: "An NPM package for generating clean static HTML transcripts from Discord chats. Perfect for archiving, sharing, or displaying conversations outside of Discord.",
    href: "https://www.npmjs.com/package/web-discord-transcripts",
    statusLabel: "NPM package",
    tags: ["NPM", "OSS", "TypeScript", "Discord"],
    tech: ["TypeScript", "React", "CSS", "Node.js"],
    category: "Library",
    accentRgb: accentRgb["blueIce"],
    links: {
      "GitHub": `${github}/discord-transcripts`,
      "NPM": `https://www.npmjs.com/package/web-discord-transcripts`
    }
  }
]
