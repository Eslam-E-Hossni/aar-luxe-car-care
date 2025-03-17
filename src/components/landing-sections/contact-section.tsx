"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import BaseButton from "../ui/base-button";
import Image from "next/image";
import CountryCodes from "./constants/CountryCodes.json";
import { useTranslations } from "next-intl";

const ContactSection = () => {
  const t = useTranslations("components.ContactUsSection");

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

  return (
    <section id="contact-form" className="">
      <div className="inner pb-12">
        <div className="flex flex-col">
          <div className="min-h-[calc(40vh)] bg-header-bg">
            <div className="container">
              <div className="py-12">
                <div className="flex justify-center">
                  <div className="h-full text-center">
                    <h2 className="font-heading-arabic  !text-5xl font-semibold text-white mb-5">
                      {t("title")}
                    </h2>
                    <p className="font-heading-arabic text-lg w-[700px] text-white leading-[32px]">
                      {t("description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[calc(60vh-92px)]">
            <div className="container">
              <div className="flex">
                <div className="w-full bg-white mt-[-50px] rounded-2xl py-12 shadow-md">
                  <form className="w-full">
                    <div className="form-group flex items-center justify-center gap-x-10">
                      <div className="form-controll w-1/3">
                        {/* <UserRound /> */}
                        <input
                          type="text"
                          className="border border-[#b9b9b9] h-[55px] w-full px-5 outline-none"
                          name=""
                          id=""
                          placeholder={t("form.name")}
                        />
                      </div>
                      <div
                        dir="rtl"
                        className="form-controll w-1/3 border border-[#b9b9b9] h-[55px] pr-3 flex items-center"
                      >
                        <div className="relative">
                          <button
                            type="button"
                            className="cursor-pointer flex items-center block"
                            onClick={() =>
                              setOpenCountriesWindow(!openCountriesWindow)
                            }
                          >
                            <Image
                              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${currentCountry}.svg`}
                              width={30}
                              height={30}
                              alt="uaeflag"
                            />
                            <FaChevronDown
                              size={20}
                              className="mr-2"
                              color="#b9b9b9"
                            />
                          </button>
                          {openCountriesWindow && (
                            <div
                              dir="ltr"
                              className="absolute min-w-[350px] max-h-[300px] overflow-y-scroll py-4 top-[calc(100%+25px)] -right-3 z-10 shadow-md bg-white"
                            >
                              <div>
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
                                        onClick={() =>
                                          handleSelectCountry(country)
                                        }
                                      >
                                        <Image
                                          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                                          width={25}
                                          height={25}
                                          alt={country.code}
                                        />
                                        <div className="flex gap-x-3 items-center">
                                          <p className="name uppercase !font-heading-en font-medium !text-header-bg">
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
                    </div>
                    <div className="form-group flex justify-center mt-6">
                      <div className="form-controll w-[calc(66.666%+40px)]">
                        {/* <Mail /> */}
                        <textarea
                          name=""
                          id=""
                          className="w-full border border-[#b9b9b9] h-[200px] w-full px-5 py-5 outline-none"
                          placeholder={t("form.message")}
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group flex justify-center mt-6 overflow-hidden">
                      <div className="w-[calc(66.666%+40px)]">
                        <BaseButton
                          type="button"
                          theme="primary"
                          size="contact"
                        >
                          {t("form.submit")}
                        </BaseButton>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
