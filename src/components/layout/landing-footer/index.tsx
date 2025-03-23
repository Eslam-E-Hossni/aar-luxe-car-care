import BaseButton from "@/components/ui/base-button";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaGoogle,
} from "react-icons/fa";

const items = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/share/15qFthD2iu/?mibextid=wwXIfr",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/aarluxe.ksa?igsh=MTcwbnY5NnBpNWt0bg==",
  },
  {
    name: "Twitter",
    icon: FaSnapchat,
    link: "https://www.snapchat.com/add/aarluxe",
  },
  {
    name: "Twitch",
    icon: FaGoogle,
    link: "https://maps.app.goo.gl/u6jj2soZ4qcRMar19?g_st=com.google.maps.preview.copy",
  },
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
                    <h6 className="text-lg font-bold mb-2">{section.title}</h6>
                    <ul className="w-fit">
                      {section.links.map(
                        (link: { text: string; link: string }, i: number) => (
                          <li
                            key={i}
                            className="text-gray-500 hover:text-white"
                          >
                            <p className="block py-1.5">{link.text}</p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )
              )}

              <div className="col-span-2 pt-8 md:pt-0">
                <div>
                  <p className="font-bold text-lg mb-8">
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
              <div className="flex justify-center gap-x-8 sm:w-[300px] pt-4 text-2xl">
                {items.map((x, index) => {
                  return (
                    <a href={x.link} target="_blank" key={index}>
                      <x.icon className="hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col mx-auto justify-center sm:flex-row text-center text-gray-500">
              <div className="py-4 flex items-center justify-center gap-x-3">
                <p>{t("madeBy")}</p>
                <a href="https://www.10trend.ae/" target="_blank">
                  <Image
                    src={"/assets/images/10trend-logo.png"}
                    width={70}
                    height={70}
                    alt="https://www.10trend.ae/ logo from https://aarluxe.online/"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
