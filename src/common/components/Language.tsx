import { ReactNode } from "react";
import { useRecoilValue } from "recoil";

import { languageState } from "common/states/Language";

interface FilterProps {
  children: ReactNode;
}

export const Korean = ({ children }: FilterProps) => {
  const language = useRecoilValue(languageState);
  return <>{language === "Korean" && children}</>;
};

export const English = ({ children }: FilterProps) => {
  const language = useRecoilValue(languageState);
  return <>{language === "English" && children}</>;
};
