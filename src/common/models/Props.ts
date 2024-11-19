import { ReactNode } from "react";

import { Locale } from "@/common/models/I18n";

export interface CommonChildrenProps {
  children?: ReactNode;
}

export interface CommonParamsProps {
  params: Promise<{ locale?: Locale }>;
}

export interface CommonLayoutProps {
  children: ReactNode;
}

export interface CommonPageProps extends CommonParamsProps {}
