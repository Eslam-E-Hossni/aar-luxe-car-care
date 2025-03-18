/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import cls from "classnames";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ServicesSection = () => {
  const t = useTranslations("components.ServicesSection");
  const list = t.raw("cards");

  const car1AnimationRef = useRef<HTMLInputElement>(null);
  const car2AnimationRef = useRef<HTMLInputElement>(null);

  const [runFirstCar, setRunFirstCar] = useState(false);
  const [runSecondCar, setRunSecondCar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY >=
          (car1AnimationRef?.current?.offsetTop as number) - 300
        ) {
          setRunFirstCar(true);
        }

        if (
          window.scrollY - (car1AnimationRef.current?.offsetTop as number) >=
          750
        ) {
          setRunSecondCar(true);
        }
      });
    }
  }, []);
  return (
    <section
      ref={car1AnimationRef}
      id="services-section"
      className="w-full bg-[image:var(--lines-shape)] min-h-[calc(100vh-92px)] relative overflow-hidden py-16"
    >
      <div className="container">
        <div>
          <h2 className="font-heading-arabic !text-6xl font-semibold leading-24">
            {t("title")}
          </h2>
          {list.map((row: any, idx: number) => {
            return (
              <div
                key={idx}
                className="flex flex-wrap even:justify-center odd:justify-between relative z-10 md:even:gap-x-12 lg:even:gap-x-32 py-6"
              >
                {row.map((card: any) => {
                  return (
                    <div
                      key={card["img"]}
                      className="w-full md:w-[340px] lg:w-[375px] relative group mb-16 md:mb-0"
                    >
                      <div className="mb-[9.787%] overflow-hidden rounded-xl relative after:absolute after:inset-0 after:bg-black after:transition-all after:opacity-0 group-hover:after:opacity-40">
                        <Image
                          src={`/assets/images/services/${card.img}`}
                          width={600}
                          height={400}
                          className="group-hover:scale-110 group-hover:-rotate-3 transition-all"
                          alt={card.title}
                        />
                      </div>
                      <div className="mt-[-110px] transition-all group-hover:translate-y-[-10px]">
                        <div className="drop-shadow-[0_5px_10px_#ddd]">
                          <div
                            className="text pt-[35px] px-[20px] pb-[20px] mx-[15px] rounded-[15px_0_15px_15px] relative z-20 bg-white"
                            style={{
                              clipPath:
                                "polygon(0 15%, 100% 0%, 100% 100%, 0% 100%)",
                            }}
                          >
                            <h4 className="font-heading-arabic font-semibold text-2xl mb-4 transition-colors group-hover:text-primary">
                              {card.title}
                            </h4>
                            <p className="text-[#7a7979] leading-[25px]">
                              {card.description}
                            </p>
                            <div className="flex justify-end">
                              <Link
                                href={card.knowMore.link}
                                className="text-[#7a7979] text-sm font-medium transition-colors group-hover:text-primary mt-2"
                              >
                                {card.knowMore.text}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}

          {/* shape */}
          <div className="hidden lg:block absolute left-1/2 top-[calc(50%+60px)] -translate-1/2 w-[400px] h-[400px] bg-[image:var(--services-shape)] bg-cover">
            <div className="rounded-full absolute left-[50.6%] top-[51.6%] -translate-1/2 w-[115px] h-[115px] bg-[image:var(--services-shape-inside)] bg-cover motion-safe:animate-[spin_5s_linear_infinite] duration-initial"></div>
          </div>
          <div className="md:hidden lg:block absolute right-[-505px] bottom-[-300px] -translate-1/2 w-[637px] h-[600px] bg-[image:var(--services-road-shap)] bg-cover -z-10 opacity-40"></div>
          <div className="md:hidden lg:block absolute left-[315px] top-[73px] -translate-1/2 w-[800px] rotate-[290deg] h-[600px] bg-[image:var(--services-road-shap-2)] bg-cover -z-10 opacity-40"></div>

          <div
            className={cls(
              "hidden lg:block absolute w-[200px] h-[350px] rotate-[150deg] bg-[image:var(--services-car-pic)] bg-cover",
              runFirstCar
                ? "animate-car1-moving top-[-93px] left-[70px]"
                : "top-[-400] left-0"
            )}
          ></div>
          <div
            ref={car2AnimationRef}
            className={cls(
              "hidden lg:block absolute w-[200px] h-[350px] rotate-[280deg] bg-[image:var(--services-car-pic)] bg-cover",
              runSecondCar
                ? "animate-car2-moving bottom-[-100px] right-0"
                : "top-[-185] right-[-200px]"
            )}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
