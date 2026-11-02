import { AboutSection } from "@/components/sections/about/AboutSection";
import { WhyChooseMe } from "@/components/sections/about/WhyChooseMe";
import { ChapterIndexBar } from "@/components/sections/frames/ChapterIndexBar";
import { SonyM4Showcase } from "@/components/sections/frames/SonyM4Showcase";
import { FramesAndIndexSection } from "@/components/sections/frames/FramesAndIndexSection";
import { PhotographersAndPackages } from "@/components/sections/frames/PhotographersAndPackages";
import { NextPage } from "@/components/layout/NextPage";

/**
 * The profile opens on the About portrait stage (Ranjit with his Sony Alpha a7 IV M4),
 * followed by the Chapter Index bar, the Sony M4 optical rig showcase, the Framed Contact
 * Sheet & Master Archive Index, the collaborating Photographers & Packages roster, and Why Book Ranjit.
 */
export default function HomePage() {
  return (
    <main id="main">
      <AboutSection />
      <ChapterIndexBar />
      <SonyM4Showcase />
      <FramesAndIndexSection limit={2} />
      <PhotographersAndPackages />
      <WhyChooseMe />
      <NextPage
        label="Projects & Case Studies"
        href="/projects"
        description="Five indexed case studies: Sony α7 IV portraiture & weddings, aerial films, mapping grids, kit systems and monthly site documentation."
      />
    </main>
  );
}
