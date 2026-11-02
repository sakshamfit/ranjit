import type { Metadata } from "next";
import { FramesAndIndexSection } from "@/components/sections/frames/FramesAndIndexSection";
import { SonyFX3Showcase } from "@/components/sections/frames/SonyFX3Showcase";
import { PhotographersAndPackages } from "@/components/sections/frames/PhotographersAndPackages";
import { NextPage } from "@/components/layout/NextPage";

export const metadata: Metadata = {
  title: "Frames & Master Index",
  description:
    "Curated photography contact sheet, EXIF master index, Sony FX3 optical rig and specialist shoot crew led by RANJEET.",
};

export default function FramesPage() {
  return (
    <main id="main">
      <FramesAndIndexSection
        headingAs="h1"
        eyebrow="Monograph Contact Sheet · Master Plate Index"
      />
      <SonyFX3Showcase />
      <PhotographersAndPackages />
      <NextPage
        label="Experience"
        href="/experience"
        description="Studio production metrics, flight & Sony FX3 shoot pipeline, and RANJEET's optical background in Betthia."
      />
    </main>
  );
}
