import type { GetStaticPaths } from "astro";

import { defaultLocale, localeNames, type Locale } from "@/shared/constants/I18n";

// ex. ^/(ko|en)
const localeRegex = new RegExp(`^/(${localeNames.join("|")})`);

export function getLocale(params: Record<string, string | undefined>) {
  return (params.locale ?? defaultLocale) as Locale;
}

export function setLocale(locale: Locale) {
  // ex. /ko -> /en
  // ex. /ko/projects -> /en/projects
  window.location.href = `/${locale}${window.location.pathname.replace(localeRegex, "")}`;
}

export const getStaticPaths: GetStaticPaths = () =>
  localeNames.map(locale => ({
    params: { locale },
  }));
