import { ReactNode } from "react";

import { Locale, defaultLocale } from "@/common/models/I18n";
import { Params } from "@/common/models/Params";

export async function getLocale(params: Promise<Params>) {
  const { locale } = await params;
  return locale ?? defaultLocale;
}

export async function createTranslation<Data extends Record<string, Record<Locale, ReactNode>>>(
  data: Data,
  params: Promise<Params>
) {
  const locale = await getLocale(params);

  function translate(key: keyof Data) {
    return data[key][locale];
  }

  return { translate };
}
