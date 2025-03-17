/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslations } from "next-intl";

const GallerySection = () => {
  const t = useTranslations("components");
  return (
    <section
      className="w-full bg-header-bg relative overflow-x-hidden text-white py-16 before:absolute before:inset-0 before:bg-[image:var(--logo-shape)] before:opacity-10"
      id="gellary"
    >
      <div className="container">
        <div className="overflow-hidden">
          <h2 className="font-heading-arabic !text-6xl font-semibold leading-24 !mb-10">
            {t("GallerySection.title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-20">
            <div className="grid gap-4">
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={t("AboutUsSection.description")}
                />
              </div>
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt={t("AboutUsSection.description")}
                />
              </div>
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={t("AboutUsSection.description")}
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={t("AboutUsSection.description")}
                />
              </div>
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={t("AboutUsSection.description")}
                />
              </div>
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/445399/pexels-photo-445399.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={t("AboutUsSection.description")}
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt={t("AboutUsSection.description")}
                />
              </div>
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/1519192/pexels-photo-1519192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt={t("AboutUsSection.description")}
                />
              </div>
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/1383834/pexels-photo-1383834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt={t("AboutUsSection.description")}
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt={t("AboutUsSection.description")}
                />
              </div>
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt={t("AboutUsSection.description")}
                />
              </div>
              <div>
                <img
                  className="max-w-full rounded-lg h-full object-cover"
                  src="https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt={t("AboutUsSection.description")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
