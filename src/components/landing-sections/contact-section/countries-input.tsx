"use client";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import React, { useRef, useState } from "react";
import CountryCodes from "../constants/CountryCodes.json";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const CountriesInput = () => {
  // form
  const [mobileNumberState, setMobileNumberState] = useState("");

  // country
  const [currentCountry, setCurrentCountry] = useState("SA");
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(CountryCodes);
  const [openCountriesWindow, setOpenCountriesWindow] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    setSearchCountry(target);

    // Filter the original list (CountryCodes) and update filteredCountries
    const filtered = CountryCodes.filter(
      (country) =>
        country.code.toLowerCase().includes(target.toLowerCase()) ||
        country.name.toLowerCase().includes(target.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleSelectCountry = (country: {
    code: string;
    dial_code: string;
  }) => {
    setCurrentCountry(country.code);
    setOpenCountriesWindow(false);
    setSearchCountry("");
    setFilteredCountries(CountryCodes);
  };

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobileNumberState(value);
  };

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, setOpenCountriesWindow);
  return (
    <div
      dir="rtl"
      className="form-controll w-4/5 lg:w-1/3 border border-[#b9b9b9] h-[55px] pr-3 flex items-center"
    >
      <div className="relative" ref={wrapperRef}>
        <button
          type="button"
          className="cursor-pointer flex items-center"
          onClick={() => setOpenCountriesWindow(!openCountriesWindow)}
        >
          <Image
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${currentCountry}.svg`}
            width={30}
            height={30}
            alt="uaeflag"
          />
          <FaChevronDown size={20} className="mr-2" color="#b9b9b9" />
        </button>
        {openCountriesWindow && (
          <div
            dir="ltr"
            className="absolute min-w-[300px] md:min-w-[380px] max-h-[300px] overflow-y-scroll py-4 top-[calc(100%+25px)] -right-3 z-10 shadow-md bg-white"
          >
            <div className="w-full">
              <div className="search px-7">
                <input
                  dir="rtl"
                  type="text"
                  placeholder="اختر البلد..."
                  className="border border-[#b9b9b9] h-[35px] w-full px-3"
                  value={searchCountry}
                  onChange={handleInputChange}
                />
              </div>
              <div className="countries mt-4 divide-y divide-[#b9b9b9]">
                {filteredCountries.map((country) => {
                  return (
                    <button
                      key={country.code}
                      type="button"
                      className="country w-full !py-3 !flex gap-x-6 items-center cursor-pointer hover:bg-[#D9D9D9] px-7"
                      onClick={() => handleSelectCountry(country)}
                    >
                      <Image
                        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                        width={25}
                        height={25}
                        alt={country.code}
                      />
                      <div className="flex gap-x-3 items-center">
                        <p className="name uppercase !text-[14px] md:!text-base !font-heading-en font-medium !text-header-bg">
                          {country.name}
                        </p>
                        <p className="dial-code text-sm text-[#4B5563] -mt-0.5">
                          {country.dial_code}
                        </p>
                      </div>
                      <div className="flag"></div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <input
        type="text"
        className="h-full w-full pr-3 outline-none"
        value={mobileNumberState}
        placeholder="0000 000 00 966+"
        onChange={(e) => handleEmailInputChange(e)}
      />
    </div>
  );
};

export default CountriesInput;
