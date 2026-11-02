/**
 * About section content for RANJEET.
 *
 * The five "links of the chain" represent the five indexed stages of a shoot:
 * 01 Plan, 02 Fly, 03 Frame, 04 Post, 05 Deliver.
 * Portrait files are transparent WebP cutouts featuring RANJEET with his camera
 * and DJI aerial fleet. The active camera profile is labelled Sony FX3.
 */

export type PortraitId = "operations" | "office" | "suit" | "field" | "casual";

export type Domain = {
  id: string;
  index: string;
  stage: string;
  title: string;
  points: string[];
  portrait: PortraitId;
};

export const portraits: Record<
  PortraitId,
  { src: string; width: number; height: number; alt: string }
> = {
  suit: {
    src: "/images/portraits/suit.webp",
    width: 863,
    height: 1625,
    alt: "RANJEET in a charcoal blazer holding his camera with a 24–70mm G Master lens",
  },
  operations: {
    src: "/images/portraits/operations.webp",
    width: 739,
    height: 1527,
    alt: "RANJEET in a field jacket holding his drone remote controller on location",
  },
  office: {
    src: "/images/portraits/office.webp",
    width: 778,
    height: 1512,
    alt: "RANJEET in a crisp white shirt holding his camera with an 85mm G Master portrait prime",
  },
  field: {
    src: "/images/portraits/field.webp",
    width: 681,
    height: 1369,
    alt: "RANJEET holding a DJI camera drone ready for pre-flight checks",
  },
  casual: {
    src: "/images/portraits/casual.webp",
    width: 636,
    height: 1757,
    alt: "RANJEET in smart-casual studio attire holding his camera",
  },
};

/**
 * The "field deck" that stands to the right of the portrait on the About stage: what a shoot
 * produces, the optical/flight readouts behind it, and booking guidance.
 */
export const workDeck = {
  label: "Rig & Dispatch · IDX 01",
  title: "What I shoot",
  services: [
    { id: "stills", title: "Sony FX3 stills", text: "Full-frame portraits, weddings, ads" },
    { id: "films", title: "Aerial & 4K film", text: "S-Log3 ground + Mavic reveals" },
    { id: "mapping", title: "Mapping & grids", text: "Orthomosaics, monthly sites" },
    { id: "crew", title: "Full shoot crew", text: "2nd shooter, gimbal & strobes" },
  ] as const,
  note: {
    hand: "Book 10 days ahead",
    fine: "Solo or 4-person crew · UP & Bihar",
  },
  hud: {
    label: "Active rig",
    rec: "FX3 · 10-BIT",
    caption: "Sony FX3 + FE 24–70 GM II + Mavic 3 Pro",
    readouts: [
      { id: "res", label: "STILLS", value: "12.1", unit: "MP" },
      { id: "fps", label: "4K", value: "120", unit: "p" },
      { id: "alt", label: "ALT", value: "92", unit: "m" },
      { id: "iso", label: "ISO", value: "100", unit: "" },
    ],
    /* link and battery strength, out of four bars */
    bars: [
      { id: "link", label: "CFexp-A", value: 4 },
      { id: "battery", label: "FZ100", value: 4 },
    ],
  },
} as const;

