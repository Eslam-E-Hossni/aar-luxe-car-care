"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { carsLogo } from "./constants";
import cls from "classnames";

const PartnersSection = () => {
  const car1AnimationRef = useRef<HTMLInputElement>(null);

  const [runCar, setRunCar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY >=
          (car1AnimationRef?.current?.offsetTop as number) - 300
        ) {
          setRunCar(true);
        }
      });
    }
  }, []);
  return (
    <section
      ref={car1AnimationRef}
      id="cars-logo"
      className="w-full bg-[image:var(--lines-shape)] overflow-hidden relative flex justify-center items-center"
    >
      <div className="w-full h-[350px] top-[calc(50%+50px)] -translate-y-1/2 absolute">
        <Image
          src={"/assets/images/shader2.png"}
          fill
          className="object-cover object-top"
          alt="shape"
        />
      </div>
      <div className="container ">
        <div className="">
          <div className="flex relative items-center justify-center">
            <div className="w-1/4">
              <div className="w-full h-[620px] relative">
                <Image
                  src={"/assets/images/cars/silver-car.png"}
                  fill
                  className={cls(
                    "relative z-10 object-cover mt-[30px] -mr-[25px]",
                    runCar ? "animate-logos-car-moving translate-y-0" : "translate-y-full"
                  )}
                  alt="car"
                />
              </div>
            </div>
            <div className="w-2/3 flex flex-col justify-center mt-2">
              {carsLogo.map((row, idx) => {
                return (
                  <div
                    className="logos flex flex-wrap mb-6 last:mb-0"
                    key={idx}
                  >
                    {row.map((logo) => {
                      return (
                        <div
                          className="logo w-1/4 h-[70px] relative"
                          key={logo.src}
                        >
                          <Image
                            src={`/assets/images/cars-logos/${logo.src}`}
                            fill
                            className="object-contain"
                            alt={logo.alt}
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
      </div>
    </section>
  );
};

export default PartnersSection;
