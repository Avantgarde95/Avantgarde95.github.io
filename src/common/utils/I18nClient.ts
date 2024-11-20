"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";

import { Locale, defaultLocale } from "@/common/models/I18n";

interface Params {
  locale?: Locale;
}

export function useLocale() {
  const params = useParams() as Params;
  const { locale } = params;

  return locale ?? defaultLocale;
}

export function useTranslation<Data extends Record<string, Record<Locale, ReactNode>>>(data: Data) {
  const locale = useLocale();

  function translate(key: keyof Data) {
    return data[key][locale];
  }

  return { translate };
}
