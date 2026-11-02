import type { Metadata } from "next";
import { FramesAndIndexSection } from "@/components/sections/frames/FramesAndIndexSection";
import { SonyM4Showcase } from "@/components/sections/frames/SonyM4Showcase";
import { PhotographersAndPackages } from "@/components/sections/frames/PhotographersAndPackages";
import { NextPage } from "@/components/layout/NextPage";

export const metadata: Metadata = {
  title: "Frames & Master Index",
  description:
    "Curated photography contact sheet, EXIF master index, Sony Alpha a7 IV (M4) optical rig and specialist shoot crew led by Ranjit.",
};

export default function FramesPage() {
  return (
    <main id="main">
      <FramesAndIndexSection
        headingAs="h1"
        eyebrow="Monograph Contact Sheet · Master Plate Index"
      />
      <SonyM4Showcase />
      <PhotographersAndPackages />
      <NextPage
        label="Experience"
        href="/experience"
        description="Studio production metrics, flight & Sony M4 shoot pipeline, and Ranjit's optical background in Gorakhpur."
      />
    </main>
  );
}
