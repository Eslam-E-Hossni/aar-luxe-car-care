/* eslint-disable @next/next/next-script-for-ga */
/*
      MEWO! >(.)__
             (___/
*/
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Chakra_Petch } from "next/font/google";
import "@/styles/globals.css";
import LandingHeader from "@/components/layout/landing-header";
import LandingFooter from "@/components/layout/landing-footer";
import WhatsappIcon from "@/components/ui/whatsapp-icon";
import Head from "next/head";

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

// export const metadata: Metadata = {
//   title: "احمي سيارتك بأعلى معايير الجودة",
//   description:
//     "aar-aarluxe احمي سيارتك بأعلى معايير الجودة مع خدماتنا الفاخرة. نقدم تلميع وتغطية سيارات بضمان حتى 7 سنوات. اكتشف أفضل خدمات العناية بالسيارات في.",
// };

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
      <Head>
        {locale === "ar" ? (
          <>
            <title>احمي سيارتك بأعلى معايير الجودة | AAR LUXE CAR CARE</title>
            <meta
              name="twitter:title"
              content="احمي سيارتك بأعلى معايير الجودة"
            />
            <meta
              name="twitter:description"
              content="احمي سيارتك بأعلى معايير الجودة مع خدماتنا الفاخرة التي تضم تلميع سيارات عالي الجودة، تغطية سيارات متطورة، وحماية شاملة ضد الأضرار والخدوش. نحن نقدم خدمات متخصصة في تلميع وتغطية السيارات الفاخرة مع ضمان طويل الأمد يصل إلى 7 سنوات، مما يضمن لك الحفاظ على مظهر سيارتك وحمايتها من العوامل الخارجية. بالإضافة إلى ذلك، نستخدم تقنيات متطورة لضمان حماية فعّالة ونتائج مذهلة، مما يجعل سيارتك تبدو جديدة دائماً. اختبر العناية الفائقة التي نقدمها مع أفضل خدمات صيانة وحماية السيارات لتلبية جميع احتياجاتك."
            />
            <meta
              name="description"
              content="احمي سيارتك بأعلى معايير الجودة مع خدماتنا الفاخرة التي تضم تلميع سيارات عالي الجودة، تغطية سيارات متطورة، وحماية شاملة ضد الأضرار والخدوش. نحن نقدم خدمات متخصصة في تلميع وتغطية السيارات الفاخرة مع ضمان طويل الأمد يصل إلى 7 سنوات، مما يضمن لك الحفاظ على مظهر سيارتك وحمايتها من العوامل الخارجية. بالإضافة إلى ذلك، نستخدم تقنيات متطورة لضمان حماية فعّالة ونتائج مذهلة، مما يجعل سيارتك تبدو جديدة دائماً. اختبر العناية الفائقة التي نقدمها مع أفضل خدمات صيانة وحماية السيارات لتلبية جميع احتياجاتك."
            />

            <meta
              name="keywords"
              content="عناية شاملة بالسيارات لجميع أنواع السيارات، خدمات حماية السيارات المتقدمة والتكنولوجية، أفضل خدمات العناية بالسيارات والصيانة الاحترافية، تلميع سيارات عالي الجودة لتحسين مظهر السيارة وحمايتها، تغطية السيارات الفاخرة لحمايتها من الأضرار، ضمان حماية سيارات شامل وممتد لعدة سنوات، أفضل خدمات العناية بالسيارات الفاخرة والمتطورة، حماية سيارات فاخرة بأحدث التقنيات وأعلى معايير الجودة، خدمات صيانة وتلميع سيارات محترفة للحفاظ على قيمتها، تغطية سيارات مضمونة لحمايتها من العوامل الجوية والاصطدامات، عناية فائقة بالسيارات باستخدام تقنيات حديثة وبأعلى معايير الأمان، حماية سيارات بمدة ضمان تصل إلى 7 سنوات ضد العوامل الخارجية، خدمات صيانة فاخرة لعناية شاملة بالسيارات بأعلى جودة، حماية السيارات الفاخرة من الخدوش والأضرار الخارجية مع ضمان طويل الأمد، أفضل خدمات تلميع وتغطية للسيارات الفاخرة للحفاظ على بريقها ومظهرها."
            />
            <meta
              property="og:title"
              content="احمي سيارتك بأعلى معايير الجودة"
            />
            <meta
              property="og:description"
              content="احمي سيارتك بأعلى معايير الجودة مع خدماتنا الفاخرة التي تضم تلميع سيارات عالي الجودة، تغطية سيارات متطورة، وحماية شاملة ضد الأضرار والخدوش. نحن نقدم خدمات متخصصة في تلميع وتغطية السيارات الفاخرة مع ضمان طويل الأمد يصل إلى 7 سنوات، مما يضمن لك الحفاظ على مظهر سيارتك وحمايتها من العوامل الخارجية. بالإضافة إلى ذلك، نستخدم تقنيات متطورة لضمان حماية فعّالة ونتائج مذهلة، مما يجعل سيارتك تبدو جديدة دائماً. اختبر العناية الفائقة التي نقدمها مع أفضل خدمات صيانة وحماية السيارات لتلبية جميع احتياجاتك."
            />
            <meta
              property="og:site_name"
              content="احمي سيارتك بأعلى معايير الجودة - aarluxe car care"
            ></meta>
          </>
        ) : (
          <>
            <title>
              Protect Your Car with the Highest Quality Standards | AAR LUXE CAR
              CARE
            </title>
            <meta
              name="twitter:title"
              content="Protect Your Car with the Highest Quality Standards"
            />
            <meta
              name="twitter:description"
              content="Protect your car with our luxurious services, including high-quality car polishing, advanced car coverage, and comprehensive protection against damage and scratches. We offer specialized services in polishing and covering luxury cars with a long-term guarantee of up to 7 years, ensuring that your car's appearance is preserved and protected from external factors. Additionally, we use advanced techniques to ensure effective protection and amazing results, keeping your car looking like new. Experience the exceptional care we provide with the best car maintenance and protection services to meet all your needs."
            />
            <meta
              name="description"
              content="Protect your car with our luxurious services, including high-quality car polishing, advanced car coverage, and comprehensive protection against damage and scratches. We offer specialized services in polishing and covering luxury cars with a long-term guarantee of up to 7 years, ensuring that your car's appearance is preserved and protected from external factors. Additionally, we use advanced techniques to ensure effective protection and amazing results, keeping your car looking like new. Experience the exceptional care we provide with the best car maintenance and protection services to meet all your needs."
            />

            <meta
              name="keywords"
              content="aarluxe online, aar-luxe.online, aar-luxe online, comprehensive car care for all types of cars, advanced and technological car protection services, best car care and professional maintenance services, high-quality car polishing to improve appearance and protection, luxury car coverage to protect from damage, comprehensive car protection guarantee for several years, best luxury car care services with advanced technology, luxury car protection with the latest techniques and highest quality standards, professional car polishing and maintenance services to preserve value, guaranteed car coverage to protect from weather and impact, premium car care using modern techniques and the highest safety standards, car protection with a guarantee of up to 7 years against external factors, luxury car maintenance services for comprehensive care with top quality, luxury car protection from scratches and external damage with a long-term guarantee, best luxury car polishing and coverage services to maintain its shine and appearance."
            />
            <meta
              property="og:title"
              content="Protect Your Car with the Highest Quality Standards"
            />
            <meta
              property="og:description"
              content="Protect your car with our luxurious services, including high-quality car polishing, advanced car coverage, and comprehensive protection against damage and scratches. We offer specialized services in polishing and covering luxury cars with a long-term guarantee of up to 7 years, ensuring that your car's appearance is preserved and protected from external factors. Additionally, we use advanced techniques to ensure effective protection and amazing results, keeping your car looking like new. Experience the exceptional care we provide with the best car maintenance and protection services to meet all your needs."
            />
            <meta
              property="og:site_name"
              content="Protect Your Car with the Highest Quality Standards - AAR LUXE CAR CARE"
            />
          </>
        )}
        <meta name="robots" content="index, follow" />
        <meta
          property="og:image"
          content="https://www.aarluxe.online/assets/images/logo.svg"
        />
        <meta property="og:url" content="https://www.aarluxe.online" />
        <meta
          name="twitter:image"
          content="https://www.aarluxe.online/assets/images/logo.svg"
        />
        <meta
          name="twitter:card"
          content="https://www.aarluxe.online/assets/images/landing-bg-02.jpg"
        />
        <link rel="canonical" href="https://www.aarluxe.online" />
        <meta
          name="google-site-verification"
          content="rZplCzD4MObzqAdvNbc1T1wm6QeQ7lLkVkYE403Amhc"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
                        w[l]=w[l]||[];
                        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),
                            dl=l!='dataLayer'?'&l='+l:'';
                        j.async=true;
                        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer',${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`,
          }}
        />
      </Head>
      <body
        className={`${ibmPlexSansArabic.variable} ${
          chakraPetch.variable
        } antialiased overflow-x-hidden ${
          locale === "ar" ? "font-heading-arabic" : "font-heading-en"
        }`}
        cz-shortcut-listen="true"
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NextIntlClientProvider>
          <LandingHeader locale={locale} />
          <main>{children}</main>
          <LandingFooter />
          <WhatsappIcon />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
