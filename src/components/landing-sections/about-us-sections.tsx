"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  const t = useTranslations("components.AboutUsSection");
  // const locale = useLocale();
  return (
    <section
      className="w-full bg-[image:var(--lines-shape)] min-h-[calc(100vh-92px)] relative overflow-x-hidden"
      id="about-us"
    >
      <div className="container">
        <div className="flex">
          <div className="w-1/2 min-h-[calc(100vh-92px)] flex items-center">
            <div className="text-block text-header-bg">
              <h2 className="font-heading-arabic !text-6xl font-bold leading-24 !mb-4">
                {t("title")}
              </h2>
              <p className="text-xl leading-[35px] font-medium">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="w-2/3 min-h-[calc(100vh-92px)] flex justify-center items-center">
            <div className="img relative z-10">
              <Image
                src={"/assets/images/cars/black-car.png"}
                width={750}
                height={500}
                className="-mb-[200px] ml-20"
                alt={t("description")}
              />
              <div className="flag absolute top-[-195px] left-[30px] -z-10 rotate-12">
                <Image
                  src={"/assets/images/about-us/saudi-flag.png"}
                  width={350}
                  height={350}
                  alt={t("description")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
