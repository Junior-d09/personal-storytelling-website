import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Timeline } from "@/components/sections/timeline";
import { Vision } from "@/components/sections/vision";
import { Skills } from "@/components/sections/skills";
import { Stats } from "@/components/sections/stats";
import { Projects } from "@/components/sections/projects";
import { Footer } from "@/components/sections/footer";
import { StorySection } from "@/components/sections/StorySection";
import { ProofSection } from "@/components/sections/ProofSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <Timeline />
      <StorySection />
      <ProofSection />
      <Vision />
      <Skills />
      <Stats />
      <Projects />
      <Footer />
    </main>
  );
}
