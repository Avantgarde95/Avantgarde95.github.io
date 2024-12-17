import { ReactNode } from "react";

import { Locale } from "@/common/models/I18n";

export interface CommonChildrenProps {
  children?: ReactNode;
}

export interface CommonParamsProps<Params = {}> {
  params: Promise<{ locale?: Locale } & Params>;
}
