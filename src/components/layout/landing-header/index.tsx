"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavigationLinks from "./navigation-links";
import BaseButton from "@/components/ui/base-button";
import cls from "classnames";

const LandingHeader = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 90) {
          setIsHeaderActive(true);
        } else {
          setIsHeaderActive(false);
        }
      });
    }
  }, []);
  return (
    <div
      id="header"
      className={cls(
        "fixed left-0 top-0 w-full z-50 text-white transition-all",
        isHeaderActive ? "bg-header-bg" : "bg-transparent"
      )}
    >
      <div className="container">
        <div
          className={cls(
            "inner flex items-center justify-between transition-all",
            isHeaderActive ? "py-4" : "py-6"
          )}
        >
          <div className="logo bg-[#D5D5D5] z-10 w-fit relative before:absolute before:inset-0 before:bg-[image:var(--logo-shape)] before:bg-cover before:-z-10">
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                width={60}
                height={60}
                alt="AAR LUXE CAR CARE Logo"
              />
            </Link>
          </div>
          <NavigationLinks />
          <div className="actions" dir="ltr">
            <BaseButton type="button" className="" theme="primary" size="header">+966 55 782 7776</BaseButton>
          </div>
          {/* <div className="hamburger-menu"></div> */}
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
