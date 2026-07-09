import Navbar from "@/components/Navbar";
import SectionDotNav from "@/components/SectionDotNav";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import About from "@/components/About";
import Differentiators from "@/components/Differentiators";
import HomeBuying from "@/components/HomeBuying";
import Pillars from "@/components/Pillars";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <SectionDotNav /> */}
      <ScrollRevealProvider />
      <main>
        {/* <Hero />a */}
        <Vision />
        <About />
        <Differentiators />
        {/* <HomeBuying /> */}
        <Pillars />
        <Team />
        <Partners />
        <Contact />
      </main>
    </>
  );
}
