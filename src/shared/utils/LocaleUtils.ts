import { localeNames, type Locale } from "@/shared/constants/I18n";

// ex. ^/(ko|en)
const localeRegex = new RegExp(`^/(${localeNames.join("|")})`);

export function setLocale(locale: Locale) {
  // ex. /ko -> /en
  // ex. /ko/projects -> /en/projects
  window.location.href = `/${locale}${window.location.pathname.replace(localeRegex, "")}`;
}
