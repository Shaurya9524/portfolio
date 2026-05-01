import { PostsByYear } from "@/types/blog"

export const blogData: PostsByYear[] = [
  {
    year: "2026",
    posts: [
      {
        slug: "building-pingify",
        date: "01 May, 2026",
        tag: "Project",
        title: "Building a Real-Time Notification System Discord Bot",
        desc: "How I thought about and approached building Pingify, a Discord notification bot that integrates YouTube, Reddit, Twitch, and more into a single pipeline, and the experiences I had throughout the development process.",
        tags: ["Devlog", "Discord", "TypeScript"],
        readTime: "8 min read",
      }
    ]
  }
]
