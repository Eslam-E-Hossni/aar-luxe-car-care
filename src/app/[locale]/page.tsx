import HeroSection from "@/components/landing-sections/hero-section";
import AboutUsSection from "@/components/landing-sections/about-us-sections";
import { Metadata } from "next";
import WhyUsSection from "@/components/landing-sections/why-us-section";
import ServicesSection from "@/components/landing-sections/services-section";
import PartnersSection from "@/components/landing-sections/partners-section";
import GellarySection from "@/components/landing-sections/gallery-section";
import ContactSection from "@/components/landing-sections/contact-section";

export const metadata: Metadata = {
  title: "احمي سيارتك بأعلى معايير الجودة | AAR LUXE CAR CARE",
  description:
    "نقدم لك تجربة فريدة في عالم العناية بالسيارات حيث الجودة والاحترافية تلتقيان لتوفير أفضل الخدمات لسيارتك بأفضل الخامات وبضمان حتى 7 سنوات",
};

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutUsSection />
      <WhyUsSection />
      <ServicesSection />
      <GellarySection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
}
