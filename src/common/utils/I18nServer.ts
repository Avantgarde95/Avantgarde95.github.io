import { ReactNode } from "react";

import { Locale, defaultLocale } from "@/common/models/I18n";

interface Params {
  locale?: Locale;
}

export async function createTranslation<Data extends Record<string, Record<Locale, ReactNode>>>(
  data: Data,
  params: Promise<Params>
) {
  const { locale } = await params;

  function translate(key: keyof Data) {
    return data[key][locale ?? defaultLocale];
  }

  return { translate };
}
