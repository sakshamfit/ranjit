/**
 * Curated photography frames (4 balanced, non-duplicate 3:2 plates), Contact Sheet archive index,
 * Sony FX3 kit profile, collaborating shoot crew ("photographers") and packages.
 */

export type FrameCategory = "all" | "weddings" | "portraits" | "heritage" | "aerial";

export const frameCategories: { id: FrameCategory; label: string; code: string }[] = [
  { id: "all", label: "All Plates", code: "IDX·ALL" },
  { id: "weddings", label: "Weddings", code: "IDX·01" },
  { id: "portraits", label: "Portraits", code: "IDX·02" },
  { id: "heritage", label: "Heritage", code: "IDX·03" },
  { id: "aerial", label: "Aerial", code: "IDX·04" },
];

export type FrameEntry = {
  index: string;
  code: string;
  title: string;
  category: Exclude<FrameCategory, "all">;
  categoryLabel: string;
  location: string;
  camera: string;
  lens: string;
  focal: string;
  aperture: string;
  shutter: string;
  iso: string;
  profile: string;
  src: string;
  width: number;
  height: number;
  story: string;
  deliverable: string;
};

/**
 * Four balanced 3:2 contact-sheet plates — zero duplication with the Hero stage,
 * the Sony FX3 viewfinder portrait, or the Why Choose Me print frame.
 */
export const framesArchive: FrameEntry[] = [
  {
    index: "001",
    code: "RJT-FX3-001",
    title: "Sandstone Steps at Golden Hour",
    category: "weddings",
    categoryLabel: "Weddings & Couples",
    location: "Riverfront Heritage Steps, UP",
    camera: "Sony FX3 (ILME-FX3)",
    lens: "FE 85mm f/1.4 GM",
    focal: "85mm",
    aperture: "f/1.6",
    shutter: "1/640s",
    iso: "ISO 100",
    profile: "Full-frame RAW",
    src: "/images/frames/frame-01-bridal.jpg",
    width: 1200,
    height: 800,
    story:
      "Shot twenty minutes before sunset with Real-Time Eye AF locked through movement on the sandstone steps, holding warm highlights and intricate zari texture.",
    deliverable: "Colour-graded print TIFF + client gallery + 9:16 reel cut",
  },
  {
    index: "002",
    code: "RJT-FX3-002",
    title: "Courtyard Chiaroscuro & Sarangi",
    category: "portraits",
    categoryLabel: "Editorial Portrait",
    location: "Old Quarter Haveli, Eastern UP",
    camera: "Sony FX3 (ILME-FX3)",
    lens: "FE 50mm f/1.2 GM",
    focal: "50mm",
    aperture: "f/1.4",
    shutter: "1/400s",
    iso: "ISO 125",
    profile: "Full-frame RAW",
    src: "/images/frames/frame-02-portrait.jpg",
    width: 1200,
    height: 800,
    story:
      "Single carved courtyard window as key light — relying on the Sony FX3 sensor's dynamic range to hold crisp skin and beard detail against deep shadow.",
    deliverable: "Editorial monograph plate + calibrated sRGB & AdobeRGB masters",
  },
  {
    index: "003",
    code: "RJT-FX3-003",
    title: "Blue-Hour Diyas Along the Ghat",
    category: "heritage",
    categoryLabel: "Heritage & Architecture",
    location: "Riverfront Ghats, Uttar Pradesh",
    camera: "Sony FX3 (ILME-FX3)",
    lens: "FE 24–70mm f/2.8 GM II",
    focal: "28mm",
    aperture: "f/4.0",
    shutter: "1/125s",
    iso: "ISO 400",
    profile: "Active Mode stabilisation · RAW",
    src: "/images/frames/frame-03-heritage.jpg",
    width: 1200,
    height: 800,
    story:
      "Captured handheld during the twelve-minute twilight window where deep cobalt sky balances brass oil lamps along the water without clipping the flames.",
    deliverable: "Hospitality & tourism campaign visual + wide-format archival print",
  },
  {
    index: "004",
    code: "RJT-AIR-004",
    title: "Sunrise Mist Over Terai Farmland",
    category: "aerial",
    categoryLabel: "Aerial & Commercial",
    location: "Gorakhpur Outskirts, UP",
    camera: "DJI Mavic 3 Pro",
    lens: "24mm Hasselblad + ND16",
    focal: "24mm",
    aperture: "f/5.6",
    shutter: "1/240s",
    iso: "ISO 100",
    profile: "D-Log M Matched to Sony S-Log3",
    src: "/images/projects/hero-aerial.jpg",
    width: 1600,
    height: 896,
    story:
      "Flown at 06:15 AM inside permitted airspace with an ND16 filter and graded in DaVinci Resolve to match ground-level Sony FX3 sequences.",
    deliverable: "Real-estate & brand brochure stills + 4K horizontal & vertical reveal",
  },
];

