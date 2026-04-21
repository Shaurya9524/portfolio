import { discord, discordServer, github, linkedin, twitter } from "@/config/constants"
import { DiscordIcon, LinkedInIcon, XIcon } from "@/components/ui/Icons"

export const footerSocials = [
  { href: twitter, label: "X (Twitter)", Icon: XIcon },
  { href: linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: discord, label: "Discord", Icon: DiscordIcon },
]

export const footerLinks = [
  {
    category: "Hire Me",
    links: [
      { label: "Fiverr", href: "https://fiverr.com/shaurya9524", target: "_blank" },
      { label: "Upwork", href: "https://upwork.com/freelancers/~01379ab651cba1f838", target: "_blank" },
      { label: "Freelancer", href: "https://freelancer.com/u/ShadowOP1575", target: "_blank" },
    ]
  },
  {
    category: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
    ]
  },
  {
    category: "Connect",
    links: [
      { label: "Contact", href: "/#contact" },
      { label: "GitHub", href: "https://github.com/shaurya9524", target: "_blank" },
      { label: "Dev.to", href: "https://dev.to/shaurya9524", target: "_blank" },
    ]
  },
  {
    category: "Other",
    links: [
      { label: "Source Code", href: `${github}/portfolio`, target: "_blank" },
      { label: "Community", href: discordServer, target: "_blank" },
    ]
  }
]
