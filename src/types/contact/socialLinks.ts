import { Linkedin, Github, Twitter } from "lucide-react";
import { SocialProps } from "./socialProps";

export const socialLinks: SocialProps[] = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/francesco-villani-b7972b243/",
    color: "hover:text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/fra65",
    color: "hover:text-gray-800",
  },
  // {
  //   icon: Twitter,
  //   label: "Twitter",
  //   href: "#",
  //   color: "hover:text-blue-400",
  // },
]