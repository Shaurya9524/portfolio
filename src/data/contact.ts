import { discord, email, github, linkedin } from "@/config/constants"
import { DiscordIcon, EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/Icons"

export const contactLinks = [
  {
    href: `mailto:${email}`,
    label: "Email",
    value: email,
    Icon: EmailIcon
  },
  {
    href: github,
    label: "GitHub",
    value: "shaurya9524",
    target: "_blank",
    Icon: GitHubIcon
  },
  {
    href: linkedin,
    label: "LinkedIn",
    value: "shaurya-chauhan-119b3526b",
    target: "_blank",
    Icon: LinkedInIcon
  },
  {
    href: discord,
    label: "Discord",
    value: "shaurya_chauhan",
    target: "_blank",
    Icon: DiscordIcon
  },
]
