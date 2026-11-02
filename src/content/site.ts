/**
 * Identity, contact details, social links and navigation for Ranjit.
 *
 * A social with an empty `href` is shown as "link coming soon" rather than linking elsewhere.
 */

export const site = {
  name: "Ranjit",
  firstName: "Ranjit",
  role: "Sony α7 IV Photographer & Aerial Cinematographer",
  specialism: "Sony M4 Portraits, Weddings, Aerial Films & Mapping",
  location: "Gorakhpur, Uttar Pradesh, India",
  email: "chauhanomveer460@gmail.com",
  phone: {
    display: "+91 80093 69410",
    href: "tel:+918009369410",
    /** digits only, country code first: used for wa.me links */
    e164: "918009369410",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Ranjit is a Sony Alpha a7 IV (M4) photographer and DGCA-compliant drone cinematographer in Gorakhpur, Uttar Pradesh — portraits, weddings, hotels, aerial films and site mapping shot and graded in-house with his specialist crew.",
} as const;

export type SocialId = "instagram" | "facebook" | "youtube" | "whatsapp";

export type Social = {
  id: SocialId;
  label: string;
  href: string;
  handle?: string;
};

/** Social profiles shown in the footer, the menu and the contact page. */
export const socials: Social[] = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/gkp_drone", handle: "@gkp_drone" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/share/1BxaxkDfiy/", handle: "Facebook page" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@gkp_drone", handle: "@gkp_drone" },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/918009369410", handle: "+91 80093 69410" },
];

export const LINK_PENDING = "Link coming soon";

/** The single, approved résumé. Replace the file in /public/resume to update it. */
export const resume = {
  href: "/resume/Ranjit-Drone-Photographer-CV.pdf",
  fileName: "Ranjit-Drone-Photographer-CV.pdf",
  format: "PDF",
  pages: 1,
  size: "7 KB",
  updated: "Nov 2026",
  thumbnail: "/images/ui/cv-page.jpg",
} as const;

export type MenuPreviewKind =
  | "about"
  | "frames"
  | "projects"
  | "skills"
  | "education"
  | "contact"
  | "resume";

export type MenuItem = {
  index: string;
  label: string;
  href: string;
  preview: MenuPreviewKind;
  /** When set, the row downloads this file (and still opens its page). */
  download?: string;
};

/** Full-screen menu destinations, each opening its own page. */
export const menuItems: MenuItem[] = [
  { index: "01", label: "About Me", href: "/", preview: "about" },
  { index: "02", label: "Frames & Index", href: "/frames", preview: "frames" },
  { index: "03", label: "Projects", href: "/projects", preview: "projects" },
  { index: "04", label: "Skills & Kit", href: "/skills", preview: "skills" },
  { index: "05", label: "Education", href: "/education", preview: "education" },
  { index: "06", label: "Contact", href: "/contact", preview: "contact" },
  { index: "07", label: "Download Resume", href: "/resume", preview: "resume", download: resume.href },
];

/** Page navigation in the header bar, in reading order. */
export const pageLinks = [
  { label: "About", href: "/", description: "Who I am, my Sony α7 IV rig, frames and shoot crew." },
  { label: "Frames", href: "/frames", description: "Contact sheet frames, master archive index, Sony M4 kit and photographers." },
  { label: "Experience", href: "/experience", description: "Aerial & Sony M4 commissions, camera specialism and studio metrics." },
  { label: "Projects", href: "/projects", description: "Five case studies: Sony M4 photography, aerial film, mapping, kit systems and site docs." },
  { label: "Skills", href: "/skills", description: "Sony α7 IV optics, drone flying, cinematography and DaVinci colour grading." },
  { label: "Education", href: "/education", description: "DGCA pilot certification, photography study and continuous practice." },
  { label: "Contact", href: "/contact", description: "Book Ranjit solo or with the full multi-photographer shoot crew." },
] as const;

/** Secondary destinations shown in the menu's top bar. */
export const quickLinks = [
  { label: "Frames & Index", href: "/frames" },
  { label: "Sony α7 IV Rig", href: "/#sony-m4" },
  { label: "Photographers", href: "/#photographers" },
  { label: "Case studies", href: "/projects#case-studies" },
] as const;
