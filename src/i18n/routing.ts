import { defineRouting } from "next-intl/routing";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ar", "en"],

  // Used when no locale matches
  defaultLocale: "ar",
});
