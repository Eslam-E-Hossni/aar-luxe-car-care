/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { NAVIGATION_MENU } from "./constants/menu";
import BaseButton from "@/components/ui/base-button";

import cls from "classnames";

const NavigationLinks = ({ openMenu, setOpenMenu }: any) => {
  const t = useTranslations("layout.Header");
  return (
    <div
      className={cls(
        "justify-between h-screen transition-all lg:h-auto items-center w-full lg:flex lg:w-auto lg:order-1 bg-header-bg lg:bg-transparent lg:relative lg:opacity-100 lg:translate-x-0 lg:visible lg:top-0 lg:right-0",
        openMenu
          ? "opacity-100 visible relative"
          : "opacity-0 invisible -translate-x-full fixed top-[90px] left-0 w-full h-full"
      )}
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 mb-4 lg:mb-0">
        {NAVIGATION_MENU.map((link, idx) => {
          return (
            <li key={idx} className="text-lg font-medium transition-all group">
              <Link
                href={link.href}
                className="block py-3 pr-4 pl-3 border-b-2 border-gray-500 lg:border-0 lg:hover:text-white lg:p-0 text-gray-300 hover:text-white group-first:text-white"
                aria-current="page"
                onClick={() => setOpenMenu(false)}
              >
                {t(link.text)}
              </Link>
            </li>
          );
        })}
      </ul>
      <div dir="ltr">
        <BaseButton
          type="button"
          className="lg:hidden"
          theme="primary"
          size="header"
        >
          +966 55 782 7776
        </BaseButton>
      </div>
    </div>
  );
};

export default NavigationLinks;
