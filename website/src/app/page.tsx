import EnhancedHero from "@/app/components/EnhancedHero";
import Services from "@/app/components/Services";
import OperatingSystemSection from "@/app/components/OperatingSystemSection";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import ExperienceSection from "@/app/components/ExperienceSection";
import CallToAction from "@/app/components/CallToAction";
import PortfolioSection from "@/app/components/PortfolioSection";
import SpaceStorySection from "@/app/components/SpaceStorySection";
import StructuredData from "@/components/StructuredData";
import { generatePageStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData data={generatePageStructuredData("home")} />
      <EnhancedHero />
      <OperatingSystemSection />
      <Services />
      <PortfolioSection />
      <WhyChooseUs />
      <SpaceStorySection />
      <ExperienceSection />
      <CallToAction />
    </>
  );
}
