import BaseButton from "../../ui/base-button";
import { getTranslations } from "next-intl/server";
import CountriesInput from "./countries-input";

const ContactSection = async ({ locale }: { locale: string }) => {
  const t = await getTranslations("components.ContactUsSection");

  return (
    <section id="contact-us" className="">
      <div className="inner pb-12">
        <div className="flex flex-col">
          <div className="min-h-[calc(40vh)] bg-header-bg">
            <div className="container">
              <div className="py-12">
                <div className="flex justify-center">
                  <div className="h-full text-center">
                    <h2 className="!text-5xl font-semibold text-white mb-5">
                      {t("title")}
                    </h2>
                    <p className="text-lg lg:w-[700px] text-white leading-[32px]">
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
                    <div className="form-group flex flex-wrap items-center justify-center gap-x-10">
                      <div className="form-controll w-4/5 lg:w-1/3 mb-6 lg:mb-0">
                        <input
                          type="text"
                          className="border border-[#b9b9b9] h-[55px] w-full px-5 outline-none"
                          name=""
                          id=""
                          placeholder={t("form.name")}
                        />
                      </div>
                      <CountriesInput locale={locale} />
                    </div>
                    <div className="form-group flex justify-center mt-6">
                      <div className="form-controll w-4/5 lg:w-[calc(66.666%+40px)]">
                        {/* <Mail /> */}
                        <textarea
                          name=""
                          id=""
                          className="w-full border border-[#b9b9b9] h-[200px] px-5 py-5 outline-none"
                          placeholder={t("form.message")}
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group flex justify-center mt-6 overflow-hidden">
                      <div className="w-4/5 lg:w-[calc(66.666%+40px)]">
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
