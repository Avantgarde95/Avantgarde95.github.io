import { atom } from "recoil";

export type Language = "Korean" | "English";

export const languageState = atom<Language>({
  key: "language",
  default: "Korean",
});
