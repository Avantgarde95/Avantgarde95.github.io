"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";

import { Locale, defaultLocale } from "@/common/models/I18n";

interface Params {
  locale?: Locale;
}

export function useTranslation<Data extends Record<string, Record<Locale, ReactNode>>>(data: Data) {
  const params = useParams() as Params;
  const { locale } = params;

  function translate(key: keyof Data) {
    return data[key][locale ?? defaultLocale];
  }

  return { translate };
}
