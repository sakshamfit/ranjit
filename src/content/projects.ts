/**
 * Case studies for Ranjit's Sony α7 IV photography, aerial cinema and studio systems.
 *
 * Interactive figures used in the case pages live in /src/content/demo and are always
 * labelled on screen as demonstration data.
 */

export type ResultKind = "delivered" | "model" | "simulated" | "modelled";

export type ProjectCategory = "stills" | "aerial" | "mapping" | "systems";

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All index (05)" },
  { id: "stills", label: "Sony M4 Photography" },
  { id: "aerial", label: "Aerial Film" },
  { id: "mapping", label: "Mapping & Docs" },
  { id: "systems", label: "Studio Systems" },
];

export type ProjectResult = {
  value: string;
  label: string;
  kind: ResultKind;
  note?: string;
};

export type Project = {
  slug: string;
  index: string;
  code: string;
  camera: string;
  title: string;
  shortTitle: string;
  oneLiner: string;
  tools: string[];
  tags: string[];
  challenge: string;
  objective: string;
  approach: { title: string; text: string }[];
  capabilities: string[];
  results: ProjectResult[];
  relevance: string;
  /** Card image. */
  thumbnail: { src: string; width: number; height: number };
  /** One-sentence card summary. */
  cardSummary: string;
  cardTags: string[];
  categories: ProjectCategory[];
};

export const resultKindLabel: Record<ResultKind, string> = {
  delivered: "Shot and delivered",
  model: "From the planning model",
  simulated: "Demonstration figure",
  modelled: "Planned figure",
};

