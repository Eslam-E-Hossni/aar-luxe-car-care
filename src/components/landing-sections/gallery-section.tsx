import { getTranslations } from "next-intl/server";
import Image from "next/image";

const IMAGES_SRC = [
  [
    "/assets/images/gallery/1.jpeg",
    "/assets/images/gallery/2.jpeg",
    "/assets/images/gallery/3.webp",
  ],
  [
    "/assets/images/gallery/4.webp",
    "/assets/images/gallery/5.jpeg",
    "/assets/images/gallery/6.webp",
  ],
  [
    "/assets/images/gallery/7.webp",
    "/assets/images/gallery/8.webp",
    "/assets/images/gallery/9.webp",
  ],
  [
    "/assets/images/gallery/10.webp",
    "/assets/images/gallery/11.jpeg",
    "/assets/images/gallery/12.jpeg",
  ],
];

const GallerySection = async () => {
  const t = await getTranslations("components");
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
            {IMAGES_SRC.map((row: string[], idx: number) => {
              return (
                <div className="grid gap-4" key={idx}>
                  {row.map((imgSrc: string) => {
                    return (
                      <div className="relative" key={imgSrc}>
                        <Image
                          src={imgSrc}
                          className="max-w-full rounded-lg h-full object-cover"
                          width={400}
                          height={400}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
