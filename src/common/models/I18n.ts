export const localeNames = ["ko", "en"] as const;
export type Locale = (typeof localeNames)[number];
export const defaultLocale: Locale = "ko";