export const projects: Project[] = [
  {
    slug: "sony-m4-photography",
    index: "01",
    code: "CS·M4·01",
    camera: "Sony α7 IV (ILCE-7M4)",
    title: "Sony α7 IV Portraits, Weddings & Editorial Frames",
    shortTitle: "Sony M4 photography",
    oneLiner:
      "33MP full-frame portraits, bridal storytelling, heritage twilight frames and 10-bit 4K handheld sequences shot on the Sony Alpha a7 IV with G Master glass — solo or with Ranjit's multi-photographer crew.",
    tools: [
      "Sony Alpha a7 IV (M4)",
      "FE 85mm f/1.4 GM",
      "FE 24–70mm f/2.8 GM II",
      "Godox AD600 Pro",
      "Lightroom Classic",
      "DaVinci Resolve",
    ],
    tags: ["Sony α7 IV", "Portraits & Weddings", "Contact Sheet"],
    challenge:
      "Weddings, editorial portraits and hospitality shoots move fast across harsh midday courtyards, candle-lit rituals and blue-hour riverbanks. Mixing mismatched cameras or relying on heavy post-processing ruins skin tones and slows delivery.",
    objective:
      "Standardise every ground commission on calibrated Sony Alpha a7 IV bodies, fast f/1.4–f/2.8 G Master lenses and dual-card RAW workflows so skin tones, shadow detail and 4K motion match effortlessly from first frame to final print.",
    approach: [
      {
        title: "Match the lens to the emotional distance",
        text: "85mm f/1.4 GM isolates couples against sandstone architecture; 35mm f/1.4 GM steps inside rituals without intruding; 24–70mm GM II covers fast-moving events without missing a beat.",
      },
      {
        title: "Scale from solo portraitist to 4-person crew",
        text: "Intimate portraits are shot one-on-one by Ranjit; multi-day weddings add a dedicated Sony α7 IV candid photographer, an RS 3 Pro gimbal cinematographer and an off-camera lighting assistant.",
      },
      {
        title: "Dual-slot safety & 48-hour colour pipeline",
        text: "Every shutter press writes simultaneously to CFexpress Type A and UHS-II SD, backs up to NVMe on location, and runs through Ranjit's custom colour profile for 48-hour preview delivery.",
      },
    ],
    capabilities: [
      "33MP 14-bit RAW portraiture",
      "Multi-photographer wedding direction",
      "Off-camera strobe & natural-light craft",
      "10-bit S-Cinetone & S-Log3 hybrid motion",
    ],
    results: [
      { value: "33 MP", label: "Uncompressed 14-bit RAW master files", kind: "delivered" },
      {
        value: "48h",
        label: "Curated & colour-graded gallery turnaround",
        kind: "delivered",
        note: "Dual-slot recorded in camera and backed up twice before leaving the venue.",
      },
    ],
    relevance:
      "Ideal for pre-wedding and wedding commissions, executive & artist portraits, boutique hotel interiors and heritage tourism campaigns across Uttar Pradesh and Bihar.",
    thumbnail: { src: "/images/projects/thumb-sony-m4.jpg", width: 300, height: 268 },
    cardSummary:
      "Full-frame portraits, weddings and twilight heritage series shot on the Sony Alpha a7 IV (M4) with G Master primes and Ranjit's specialist shoot crew.",
    cardTags: ["Sony α7 IV", "85mm GM", "Weddings", "Portraits"],
    categories: ["stills"],
  },
  {
    slug: "aerial-films",
    index: "02",
    code: "CS·AIR·02",
    camera: "Mavic 3 Pro + Sony α7 IV",
    title: "Aerial Films for Hotels, Builders & Brands",
    shortTitle: "Aerial films",
    oneLiner:
      "Drone films and stills for hospitality, real estate and brand campaigns around Gorakhpur — planned shot by shot, flown in one visit and colour-matched to Sony α7 IV ground footage.",
    tools: ["DJI Mavic 3 Pro", "Sony Alpha a7 IV", "Premiere Pro", "DaVinci Resolve", "Lightroom Classic"],
    tags: ["Aerial film", "Brand campaign", "Stills"],
    challenge:
      "A brand film usually means two crews — a drone pilot for the wide establishing shots and a camera team for the ground detail — plus a separate edit. That is two site visits, two bills, and footage that never quite matches when it is cut together.",
    objective:
      "Cover an entire campaign in a single visit: DJI aerials and Sony α7 IV ground cinema, graded to one look and delivered in both horizontal 16:9 and vertical 9:16.",
    approach: [
      {
        title: "Fly the story first",
        text: "A recce sets the sun path, the airspace and the angles; the client signs off an indexed shot list before anyone drives to the location.",
      },
      {
        title: "Shoot air and Sony M4 ground in one pass",
        text: "Mavic 3 Pro D-Log M and Sony α7 IV S-Log3 10-bit profiles are exposed with matched ND filtration and white balance so air and ground cut seamlessly.",
      },
      {
        title: "Grade and cut in-house",
        text: "Stills are culled in Lightroom, the film is cut in Premiere Pro and every camera is unified in DaVinci Resolve, then exported in 16:9 and 9:16.",
      },
    ],
    capabilities: ["Flight planning", "Aerial cinematography", "Sony α7 IV ground cinema", "DaVinci colour match"],
    results: [
      { value: "85+", label: "Commissions shot and delivered", kind: "delivered" },
      {
        value: "48h",
        label: "Graded stills after the shoot",
        kind: "delivered",
        note: "The 4K film follows within 5–7 days, in horizontal and vertical cuts.",
      },
    ],
    relevance:
      "The same one-visit approach fits hotel and resort films, real-estate launches, event aftermovies and tourism films across Uttar Pradesh and Bihar.",
    thumbnail: { src: "/images/projects/thumb-films.jpg", width: 300, height: 268 },
    cardSummary:
      "Aerial and Sony α7 IV ground coverage in a single visit: drone, gimbal and stills camera shot to one look, then graded and cut in-house.",
    cardTags: ["DJI Mavic 3", "Sony α7 IV", "Resolve", "Premiere"],
    categories: ["aerial", "stills"],
  },
  {
    slug: "aerial-mapping",
    index: "03",
    code: "CS·MAP·03",
    camera: "Mapping Grid + Ground RAW",
    title: "Aerial Mapping & Site Inspection",
    shortTitle: "Mapping & inspection",
    oneLiner:
      "Orthomosaics, 3D site models and inspection passes for construction, solar and farmland — the same GPS grid and ground reference frames on every visit.",
    tools: ["Mapping drone", "DJI Terra", "Sony α7 IV Ground Log", "Photogrammetry"],
    tags: ["Mapping", "Photogrammetry", "Inspection"],
    challenge:
      "A progress report built from hand-held photos is hard to compare month to month: different angle, different light, different scale. Everyone spends the meeting working out whether the site actually changed.",
    objective:
      "Fly the same grid, the same altitude and the same camera settings on every visit, so each month's capture stacks directly over the last one.",
    approach: [
      {
        title: "Grid and ground control",
        text: "Waypoint lines are planned over the site boundary with ground markers, and flown only inside a safe weather and wind window.",
      },
      {
        title: "Capture and process",
        text: "Overlapping frames are stitched into a centimetre-accurate orthomosaic and paired with sharp 33MP Sony α7 IV close-ups of structural details.",
      },
      {
        title: "Compare and report",
        text: "Month-on-month overlays, measured areas and volumes, and annotated stills the site team can read without training.",
      },
    ],
    capabilities: ["Mission planning", "Photogrammetry", "Repeatable flight lines", "Inspection reporting"],
    results: [
      { value: "12+", label: "Sites documented on a repeat cycle", kind: "delivered" },
      {
        value: "8",
        label: "Grid passes flown per site visit",
        kind: "delivered",
        note: "The same lines, altitude and settings every time, so the captures stack cleanly.",
      },
    ],
    relevance:
      "Used for construction progress, solar-plant inspection and farmland planning, where the value is in the comparison rather than in a single pretty frame.",
    thumbnail: { src: "/images/projects/thumb-mapping.jpg", width: 274, height: 268 },
    cardSummary:
      "Repeatable flight grids flown over construction, solar and farmland sites, processed into orthomosaics and month-on-month comparisons.",
    cardTags: ["Photogrammetry", "DJI Terra", "Grid missions"],
    categories: ["mapping", "aerial"],
  },
  {
    slug: "kit-management",
    index: "04",
    code: "CS·OPS·04",
    camera: "120+ Serial-Tracked Items",
    title: "Sony M4 & Drone Kit Control System",
    shortTitle: "Kit management",
    oneLiner:
      "How the studio gear is tracked, serviced and planned: FZ100 & Mavic batteries by cycle count, CFexpress cards by write history, Sony bodies and GM lenses by calibration date.",
    tools: ["Google Sheets", "n8n", "Lightroom Classic", "Serial logs"],
    tags: ["Operations", "Maintenance", "Planning"],
    challenge:
      "Shooting every week means the failure points are preventable ones: a battery past its cycle limit, a card reformatted one time too many, or a 24–70mm lens due calibration right before peak wedding season.",
    objective:
      "Track every Sony body, G Master lens, drone airframe, battery, card and ND filter against its own service rules so a shoot is never delayed.",
    approach: [
      {
        title: "Log every item by serial",
        text: "Each Sony α7 IV body, GM lens, drone, battery, CFexpress card and filter carries a serial entry with shutter/cycle limits and service intervals.",
      },
      {
        title: "Automate readiness checks",
        text: "A scheduled workflow reads flight and shutter logs, flags anything approaching threshold and alerts before the next call sheet goes out.",
      },
      {
        title: "Plan consumables ahead of peak season",
        text: "Cards, batteries, propellers and filters are stocked using order-point calculations — explore the live simulator on this page.",
      },
    ],
    capabilities: ["Gear tracking", "Optics calibration rules", "Consumable planning", "Automated alerting"],
    results: [
      { value: "120+", label: "Bodies, lenses, packs & cards tracked", kind: "delivered" },
      {
        value: "48h",
        label: "Advance alert before any limit is reached",
        kind: "delivered",
        note: "Zero commissions missed through equipment failure across 500+ flights.",
      },
    ],
    relevance:
      "Gear discipline is the reason Ranjit's Sony α7 IV bodies and DJI fleet stay dependable through dust, heat, monsoon humidity and back-to-back wedding weeks.",
    thumbnail: { src: "/images/projects/thumb-kit.jpg", width: 280, height: 268 },
    cardSummary:
      "Every Sony α7 IV body, G Master lens, drone battery and CFexpress card tracked by serial with automated readiness alerts.",
    cardTags: ["Sony α7 IV", "Maintenance", "n8n", "Planning"],
    categories: ["systems"],
  },
  {
    slug: "progress-documentation",
    index: "05",
    code: "CS·DOC·05",
    camera: "8 Fixed Aerial + Ground Views",
    title: "Progress Documentation for Builders",
    shortTitle: "Site documentation",
    oneLiner:
      "Monthly aerial and Sony α7 IV ground documentation for construction and real-estate projects: identical flight lines and viewpoints delivered as an indexed archive.",
    tools: ["Drone", "Sony Alpha a7 IV", "Lightroom", "Premiere Pro", "Client gallery"],
    tags: ["Documentation", "Real estate", "Timelapse"],
    challenge:
      "Builders and developers need a visual record of progress for investors, buyers and engineers — and ad-hoc phone photos from random corners cannot be compared across a twelve-month build.",
    objective:
      "Give every project a fixed, indexed visual record: eight locked aerial viewpoints plus matched ground milestone stills each month.",
    approach: [
      {
        title: "Lock the eight viewpoints",
        text: "Saved GPS coordinates, gimbal pitch angles and ground markers keep every monthly visit aligned frame-for-frame across the entire build.",
      },
      {
        title: "Pair aerial context with Sony M4 detail",
        text: "Boundary, access, earthworks and elevation views from the air are paired with high-resolution Sony α7 IV ground stills of interiors and MEP progress.",
      },
      {
        title: "Deliver an investor-ready indexed pack",
        text: "A dated, frame-numbered gallery, a 60-second progress film and side-by-side comparison plates ready to drop straight into board reports.",
      },
    ],
    capabilities: ["Repeatable viewpoints", "Construction documentation", "Time-lapse editing", "Indexed archiving"],
    results: [
      { value: "8", label: "Locked aerial viewpoints per visit", kind: "delivered" },
      {
        value: "12 months",
        label: "Typical documentation cycle per build",
        kind: "delivered",
        note: "Identical framing from foundation pour to handover.",
      },
    ],
    relevance:
      "Answers the exact questions a developer's investor pack asks: how far along, how clean the site is, and what changed since last month.",
    thumbnail: { src: "/images/projects/thumb-progress.jpg", width: 600, height: 361 },
    cardSummary:
      "Monthly flyovers and Sony α7 IV ground milestones from locked viewpoints, delivered as an indexed archive for builders and investors.",
    cardTags: ["Documentation", "Time-lapse", "Real estate"],
    categories: ["mapping", "aerial"],
  },
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p])) as Record<string, Project>;
