// Builds the one-page profile PDF shipped in /public/resume, with no external tooling.
// Simple base-14 text: edit the LINES below and run `node scripts/build-resume.mjs`.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public/resume");
const outFile = "RANJEET-Drone-Photographer-CV.pdf";

const PAGE = { w: 595.28, h: 841.89 }; // A4
const MARGIN = 46;
const LEAD = 12.6;

/** [text, style] where style: h1 | h2 | body | meta | gap */
const LINES = [
  ["RANJEET", "h1"],
  ["Sony FX3 Photographer & Aerial Cinematographer - Betthia, Bihar", "meta"],
  ["rg3917289@gmail.com  ·  +91 76547 18165  ·  Instagram @ranjeet_gupta_94", "meta"],
  ["Bahag 1, West Chhapar, Betthia, Bihar, India", "meta"],
  ["", "gap"],
  ["PROFILE", "h2"],
  ["Full-frame Sony FX3 (ILME-FX3) photographer and DGCA-compliant aerial cinematographer", "body"],
  ["working across Uttar Pradesh and Bihar. Shoots full-frame RAW portraits, weddings, hospitality", "body"],
  ["campaigns, 4K 10-bit S-Log3 / D-Log films and repeatable mapping grids - solo or leading a", "body"],
  ["4-specialist shoot crew. Graded stills in 48 hours, edited films inside 7 days, rights in writing.", "body"],
  ["", "gap"],
  ["EXPERIENCE", "h2"],
  ["RANJEET Visuals - Lead Sony FX3 Photographer & Aerial Cinematographer, Betthia   2021 - Present", "body"],
  ["· Directed and shot 85+ commissions: weddings, couple & editorial portraits, hotel and real-estate", "body"],
  ["  films, heritage series and monthly site documentation across 12+ districts.", "body"],
  ["· Logged 500+ incident-free drone flights and leads an on-call 4-person crew (candid Sony FX3", "body"],
  ["  second shooter, RS 3 Pro gimbal cinematographer and off-camera Godox lighting / SSD wrangler).", "body"],
  ["· Built a colour-managed post pipeline matching Sony full-frame RAW & S-Log3 with DJI D-Log M in", "body"],
  ["  Lightroom Classic, DaVinci Resolve and Premiere Pro (16:9 cinema + 9:16 social deliverables).", "body"],
  ["Camera House & Studio - Camera Specialist (Sony Full-Frame, Optics & Studio)   2018 - 2021", "body"],
  ["· Advised 1,000+ working photographers on bodies, G Master / prime glass, strobes and storage.", "body"],
  ["· Inspected, sensor-cleaned and calibrated mirrorless & DSLR kits; assisted on 25+ studio shoots.", "body"],
  ["", "gap"],
  ["INDEXED CASE STUDIES & PACKAGES", "h2"],
  ["01 Sony FX3 Portraits & Weddings - Full-frame RAW & 10-bit 4K on FE 85mm f/1.4 & 24-70mm f/2.8 GM II.", "body"],
  ["02 Aerial & Brand Films - Mavic 3 Pro + Sony FX3 ground cinema unified in one Resolve grade.", "body"],
  ["03 Aerial Mapping & Inspection - Repeatable GPS grids, 2D orthomosaics & structural ground logs.", "body"],
  ["04 Kit Control System - 120+ serial-tracked bodies, lenses, FZ100/flight batteries & CFexpress cards.", "body"],
  ["05 Builder Progress Docs - 8 locked aerial & ground viewpoints captured monthly through handover.", "body"],
  ["", "gap"],
  ["PRIMARY RIG & SKILLS", "h2"],
  ["Cameras & Glass: Sony FX3, FE 24-70mm f/2.8 GM II, FE 85mm f/1.4 GM, FE 35mm f/1.4 GM,", "body"],
  ["FE 16-35mm f/2.8 GM, Godox AD600/AD200 Pro strobes, DJI RS 3 Pro gimbal, CFexpress Type A / SD dual slots.", "body"],
  ["Aerial: DJI Mavic 3 Pro (24/70/166mm), DGCA compliance, waypoint grids, ND filtration, twilight passes.", "body"],
  ["Post: Lightroom Classic, DaVinci Resolve Studio, Premiere Pro, 3-2-1 checksummed SSD backups.", "body"],
  ["", "gap"],
  ["CERTIFICATIONS & LANGUAGES", "h2"],
  ["Remote Pilot Certificate (RPC - DGCA India)  ·  Sony S-Log3 & Resolve Colour  ·  Photogrammetry", "body"],
  ["Hindi (native)  ·  English (professional)  ·  Bhojpuri (conversational)", "body"],
];

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

let y = PAGE.h - MARGIN;
const parts = [];
for (const [text, style] of LINES) {
  if (style === "gap") {
    y -= LEAD * 0.55;
    continue;
  }
  if (style === "h1") {
    y -= 6;
    parts.push(`BT /F2 22 Tf 1 0 0 1 ${MARGIN} ${y.toFixed(1)} Tm (${esc(text)}) Tj ET`);
    y -= LEAD + 4;
    continue;
  }
  if (style === "h2") {
    y -= 5;
    parts.push(`BT /F2 10 Tf 1 0 0 1 ${MARGIN} ${y.toFixed(1)} Tm 0.043 0.239 0.569 rg (${esc(text)}) Tj ET`);
    parts.push(`0.043 0.239 0.569 RG 1 w ${MARGIN} ${(y - 4).toFixed(1)} m ${PAGE.w - MARGIN} ${(y - 4).toFixed(1)} l S`);
    y -= LEAD + 2;
    parts.push("0 0 0 rg");
    continue;
  }
  const size = style === "meta" ? 9.3 : 9.4;
  parts.push(`BT /F1 ${size} Tf 1 0 0 1 ${MARGIN} ${y.toFixed(1)} Tm (${esc(text)}) Tj ET`);
  y -= LEAD;
}

parts.push(`0.6 0.65 0.72 RG 0.8 w ${MARGIN} 38 m ${PAGE.w - MARGIN} 38 l S`);
parts.push(`BT /F1 8 Tf 1 0 0 1 ${MARGIN} 27 Tm 0.4 0.45 0.52 rg (RANJEET - Sony FX3 Photographer & Aerial Cinematographer, Betthia, Bihar. Updated November 2026.) Tj ET`);

const content = parts.join("\n");
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE.w} ${PAGE.h}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
  `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}\nendstream`,
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((body, i) => {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});
const xrefPos = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, outFile), Buffer.from(pdf, "latin1"));
console.log(`wrote public/resume/${outFile} (${(Buffer.byteLength(pdf, "latin1") / 1024).toFixed(1)} KB)`);
