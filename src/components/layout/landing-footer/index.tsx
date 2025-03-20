import BaseButton from "@/components/ui/base-button";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const paymentMethods = [
  { name: "ApplePay", icon: "ApplePay.png" },
  { name: "GooglePay", icon: "GooglePay.png" },
  { name: "PayPal", icon: "PayPal.png" },
  { name: "Stripe", icon: "Stripe.png" },
  { name: "Mastercard", icon: "Mastercard.png" },
  { name: "Visa", icon: "Visa.png" },
];

const LandingFooter = async () => {
  const t = await getTranslations("layout.Footer");
  const links = t.raw("links");
  return (
    <footer id="footer" className="bg-header-bg">
      <div className="container">
        <div className="footer-inner pt-16 pb-2">
          <div className="w-full text-gray-300">
            <div className="grid justify-center grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 pb-8">
              {links.map(
                (
                  section: {
                    title: string;
                    links: { text: string; link: string }[];
                  },
                  index: number
                ) => (
                  <div key={index}>
                    <h6 className="font-heading-arabic text-lg font-bold mb-2">
                      {section.title}
                    </h6>
                    <ul className="w-fit">
                      {section.links.map(
                        (link: { text: string; link: string }, i: number) => (
                          <li
                            key={i}
                            className="text-gray-500 font-heading-arabic hover:text-white"
                          >
                            <Link href={link.link} className="block py-1.5">
                              {link.text}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )
              )}

              <div className="col-span-2 pt-8 md:pt-0">
                <div>
                  <p className="font-bold font-heading-arabic text-lg font-bold mb-8">
                    {t("newsteller.title")}
                  </p>
                  <form className="flex flex-col lg:flex-row">
                    <input
                      className="border border-[#b9b9b9] h-[51.5px] w-full px-5 outline-none bg-[#F8F8F8] text-black placeholder:text-[#9D9D9D]"
                      type="email"
                      placeholder={t("newsteller.form.input")}
                    />
                    <div className="w-full lg:w-[60%] lg:mr-5 overflow-hidden mt-4 lg:mt-0">
                      <BaseButton
                        type="button"
                        className=""
                        theme="primary"
                        size="footer"
                      >
                        {t("newsteller.form.button")}
                      </BaseButton>
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-x-4 mt-10">
                  {paymentMethods.map((paymentMethod) => {
                    return (
                      <Image
                        key={paymentMethod.name}
                        src={`/assets/images/icons/payment-methods/${paymentMethod.icon}`}
                        width={50}
                        height={50}
                        alt={paymentMethod.name}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col py-2 mx-auto justify-between sm:flex-row text-center text-gray-500">
              <p className="py-4">{t("copyright")}</p>
              <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                {items.map((x, index) => {
                  return <x.icon key={index} className="hover:text-white" />;
                })}
              </div>
            </div>
            <div className="flex flex-col mx-auto justify-center sm:flex-row text-center text-gray-500">
              <div className="py-4 flex items-center justify-center gap-x-3">
                <p>{t("madeBy")}</p>
                <Image
                  src={"/assets/images/10trend-logo.png"}
                  width={70}
                  height={70}
                  alt="ten Trend logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
