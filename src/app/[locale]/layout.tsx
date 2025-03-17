import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Chakra_Petch } from "next/font/google";
import "@/styles/globals.css";
import LandingHeader from "@/components/layout/landing-header";
import LandingFooter from "@/components/layout/landing-footer";
// import LandingFooter from "@/components/layout/landing-footer";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-patch",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "احمي سيارتك بأعلى معايير الجودة",
  description:
    "نقدم لك تجربة فريدة في عالم العناية بالسيارات حيث الجودة والاحترافية تلتقيان لتوفير أفضل الخدمات لسيارتك بأفضل الخامات وبضمان حتى 7 سنوات",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <body
        className={`${ibmPlexSansArabic.variable} ${chakraPetch.variable} antialiased overflow-x-hidden`}
        cz-shortcut-listen="true"
      >
        <NextIntlClientProvider>
          <LandingHeader />
          <main>{children}</main>
          <LandingFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
