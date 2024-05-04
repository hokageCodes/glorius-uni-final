import FaqSection from "@/components/FAQs-section/FaqSection";
import HeroSection from "@/components/hero/HeroSection";
import OurColleges from "@/components/our-colleges/OurColleges";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurColleges />
      <FaqSection />
    </>
  );
}
