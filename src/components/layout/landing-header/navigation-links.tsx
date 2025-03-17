"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { NAVIGATION_MENU } from "./constants/menu";

const NavigationLinks = () => {
  const t = useTranslations("layout.Header");
  return (
    <div className="links">
      <ul className="flex flex-wrap gap-x-7 text-center">
        {NAVIGATION_MENU.map((link, idx) => {
          return (
            <li
              key={idx}
              className="text-lg font-heading-arabic font-medium transition-all"
            >
              <Link href={link.href}>{t(link.text)}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationLinks;
