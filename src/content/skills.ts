/**
 * Skills, grouped the way a flying-shooting-grading job actually divides up.
 * No proficiency ratings: each capability is backed by concrete studio proof.
 */

export type CapabilityId = "camera" | "flying" | "cinema" | "post" | "studio";

export type Capability = {
  id: CapabilityId;
  index: string;
  title: string;
  summary: string;
  skills: string[];
  evidence: string[];
};

export const capabilities: Capability[] = [
  {
    id: "camera",
    index: "01",
    title: "Sony FX3, G Master Optics & Lighting",
    summary: "Full-frame RAW stills & 10-bit cinema craft honed on the camera counter and proven on set.",
    skills: [
      "Sony FX3 (ILME-FX3) primary bodies",
      "Sony FE 24–70mm f/2.8 GM II & 85mm f/1.4 GM",
      "Sony FE 35mm f/1.4 GM & 16–35mm f/2.8 GM",
      "Full-frame RAW stills & Real-Time Eye AF",
      "Godox AD600 / AD200 Pro off-camera strobes",
      "ND & circular polariser filtration",
      "Sensor care, AF micro-checks & calibration",
    ],
    evidence: [
      "1,000+ photographers advised on bodies and glass before launching the studio",
      "Dual CFexpress Type A / SD card slots for simultaneous recording on every film shoot",
      "Consistent skin tones across midday sun, twilight ghats and strobe-lit receptions",
    ],
  },
  {
    id: "flying",
    index: "02",
    title: "Drone Operations & Aerial Capture",
    summary: "DGCA-compliant flying that stays calm, repeatable and silky-smooth in changing wind.",
    skills: [
      "DJI Mavic 3 Pro (24 / 70 / 166mm triple-lens)",
      "Manual cinema orbits, reveals & top-downs",
      "Automated GPS waypoint & photogrammetry grids",
      "Digital Sky airspace & DGCA compliance",
      "Written pre-flight safety & wind protocol",
      "High-cycle battery & RF link discipline",
      "Blue-hour & twilight low-noise aerials",
    ],
    evidence: [
      "500+ incident-free flights logged across Uttar Pradesh and Bihar",
      "Repeatable 8-viewpoint monthly corridors for builders and developers",
      "12+ large sites mapped into geo-referenced 2D orthomosaics",
    ],
  },
  {
    id: "cinema",
    index: "03",
    title: "Hybrid Cinematography & Multi-Cam Direction",
    summary: "Directing couples, hoteliers and a 4-person camera crew so ground and sky tell one story.",
    skills: [
      "Sony FX3 4K up to 120p · 10-bit 4:2:2 S-Log3 & S-Cinetone",
      "DJI RS 3 Pro 3-axis gimbal movement",
      "Multi-photographer wedding & event direction",
      "Indexed shot lists & sun-path storyboards",
      "Wireless 32-bit float lavalier & ambient sound",
      "Day-to-night hyperlapse & construction timelapse",
    ],
    evidence: [
      "Leads up to 4 crew specialists (candid stills, gimbal cinema, lighting & data wrangling)",
      "Hotel, real-estate and pre-wedding films executed from one unified shot index",
      "Matched focal lengths and motion cadence between Sony FX3 and Mavic 3 Pro",
    ],
  },
  {
    id: "post",
    index: "04",
    title: "Editing, DaVinci Colour & Fast Delivery",
    summary: "In-house post-production that unifies Sony RAW, S-Log3 and DJI D-Log into one timeless grade.",
    skills: [
      "Adobe Lightroom Classic master catalogues",
      "DaVinci Resolve Studio colour management",
      "Adobe Premiere Pro 4K timelines",
      "Sony S-Log3 ↔ DJI D-Log M colour transforms",
      "9:16 Reels / Shorts & 16:9 cinema masters",
      "Indexed private client proofing galleries",
      "3-2-1 dual SSD + archive verification",
    ],
    evidence: [
      "Graded high-resolution stills delivered within 48 hours of wrap",
      "Edited 4K highlight and brand films delivered within 5–7 days",
      "Zero lost frames — cards are never wiped until two checksummed copies exist",
    ],
  },
  {
    id: "studio",
    index: "05",
    title: "Studio Operations, Crew & Licensing",
    summary: "Clear packages, transparent licensing and serial-tracked gear readiness on every booking.",
    skills: [
      "Location recce & local venue coordination",
      "Transparent package & crew scoping",
      "120+ serial-tracked bodies, lenses & batteries",
      "On-location data wrangling & tether preview",
      "Written commercial & print usage licensing",
      "Multi-district travel across UP, Bihar & NCR",
    ],
    evidence: [
      "85+ commercial, wedding and documentation projects delivered end-to-end",
      "Clear written deliverables and usage rights included on every invoice",
      "Trusted by hotels, builders, families and agencies across 12+ districts",
    ],
  },
];

/** Skills highlighted in the immersive landscape, each with a one-line proof point. */
export const landscapeSkills = [
  { label: "Sony FX3 craft", proof: "Full-frame RAW portraits, weddings and interiors on G Master primes." },
  { label: "Drone cinematography", proof: "500+ DGCA-compliant flights for hotels, builders, ghats and events." },
  { label: "Multi-photographer crew", proof: "Solo agility or a 4-person team covering candid stills, gimbal and strobes." },
  { label: "Mapping & orthomosaics", proof: "12+ sites flown on repeatable GPS grids for engineering & investor packs." },
  { label: "Location & strobe lighting", proof: "Godox AD600/AD200 modifiers balanced cleanly with golden-hour & twilight sky." },
  { label: "DaVinci colour parity", proof: "Sony S-Log3 and DJI D-Log M unified into one natural, filmic colour grade." },
  { label: "48-hour delivery", proof: "Dual-slot safety on set, graded stills in 48h and 4K + 9:16 films inside the week." },
] as const;
