import React from "react";
import SmokeScene from "../smoke-effect/smoke-scene";
import { getTranslations } from "next-intl/server";
import cls from "classnames";
import BaseButton from "../ui/base-button";

const HeroSection = async ({ locale }: { locale: string }) => {
  const t = await getTranslations("components.HeroSection");
  return (
    <section
      className="bg-[image:var(--hero-bg)] bg-no-repeat h-screen w-full bg-cover bg-fixed min-h-screen relative overflow-x-hidden"
      id="hero-section"
    >
      <div className="smoke-effect absolute top-0 left-0 w-full h-full z-0">
        <SmokeScene />
        <span className="absolute left-0 top-0 w-full h-full bg-black opacity-60"></span>
      </div>
      <div className="container">
        <div className="flex items-center min-h-screen overflow-hidden">
          <div className="w-full min-h-full">
            <div
              className={cls(
                "text-block relative z-10",
                locale === "ar" ? "max-w-lg" : "max-w-2xl"
              )}
            >
              <h1
                className={cls(
                  "!mb-4 text-white",
                  locale === "ar"
                    ? "!text-5xl lg:!text-6xl font-bold leading-20 lg:leading-24"
                    : "!text-4xl lg:!text-6xl font-semibold leading-[1.10606em]"
                )}
              >
                {t("title")}
              </h1>
              {locale === "ar" ? (
                <p
                  className={cls(
                    "text-white font-medium mb-8",
                    locale === "ar"
                      ? "text-lg lg:text-xl leading-[35px]"
                      : "text-lg lg:text-xl leading-[30px]"
                  )}
                >
                  {t("description.line1")}
                  <br />
                  {t("description.line2")}
                  <br />
                  {t("description.line3")}
                </p>
              ) : (
                <p
                  className={cls(
                    "text-white font-medium mb-8",
                    locale === "ar"
                      ? "text-lg lg:text-xl leading-[35px]"
                      : "text-lg lg:text-xl leading-[35px]"
                  )}
                >
                  {t("description.line1")}
                </p>
              )}
              <div className="w-[80%] md:w-[55%]">
                <BaseButton
                  href="https://wa.me/966557827776"
                  size="hero"
                  theme="primary"
                >
                  {t("button")}
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