/** The five indexed stages of the work, each switching RANJEET's portrait on stage. */
export const domains: Domain[] = [
  {
    id: "plan",
    index: "01",
    stage: "Plan",
    title: "Pre-production",
    points: [
      "Location recce, sun-path & lens plan",
      "Airspace, DGCA permit & weather checks",
      "Indexed shot list signed off with client",
    ],
    portrait: "casual",
  },
  {
    id: "fly",
    index: "02",
    stage: "Fly",
    title: "Drone operations",
    points: [
      "DGCA-compliant Mavic 3 Pro cinema passes",
      "Repeatable GPS grids for mapping & sites",
      "Written pre-flight checklist every take-off",
    ],
    portrait: "field",
  },
  {
    id: "frame",
    index: "03",
    stage: "Frame",
    title: "Sony FX3 craft",
    points: [
      "Sony FX3 full-frame stills & 4K 10-bit",
      "FE 85mm f/1.4 & 24–70mm f/2.8 G Master glass",
      "Second shooter & lighting crew when needed",
    ],
    portrait: "office",
  },
  {
    id: "post",
    index: "04",
    stage: "Post",
    title: "Edit & colour",
    points: [
      "Uncompressed RAW stills in Lightroom Classic",
      "Sony S-Log3 & D-Log matched in DaVinci Resolve",
      "4K horizontal & 9:16 reels cut in Premiere Pro",
    ],
    portrait: "operations",
  },
  {
    id: "deliver",
    index: "05",
    stage: "Deliver",
    title: "Archive & delivery",
    points: [
      "Dual-card recording + NVMe backup before leaving set",
      "Graded stills in 48h, edited film inside 7 days",
      "Indexed proofing gallery & written usage license",
    ],
    portrait: "suit",
  },
];

/** "Why choose me?": five reasons, each backed by how RANJEET and his studio crew work. */
export const whyChooseMe = {
  eyebrow: "Index 05 · Why Book RANJEET",
  statement: ["Sony FX3 in hand, drone overhead,", "one colour grade across all."],
  body:
    "Ground portraits on the Sony FX3, aerial cinema overhead, and a trusted team of second shooters and lighting specialists when the scale demands it — all graded under one roof.",
  corners: { left: ["Sony FX3", "+ Aerial"], right: ["Fly", "Frame", "Grade", "Deliver"] },
  reasons: [
    {
      id: "aerial",
      title: "Sony FX3 + Drone in one pass",
      text: "A single booking brings full-frame ground photography, 10-bit 4K gimbal motion and permitted aerial reveals that cut seamlessly together.",
    },
    {
      id: "camera",
      title: "G Master optics & true skin tones",
      text: "Shot on Sony FE 85mm f/1.4 GM, 24–70mm f/2.8 GM II and 35mm f/1.4 GM primes with off-camera Godox strobes for clean, natural portraits day or night.",
    },
    {
      id: "crew",
      title: "Scalable crew of photographers",
      text: "Book RANJEET solo for agile portrait and property sessions, or bring the full 4-person crew — candid photographer, gimbal cinematographer and lighting tech — for weddings and large campaigns.",
    },
    {
      id: "safety",
      title: "Permitted flying & dual-slot safety",
      text: "DGCA-compliant flights paired with instant dual-card recording on the FX3 and on-location SSD verification before anyone leaves the venue.",
    },
    {
      id: "delivery",
      title: "48-hour stills & indexed galleries",
      text: "Preview and graded still sets delivered within 48 hours, followed by 4K horizontal films and 9:16 social cutdowns within the week.",
    },
  ],
  stats: [
    { value: 500, suffix: "+", label: "Flights logged" },
    { value: 85, suffix: "+", label: "Commissions delivered" },
    { symbol: "4K", label: "Sony FX3 cinema" },
    { symbol: "48h", label: "Stills turnaround" },
  ],
} as const;

export const aboutCopy = {
  headline: ["Sony FX3 & sky.", "Framing your story."],
  lead:
    "I'm RANJEET — a Sony FX3 photographer and DGCA-certified aerial cinematographer in Betthia. From intimate bridal portraits and hotel campaigns to sweeping riverfront aerials, I shoot, fly and grade every frame for clarity and permanence.",
  body:
    "Years advising photographers at the camera counter taught me optics from the inside out; hundreds of flights across Uttar Pradesh and Bihar taught me light, timing and discipline. Today I shoot handheld on the Sony FX3 with G Master glass, fly DJI Mavic cinema drones overhead, and lead a tight crew of collaborating candid photographers, gimbal operators and lighting specialists for weddings, resorts, builders and brands.",
  facts: [
    { value: "Sony FX3", label: "Full-frame stills + 4K 10-bit primary rig" },
    { value: "500+ flights", label: "DGCA-compliant aerial operations" },
    { value: "Solo or Crew", label: "1 to 4 specialists scaled to your shoot" },
  ],
} as const;
