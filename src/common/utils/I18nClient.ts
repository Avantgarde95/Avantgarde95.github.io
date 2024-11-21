"use client";

import { ReactNode } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";

import { Locale, defaultLocale, localeNames } from "@/common/models/I18n";
import { Params } from "@/common/models/Params";

// ex. ^/(ko|en)
const localeRegex = new RegExp(`^/(${localeNames.join("|")})`);

export function useLocale() {
  const params = useParams() as Params;
  const pathname = usePathname();
  const router = useRouter();

  function setLocale(newLocale: Locale) {
    // ex. /ko -> /en
    // ex. /ko/projects -> /en/projects
    router.push(`/${newLocale}${pathname.replace(localeRegex, "")}`);
  }

  return { locale: params.locale ?? defaultLocale, setLocale };
}

export function useTranslation<Data extends Record<string, Record<Locale, ReactNode>>>(data: Data) {
  const { locale } = useLocale();

  function translate(key: keyof Data) {
    return data[key][locale];
  }

  return { translate };
}
