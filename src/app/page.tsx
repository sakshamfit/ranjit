import { AboutSection } from "@/components/sections/about/AboutSection";
import { WhyChooseMe } from "@/components/sections/about/WhyChooseMe";
import { ChapterIndexBar } from "@/components/sections/frames/ChapterIndexBar";
import { SonyFX3Showcase } from "@/components/sections/frames/SonyFX3Showcase";
import { FramesAndIndexSection } from "@/components/sections/frames/FramesAndIndexSection";
import { PhotographersAndPackages } from "@/components/sections/frames/PhotographersAndPackages";
import { NextPage } from "@/components/layout/NextPage";

/**
 * The profile opens on the About portrait stage (RANJEET with his Sony FX3 FX3),
 * followed by the Chapter Index bar, the Sony FX3 optical rig showcase, the Framed Contact
 * Sheet & Master Archive Index, the collaborating Photographers & Packages roster, and Why Book RANJEET.
 */
export default function HomePage() {
  return (
    <main id="main">
      <AboutSection />
      <ChapterIndexBar />
      <SonyFX3Showcase />
      <FramesAndIndexSection limit={2} />
      <PhotographersAndPackages />
      <WhyChooseMe />
      <NextPage
        label="Projects & Case Studies"
        href="/projects"
        description="Five indexed case studies: Sony FX3 portraiture & weddings, aerial films, mapping grids, kit systems and monthly site documentation."
      />
    </main>
  );
}
