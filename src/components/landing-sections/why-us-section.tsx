import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

const WhyUsSection = async () => {
  const t = await getTranslations("components.WhyUsSection");
  const list = t.raw("list");
  return (
    <section
      className="w-full bg-header-bg relative overflow-x-hidden text-white py-16 before:absolute before:inset-0 before:bg-[image:var(--logo-shape)] before:opacity-10"
      id="why-us"
    >
      <div className="container">
        <div className="">
          <h2 className="font-heading-arabic !text-6xl font-semibold leading-24 !mb-10">
            {t("title")}
          </h2>

          <div className="flex flex-wrap lg:justify-center items-center gap-y-20 gap-x-[100px] xl:gap-x-[200px] relative z-10">
            {list.map(
              (
                item: { title: string; description: string; icon: string },
                idx: number
              ) => {
                return (
                  <div className="flex items-center w-fit" key={idx}>
                    <div className="icon ml-7">
                      <Image
                        src={`/assets/images/icons/why-us/${item["icon"]}`}
                        width={80}
                        height={80}
                        alt={item.title}
                      />
                    </div>
                    <div className="text">
                      <h3 className="font-heading-arabic text-3xl font-semibold mb-4">
                        {item["title"]}
                      </h3>
                      <p className="font-heading-arabic text-lg font-normal max-w-[300px] leading-[28px]">
                        {item["description"]}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
