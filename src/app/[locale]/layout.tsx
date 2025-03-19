import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Chakra_Petch } from "next/font/google";
import "@/styles/globals.css";
import LandingHeader from "@/components/layout/landing-header";
import LandingFooter from "@/components/layout/landing-footer";

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
    "aar-aarluxe احمي سيارتك بأعلى معايير الجودة مع خدماتنا الفاخرة. نقدم تلميع وتغطية سيارات بضمان حتى 7 سنوات. اكتشف أفضل خدمات العناية بالسيارات في.",
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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta
        name="keywords"
        content="عناية بالسيارات, حماية السيارات, خدمات سيارات, تلميع سيارات, تغطية السيارات, ضمان حماية السيارات, أفضل خدمات السيارات, عناية فاخرة بالسيارات, حماية سيارات فاخرة, خدمات سيارات عالية الجودة, تلميع سيارات محترف, تغطية سيارات بضمان, عناية سيارات بأعلى معايير, حماية سيارات لمدة 7 سنوات"
      />
      <meta property="og:title" content="احمي سيارتك بأعلى معايير الجودة" />
      <meta
        property="og:description"
        content="احمي سيارتك بأعلى معايير الجودة مع خدماتنا الفاخرة. نقدم تلميع وتغطية سيارات بضمان حتى 7 سنوات."
      />
      <meta
        property="og:image"
        content="https://aarluxe.online/assets/images/logo.svg"
      />
      <meta property="og:url" content="https://aarluxe.online" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="احمي سيارتك بأعلى معايير الجودة" />
      <meta
        name="twitter:description"
        content="احمي سيارتك بأعلى معايير الجودة مع خدماتنا الفاخرة. نقدم تلميع وتغطية سيارات بضمان حتى 7 سنوات."
      />
      <meta
        name="twitter:image"
        content="https://aarluxe.online/assets/images/landing-bg-02.jpg"
      />
      <meta
        name="google-site-verification"
        content="rZplCzD4MObzqAdvNbc1T1wm6QeQ7lLkVkYE403Amhc"
      />
      <link rel="canonical" href="https://aarluxe.online" />
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
