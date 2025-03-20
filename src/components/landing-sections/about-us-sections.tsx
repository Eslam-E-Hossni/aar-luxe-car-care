import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

const AboutUsSection = async () => {
  const t = await getTranslations("components.AboutUsSection");
  return (
    <section
      className="w-full bg-[image:var(--lines-shape)] min-h-[calc(100vh-92px)] relative overflow-x-hidden"
      id="about-us"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row pt-42 md:pt-[230px] pb-12 lg:p-0">
          <div className="w-full lg:w-1/2 lg:min-h-[calc(100vh-92px)] flex items-center">
            <div className="text-block text-header-bg">
              <h2 className="font-heading-arabic !text-6xl font-bold leading-24 !mb-4">
                {t("title")}
              </h2>
              <p className="text-xl leading-[35px] font-medium">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 lg:min-h-[calc(100vh-92px)] flex justify-center items-center -order-1 lg:order-2">
            {/* lg */}
            <div className="hidden lg:block relative z-10">
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
            {/* md */}
            <div className="hidden md:block lg:hidden relative z-10 mb-32">
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
            {/* sm */}
            <div className="relative z-10 md:hidden">
              <Image
                src={"/assets/images/cars/black-car.png"}
                width={900}
                height={700}
                className=""
                alt={t("description")}
              />
              <div className="flag absolute top-[-140px] left-[10px] -z-10 rotate-12">
                <Image
                  src={"/assets/images/about-us/saudi-flag.png"}
                  width={250}
                  height={250}
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
