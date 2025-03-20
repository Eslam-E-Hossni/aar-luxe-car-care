"use client";
import { useRouter } from "@/i18n/navigation";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { TfiWorld } from "react-icons/tfi";

const LangSwitcher = () => {
  const [openCountriesWindow, setOpenCountriesWindow] = useState(false);
  const wrapperRef = useRef(null);
  const router = useRouter(); // Initialize the router

  useClickOutside(wrapperRef, setOpenCountriesWindow);

  // Function to handle locale change
  const handleLocaleChange = (locale: string) => {
    router.push("/", { locale }); // Change the locale
    setOpenCountriesWindow(false); // Close the dropdown
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        className="cursor-pointer flex items-center"
        onClick={() => setOpenCountriesWindow(!openCountriesWindow)}
      >
        <TfiWorld size={23} className="mr-2" color="#b9b9b9" />
      </button>
      {openCountriesWindow && (
        <div
          dir="ltr"
          className="absolute min-w-[150px] py-2 top-[calc(100%+25px)] left-0 xl:left-1/2 xl:-translate-x-1/2 z-10 shadow-md bg-header-bg"
        >
          <div className="w-full">
            <div className="countries">
              <button
                type="button"
                className="country w-full !py-3 !flex gap-x-3 items-center cursor-pointer hover:bg-[#262828] px-4"
                onClick={() => handleLocaleChange("ar")}
              >
                <Image
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg`}
                  width={20}
                  height={20}
                  alt={"SA"}
                />
                <div className="flex gap-x-3 items-center">
                  <p className="name uppercase !text-[14px] !font-heading-en font-medium !text-white">
                    AR
                  </p>
                </div>
              </button>
              <button
                type="button"
                className="country w-full !py-3 !flex gap-x-3 items-center cursor-pointer hover:bg-[#262828] px-4"
                onClick={() => handleLocaleChange("en")}
              >
                <Image
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg`}
                  width={20}
                  height={20}
                  alt={"SA"}
                />
                <div className="flex gap-x-3 items-center">
                  <p className="name uppercase !text-[14px] !font-heading-en font-medium !text-white">
                    EN
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
