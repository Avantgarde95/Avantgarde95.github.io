import { ReactNode } from "react";

import { Locale } from "@/common/models/I18n";

export interface CommonLayoutProps {
  children: ReactNode;
}

export interface CommonPageProps {
  params: Promise<{ locale?: Locale }>;
}
