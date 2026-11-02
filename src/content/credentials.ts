/**
 * Certificates and languages for RANJEET.
 */

export const certifications = [
  { title: "Remote Pilot Certificate (RPC)", code: "DGCA", issuer: "Directorate General of Civil Aviation, India" },
  { title: "Sony Full-Frame Cinema & S-Log3 Workflow", code: "FX3", issuer: "Pro Imaging & Studio Colour Practice" },
  { title: "Aerial Photogrammetry & DaVinci Colour Grading", code: "POST", issuer: "Applied Studio & Mapping Pipeline" },
] as const;

export const languages = [
  { name: "Hindi", level: "Native", note: "Day-to-day direction on set & client calls" },
  { name: "English", level: "Professional", note: "Commercial briefs, shot indexes & licensing" },
  { name: "Bhojpuri", level: "Conversational", note: "Warm rapport on location across eastern UP & Bihar" },
] as const;