export const sonyFX3Profile = {
  eyebrow: "Primary Camera System · Index 02",
  badge: "SONY FX3 · ILME-FX3",
  headline: ["Sony FX3 in hand.", "Air and ground in one grade."],
  lead:
    "Every ground portrait, wedding ritual, architectural interior and handheld film sequence starts on the Sony FX3 — paired with G Master primes and zooms, then colour-matched frame-for-frame with the drone.",
  portrait: {
    src: "/images/frames/ranjit-sony-m4.jpg",
    width: 880,
    height: 1100,
    alt: "RANJEET holding his Sony FX3 camera in a sandstone courtyard at golden hour",
  },
  specs: [
    { code: "SEN", label: "Full-frame sensor", value: "12.1 MP", detail: "Full-frame Exmor R BSI CMOS" },
    { code: "VID", label: "Cinema recording", value: "4K 120p", detail: "10-bit 4:2:2 S-Log3 & S-Cinetone" },
    { code: "DRG", label: "Dynamic range", value: "15+ stops", detail: "Clean highlights & twilight shadows" },
    { code: "AFX", label: "Autofocus system", value: "Eye AF", detail: "Fast Hybrid AF with real-time tracking" },
  ],
  lensIndex: [
    {
      index: "01",
      model: "Sony FX3 (ILME-FX3)",
      role: "Primary Cinema Body",
      focal: "Full-Frame 35mm",
      use: "Dual CFexpress Type A / SD card slots for simultaneous recording and on-set backup",
    },
    {
      index: "02",
      model: "Sony FE 24–70mm f/2.8 GM II",
      role: "Workhorse Campaign Zoom",
      focal: "24–70mm · f/2.8",
      use: "Events, environmental portraits, hotel interiors and fast-moving rituals",
    },
    {
      index: "03",
      model: "Sony FE 85mm f/1.4 GM",
      role: "Signature Portrait Prime",
      focal: "85mm · f/1.4",
      use: "Couples, bridal close-ups and editorial portraits with natural separation",
    },
    {
      index: "04",
      model: "Sony FE 35mm f/1.4 GM & 16–35mm GM",
      role: "Documentary & Architecture",
      focal: "16–35mm · f/1.4–2.8",
      use: "Candid storytelling, architecture verticals, ghats and gimbal tracking shots",
    },
    {
      index: "05",
      model: "DJI Mavic 3 Pro + RS 3 Pro Gimbal",
      role: "Aerial & Stabilised Motion",
      focal: "24 / 70 / 166mm Air",
      use: "DGCA-compliant aerial reveals colour-matched to Sony S-Log3 in DaVinci Resolve",
    },
  ],
} as const;

export type PhotographerCrewMember = {
  index: string;
  name: string;
  role: string;
  badge: string;
  gear: string;
  focus: string;
  availability: string;
};

export const studioPhotographers: PhotographerCrewMember[] = [
  {
    index: "01",
    name: "RANJEET",
    role: "Lead Photographer & Aerial Director",
    badge: "Founder · Lead Lens",
    gear: "Sony FX3 · 85mm & 24–70mm GM · Mavic 3 Pro",
    focus:
      "Directs every shoot, captures all hero portraits, couple frames and permitted drone passes, and personally grades the final still set and film.",
    availability: "On every single booking",
  },
  {
    index: "02",
    name: "Aarav Verma",
    role: "Second Photographer — Candid & Rituals",
    badge: "Candid Stills",
    gear: "Sony FX3 · FE 35mm f/1.4 GM & 70–200mm GM",
    focus:
      "Works silently alongside RANJEET on weddings and large gatherings so family reactions and unscripted moments are caught from a second angle.",
    availability: "Weddings & multi-stage events",
  },
  {
    index: "03",
    name: "Vikram Nishad",
    role: "Ground Cinematographer & Gimbal Specialist",
    badge: "Cinema & Audio",
    gear: "Sony Full-Frame 10-Bit Rig · DJI RS 3 Pro · Wireless Lavs",
    focus:
      "Handles stabilised ground tracking shots, vows and ambient audio while RANJEET flies aerials or shoots portraits — zero missed beats.",
    availability: "Film campaigns & wedding features",
  },
  {
    index: "04",
    name: "Rohan Sharma",
    role: "Lighting Tech, Drone Spotter & Wrangler",
    badge: "Light & Backup",
    gear: "Godox AD600/AD200 Pro · Octaboxes · Dual NVMe SSDs",
    focus:
      "Shapes off-camera strobe and modifier setups for night receptions, maintains visual line-of-sight during flights, and backs up cards on location.",
    availability: "Commercial, night & multi-day shoots",
  },
];

