import HeroSection from "@/components/landing-sections/hero-section";
import AboutUsSection from "@/components/landing-sections/about-us-sections";
// import { Metadata } from "next";
import { hasLocale } from "next-intl";
import WhyUsSection from "@/components/landing-sections/why-us-section";
import ServicesSection from "@/components/landing-sections/services-section";
import PartnersSection from "@/components/landing-sections/partners-section";
import GellarySection from "@/components/landing-sections/gallery-section";
import ContactSection from "@/components/landing-sections/contact-section";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "احمي سيارتك بأعلى معايير الجودة | AAR LUXE CAR CARE",
//   description:
//     "نقدم لك تجربة فريدة في عالم العناية بالسيارات حيث الجودة والاحترافية تلتقيان لتوفير أفضل الخدمات لسيارتك بأفضل الخامات وبضمان حتى 7 سنوات",
// };

// Define the supported locales
const locales = ["en", "ar"];

// Generate static params for supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              url: "https://www.aarluxe.online",
              name: "AarLuxe",
              description: "Your description here",
            }),
          }}
        />
      </Head>
      <div className="">
        <HeroSection locale={locale} />
        <AboutUsSection locale={locale} />
        <WhyUsSection locale={locale} />
        <ServicesSection locale={locale} />
        <GellarySection />
        <PartnersSection />
        <ContactSection locale={locale} />
      </div>
    </>
  );
}
