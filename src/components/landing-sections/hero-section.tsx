"use client";
import React from "react";
import SmokeScene from "../smoke-effect/smoke-scene";
import { useLocale, useTranslations } from "next-intl";
import cls from "classnames";
import BaseButton from "../ui/base-button";

const HeroSection = () => {
  const t = useTranslations("components.HeroSection");
  const locale = useLocale();
  return (
    <section
      className="bg-[image:var(--hero-bg)]  bg-no-repeat h-screen w-full bg-cover bg-fixed min-h-screen relative overflow-x-hidden"
      id="hero-section"
    >
      <div className="smoke-effect absolute top-0 left-0 w-full h-full z-0">
        <SmokeScene />
        <span className="absolute left-0 top-0 w-full h-full bg-black opacity-60"></span>
      </div>
      <div className="container">
        <div className="flex items-center min-h-screen overflow-hidden">
          <div className="w-full min-h-full">
            <div className="text-block relative z-10 max-w-lg">
              <h1
                className={cls(
                  "!mb-4 text-white",
                  locale === "ar"
                    ? "font-heading-arabic !text-5xl lg:!text-6xl font-bold leading-20 lg:leading-24"
                    : "font-heading-en text-6xl font-semibold max-w-[90%] leading-[1.10606em]"
                )}
              >
                {t("title")}
              </h1>
              <p className="text-lg lg:text-xl text-white leading-[35px] font-medium mb-8">
                {t("description.line1")}
                <br />
                {t("description.line2")}
                <br />
                {t("description.line3")}
              </p>
              <div className="w-[80%] md:w-[60%]">
                <BaseButton type="button" size="hero" theme="primary">
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
