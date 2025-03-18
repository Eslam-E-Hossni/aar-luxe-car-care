"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavigationLinks from "./navigation-links";
import BaseButton from "@/components/ui/base-button";
import cls from "classnames";

const LandingHeader = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
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
    <header
      id="header"
      className={cls(
        "fixed left-0 top-0 w-full z-50 text-white transition-all",
        isHeaderActive && "bg-header-bg",
        openMenu && "bg-header-bg lg:bg-none"
      )}
    >
      <nav className="container">
        <div
          className={cls(
            "inner transition-all",
            isHeaderActive ? "py-4" : "py-6"
          )}
        >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
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

            <div className="flex items-center lg:order-2">
              <div className="actions" dir="ltr">
                <BaseButton
                  type="button"
                  className="hidden lg:block"
                  theme="primary"
                  size="header"
                >
                  +966 55 782 7776
                </BaseButton>
              </div>
              {/* <Link
                href="/"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link> */}
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 lg:hidden outline-none"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <label className="hamburger">
                  <input
                    type="checkbox"
                    onChange={() => setOpenMenu(!openMenu)}
                  />
                  <svg viewBox="0 0 32 32">
                    <path
                      className="line line-top-bottom"
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path className="line" d="M7 16 27 16"></path>
                  </svg>
                </label>
              </button>
            </div>
            <NavigationLinks openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </div>
        </div>
      </nav>
    </header>
    // <div
    //   id="header"
    //   className={cls(
    //     "fixed left-0 top-0 w-full z-50 text-white transition-all",
    //     isHeaderActive ? "bg-header-bg" : "bg-transparent"
    //   )}
    // >
    //   <div className="container">
    //     <div
    //       className={cls(
    //         "inner flex items-center justify-between transition-all",
    //         isHeaderActive ? "py-4" : "py-6"
    //       )}
    //     >
    //       <NavigationLinks />
    //       <div className="actions" dir="ltr">
    //         <BaseButton type="button" className="" theme="primary" size="header">+966 55 782 7776</BaseButton>
    //       </div>
    //       {/* <div className="hamburger-menu"></div> */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default LandingHeader;
