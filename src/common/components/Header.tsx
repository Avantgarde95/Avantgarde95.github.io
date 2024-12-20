import { ReactNode } from "react";

import AppMenu from "@/common/components/AppMenu";

type HeaderProps =
  | {
      title: string;
      titleText?: string;
    }
  | {
      title: Exclude<ReactNode, string>;
      titleText: string;
    };

const Header = ({ title, titleText }: HeaderProps) => {
  const titleLength = typeof title === "string" ? title.length : titleText!.length;

  return (
    <header className="mb-4 flex w-full flex-row items-center">
      <h1 className="relative m-0 mr-auto p-0 font-mono text-3xl font-normal md:text-4xl">
        {title}
        <span
          className="absolute right-0 top-0 z-10 inline-block h-full w-full animate-[typing-reveal_forwards] border-l-4 border-solid border-yellow bg-background"
          style={{
            animationDuration: `${(titleLength < 5 ? 0.4 : 0.2) * titleLength}s`,
            animationTimingFunction: `steps(${titleLength}, end)`,
          }}
        />
      </h1>
      <AppMenu />
    </header>
  );
};

export default Header;