export type ShootPackage = {
  index: string;
  code: string;
  title: string;
  idealFor: string;
  crew: string;
  kit: string;
  deliverables: string[];
  turnaround: string;
};

export const shootPackages: ShootPackage[] = [
  {
    index: "01",
    code: "PKG·PORTRAIT",
    title: "Sony FX3 Portrait, Couple & Editorial Session",
    idealFor: "Pre-wedding couples, personal branding, artists, models & family portraits",
    crew: "RANJEET (Lead Photographer)",
    kit: "Sony FX3 + 85mm f/1.4 GM + 35mm GM + Optional Golden-Hour Drone",
    deliverables: [
      "50+ colour-graded high-resolution stills (print + social exports)",
      "Online private proofing & download gallery",
      "Optional 30–45s vertical 9:16 motion reel",
    ],
    turnaround: "Graded stills in 48 hours",
  },
  {
    index: "02",
    code: "PKG·WEDDING",
    title: "Full Wedding, Haldi & Multi-Day Celebration",
    idealFor: "Intimate & grand weddings across Gorakhpur, UP & Bihar",
    crew: "RANJEET + Candid Photographer + Gimbal Cinematographer + Lighting Assistant",
    kit: "Sony FX3 cinema body + candid stills camera + G Master primes + Mavic 3 Pro + Off-camera strobes",
    deliverables: [
      "450+ culled, retouched & colour-graded photographs",
      "4–6 min 4K cinematic highlight film + 3 vertical reels",
      "Full ceremony documentary edit & archival dual-backup drive",
    ],
    turnaround: "Preview set in 48h · Full gallery in 7–10 days",
  },
  {
    index: "03",
    code: "PKG·BRAND",
    title: "Hotels, Real Estate & Commercial Brand Film",
    idealFor: "Boutique hotels, resorts, builders, schools, hospitals & retail launches",
    crew: "RANJEET + Gimbal / Lighting Specialist",
    kit: "Sony FX3 (16–35mm & 24–70mm GM II) + DJI Mavic 3 Pro + S-Log3 Resolve Pipeline",
    deliverables: [
      "60–90s 4K horizontal brand film + three 9:16 ad cutdowns",
      "35+ architectural, interior & aerial hero photographs",
      "Written commercial usage license included",
    ],
    turnaround: "Stills in 48h · Edited film within 5–7 days",
  },
  {
    index: "04",
    code: "PKG·MAPPING",
    title: "Aerial Mapping & Monthly Site Documentation",
    idealFor: "Infrastructure corridors, construction developers, solar parks & farmland",
    crew: "RANJEET (RPC Pilot & Documentation Photographer)",
    kit: "GPS Waypoint Mapping Drone + Sony FX3 Ground Milestone Stills",
    deliverables: [
      "Repeatable 8-angle aerial & ground progress set each visit",
      "High-resolution stitched 2D orthomosaic & annotated PDF report",
      "Month-on-month visual overlay for investor updates",
    ],
    turnaround: "48–72 hours after each site visit",
  },
];

export const homeChapters = [
  { index: "01", label: "Profile & Stage", href: "#about" },
  { index: "02", label: "Sony FX3 Rig", href: "#sony-fx3" },
  { index: "03", label: "Selected Frames", href: "#frames" },
  { index: "04", label: "Photographers & Packages", href: "#photographers" },
  { index: "05", label: "Why Book RANJEET", href: "#why-choose-me" },
] as const;
