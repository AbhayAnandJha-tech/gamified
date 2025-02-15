import { FaInstagram, FaYoutube } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "TRAILER", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Nexus", href: "#nexus" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/AbhayAnandJha-tech",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/abhay_anand_jha/",
    icon: FaInstagram,
  },

  {
    href: "https://youtube.com",
    icon: FaYoutube,
  },
] as const;
