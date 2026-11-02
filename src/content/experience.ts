/**
 * Professional experience for Ranjit.
 */

export type Kpi = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Optional grouping for thousands, e.g. 50000 -> "50,000". */
  group?: boolean;
  icon: "clock" | "database" | "chart" | "users" | "funnel" | "list" | "gear" | "presentation";
};

export type Role = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  startISO: string;
  endISO: string;
  context: string;
  achievements: string[];
  accomplishment: string;
  kpis: Kpi[];
  tools: string[];
  /** Studio / employer mark. */
  logo: { src: string; width: number; height: number };
};

export const experience: Role[] = [
  {
    id: "aerial-practice",
    company: "Ranjit Visuals — Sony M4 & Aerial Studio",
    role: "Lead Photographer (Sony α7 IV) & Aerial Cinematographer",
    location: "Gorakhpur, Uttar Pradesh",
    start: "2021",
    end: "Present",
    startISO: "2021-01",
    endISO: "2026-11",
    context:
      "Full-frame Sony Alpha a7 IV photography, multi-camera wedding & hospitality crews, DGCA-compliant aerial films and monthly site documentation.",
    achievements: [
      "Directed and shot 85+ commissions combining Sony Alpha a7 IV (M4) ground photography (portraits, weddings, hotel interiors, heritage campaigns) with Mavic 3 Pro aerial cinema across Uttar Pradesh and Bihar.",
      "Logged 500+ incident-free drone flights behind a written pre-flight checklist and assembled an on-call 4-specialist crew (candid Sony M4 shooter, RS 3 Pro gimbal operator and lighting/data tech) for full-scale events.",
      "Engineered a colour-managed post pipeline matching Sony 14-bit RAW / 10-bit S-Log3 with DJI D-Log M in DaVinci Resolve and Lightroom Classic — delivering graded stills in 48 hours and 4K + 9:16 films within 7 days.",
    ],
    accomplishment:
      "One creative lead holding both the Sony α7 IV and the flight controller, backed by a trusted crew when scale demands it — so every frame shares one unmistakable look.",
    kpis: [
      { value: 500, suffix: "+", label: "Flights logged", icon: "clock" },
      { value: 85, suffix: "+", label: "Commissions delivered", icon: "list" },
      { value: 48, suffix: "h", label: "Graded stills turnaround", icon: "gear" },
      { value: 4, label: "Specialist shoot crew roster", icon: "users" },
    ],
    tools: [
      "Sony Alpha a7 IV (M4)",
      "FE 24–70 & 85mm GM",
      "DJI Mavic 3 Pro",
      "Lightroom Classic",
      "DaVinci Resolve",
      "Premiere Pro",
    ],
    logo: { src: "/images/logos/aerial-practice.webp", width: 276, height: 225 },
  },
  {
    id: "camera-specialist",
    company: "Camera House & Studio Counter",
    role: "Camera Specialist — Sony Full-Frame, Optics & Studio",
    location: "Gorakhpur, Uttar Pradesh",
    start: "2018",
    end: "2021",
    startISO: "2018-01",
    endISO: "2021-12",
    context:
      "Camera retail, Sony Alpha & DSLR consultation, lens servicing and hands-on studio lighting support.",
    achievements: [
      "Advised 1,000+ working wedding, portrait and event photographers across eastern UP on full-frame bodies, fast primes, strobes and memory workflows tailored to real shooting conditions.",
      "Inspected, sensor-cleaned and calibrated mirrorless and DSLR kits — instituting a multi-point pre-dispatch checklist that 100% of rental bodies and lenses passed before leaving the counter.",
      "Worked on 25+ studio and location productions as second shooter, off-camera strobe technician, gimbal assistant and tethered capture wrangler.",
    ],
    accomplishment:
      "Built deep mechanical fluency with Sony E-mount bodies, G Master glass and location strobes — knowing how to extract clean skin tones and reliable focus under pressure.",
    kpis: [
      { value: 1000, suffix: "+", label: "Photographers & buyers advised", icon: "users", group: true },
      { value: 3, label: "Years in optics & studio support", icon: "clock" },
      { value: 100, suffix: "%", label: "Kits passing pre-shoot checklist", icon: "list" },
      { value: 25, suffix: "+", label: "Productions assisted on set", icon: "presentation" },
    ],
    tools: ["Sony E-Mount Systems", "Optics Calibration", "Godox Studio Lighting", "3-Axis Gimbals", "Tethered RAW"],
    logo: { src: "/images/logos/camera-house.webp", width: 324, height: 111 },
  },
];

/** The indexed pipeline behind every commission, from recce to hand-over. */
export const flightPipeline = [
  { id: "recce", title: "01 · Recce & permits", detail: "Sun path, lenses & airspace", note: "Indexed shot list agreed" },
  { id: "fly", title: "02 · Air & Sony M4", detail: "33MP RAW + 4K 10-bit + Drone", note: "Solo or 4-person crew" },
  { id: "backup", title: "03 · Dual-slot backup", detail: "CFexpress + SD + NVMe SSD", note: "Verified before leaving set" },
  { id: "edit", title: "04 · Cull & cut", detail: "Lightroom + Premiere Pro", note: "Contact sheet indexed" },
  { id: "grade", title: "05 · Unified grade", detail: "DaVinci Resolve Studio", note: "Sony S-Log3 ↔ DJI D-Log" },
  { id: "deliver", title: "06 · Gallery & license", detail: "Print TIFF, web, 16:9 & 9:16", note: "48h stills · 5–7d film" },
] as const;

/** What keeps the kit reliable: three habits, from the equipment log. */
export const kitFunnel = [
  { label: "Pre-shoot Sony M4 & drone checklist", value: "Every booking" },
  { label: "FZ100 & flight battery cycle log", value: "Serial tracked" },
  { label: "Dual-slot + SSD checksummed on site", value: "3 copies" },
] as const;
