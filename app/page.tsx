import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import OurPartners from "@/components/OurPartners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <OurPartners />
      <Projects />
      {/* <CTA /> */}
    </>
  );
}
