/**
 * Identity, contact details, social links and navigation for RANJEET.
 *
 * A social with an empty `href` is shown as "link coming soon" rather than linking elsewhere.
 */

export const site = {
  name: "RANJEET",
  firstName: "RANJEET",
  role: "Sony FX3 Photographer & Aerial Cinematographer",
  specialism: "Sony FX3 Portraits, Weddings, Aerial Films & Mapping",
  location: "Bahag 1, West Chhapar, Betthia, Bihar, India",
  address: {
    street: "Bahag 1, West Chhapar",
    city: "Betthia",
    region: "Bihar",
    country: "IN",
  },
  email: "rg3917289@gmail.com",
  phone: {
    display: "+91 76547 18165",
    href: "tel:+917654718165",
    /** digits only, country code first: used for wa.me links */
    e164: "917654718165",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "RANJEET is a Sony FX3 photographer and DGCA-compliant drone cinematographer in Betthia, Bihar — portraits, weddings, hotels, aerial films and site mapping shot and graded in-house with his specialist crew.",
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
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ranjeet_gupta_94?srtk=MWZ0YjVwZnY3ejY3aA%3D%3D&utm_source=qr", handle: "@ranjeet_gupta_94" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/share/1BxaxkDfiy/", handle: "Facebook page" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@gkp_drone", handle: "@gkp_drone" },
  { id: "whatsapp", label: "WhatsApp", href: `https://wa.me/${site.phone.e164}`, handle: site.phone.display },
];

export const LINK_PENDING = "Link coming soon";

/** The single, approved résumé. Replace the file in /public/resume to update it. */
export const resume = {
  href: "/resume/RANJEET-Drone-Photographer-CV.pdf",
  fileName: "RANJEET-Drone-Photographer-CV.pdf",
  format: "PDF",
  pages: 1,
  size: "5.3 KB",
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
  { label: "About", href: "/", description: "Who I am, my Sony FX3 rig, frames and shoot crew." },
  { label: "Frames", href: "/frames", description: "Contact sheet frames, master archive index, Sony FX3 kit and photographers." },
  { label: "Experience", href: "/experience", description: "Aerial & Sony FX3 commissions, camera specialism and studio metrics." },
  { label: "Projects", href: "/projects", description: "Five case studies: Sony FX3 photography, aerial film, mapping, kit systems and site docs." },
  { label: "Skills", href: "/skills", description: "Sony FX3 optics, drone flying, cinematography and DaVinci colour grading." },
  { label: "Education", href: "/education", description: "DGCA pilot certification, photography study and continuous practice." },
  { label: "Contact", href: "/contact", description: "Book RANJEET solo or with the full multi-photographer shoot crew." },
] as const;

/** Secondary destinations shown in the menu's top bar. */
export const quickLinks = [
  { label: "Frames & Index", href: "/frames" },
  { label: "Sony FX3 Rig", href: "/#sony-fx3" },
  { label: "Photographers", href: "/#photographers" },
  { label: "Case studies", href: "/projects#case-studies" },
] as const;
