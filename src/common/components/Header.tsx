import { ReactNode } from "react";

import AppMenu from "@/common/components/AppMenu";

interface HeaderProps {
  title: ReactNode;
}

const Header = ({ title }: HeaderProps) => (
  <header className="flex w-full flex-row items-center">
    <h1 className="m-0 mr-auto p-0 font-mono text-4xl font-normal">{title}</h1>
    <AppMenu />
  </header>
);

export default Header;
