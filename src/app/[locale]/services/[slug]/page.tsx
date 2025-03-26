import React from "react";
import cls from "classnames";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Head from "next/head";

export const metadata: Metadata = {
  title: "AAR LUXE CAR CARE - Services",
  description:
    "نقدم لك تجربة فريدة في عالم العناية بالسيارات حيث الجودة والاحترافية تلتقيان لتوفير أفضل الخدمات لسيارتك بأفضل الخامات وبضمان حتى 7 سنوات",
};

const ServicesPage = async ({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) => {
  const { locale, slug } = await params;
  const t = await getTranslations(`pages.services.${slug}`);
  const list = await t.raw("list.items");

  // Ensure that the incoming `locale` is valid
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
      <section className="">
        <div
          className="py-[92px] bg-cover bg-no-repeat bg-top h-[70vh] flex justify-center items-center relative after:absolute after:inset-0 after:bg-black after:opacity-30 -z-10"
          style={{ backgroundImage: `url(${t("imgSrc")})` }}
        >
          <span className="absolute left-0 top-0 w-full h-[70%] bg-linear-to-b from-header-bg to-transparent"></span>
          <span className="absolute left-0 bottom-0 w-full h-[70%] bg-linear-to-t from-header-bg to-transparent"></span>
          <div className="container">
            <h1
              className={cls(
                "!mb-4 text-white text-center relative z-30 capitalize",
                locale === "ar"
                  ? "!text-5xl lg:!text-6xl font-bold leading-20 lg:leading-24"
                  : "!text-5xl lg:!text-6xl font-semibold leading-[1.10606em]"
              )}
            >
              {t("title")}
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="py-8">
            <div className="heading mb-10">
              <h2
                className={cls(
                  "!mb-4 text-header-bg",
                  locale === "ar"
                    ? "!text-5xl lg:!text-5xl font-bold leading-20 lg:leading-24"
                    : "!text-4xl lg:!text-5xl font-semibold leading-[1.10606em]"
                )}
              >
                {t("subtitle.text")}
              </h2>
              <p className="text-xl leading-[30px] font-medium">
                {t("subtitle.content")}
              </p>
            </div>
            <div>
              <h3
                className={cls(
                  "!mb-4 text-header-bg",
                  locale === "ar"
                    ? "!text-5xl lg:!text-4xl font-bold leading-20 lg:leading-24"
                    : "!text-4xl lg:!text-4xl font-semibold leading-[1.10606em]"
                )}
              >
                {t("list.title")}
              </h3>
              <ul className="">
                {list.map(
                  (item: { bold: string; text: string }, idx: number) => {
                    return (
                      <li
                        className="flex flex-wrap md:flex-nowrap items-center gap-x-1 text-xl mb-2"
                        key={idx}
                      >
                        <span className="font-bold">{item.bold}</span>
                        <span className="font-medium">{item.text}</span>
                      </li>
                    );
                  }
                )}
              </ul>
              <p className="text-xl font-semibold mt-6">{t("list.content")}</p>

              <div className="mt-10">
                <h3
                  className={cls(
                    "!mb-4 text-header-bg",
                    locale === "ar"
                      ? "!text-5xl lg:!text-4xl font-bold leading-20 lg:leading-24"
                      : "!text-4xl lg:!text-4xl font-semibold leading-[1.10606em]"
                  )}
                >
                  {t("visit.title.text")}{" "}
                  <span className="text-primary">{t("visit.title.span")}</span>
                </h3>
                <p className="text-xl font-semibold">
                  {t("visit.content.text").split(" ")[0]}{" "}
                  <Link href="/" className="text-primary font-bold">
                    AAR-LUXE
                  </Link>{" "}
                  {t("visit.content.text").split(" ").slice(1).join(" ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
