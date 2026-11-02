import type { Metadata } from "next";
import { ResumeSection } from "@/components/sections/resume/ResumeSection";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download RANJEET's profile: drone photographer and camera specialist, Betthia (PDF, 1 page).",
};

export default function ResumePage() {
  return (
    <main id="main">
      <ResumeSection />
    </main>
  );
}
