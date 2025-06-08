import type { ComponentChildren } from "preact";
import { useState, useRef } from "preact/hooks";

import type { Locale } from "@/shared/constants/I18n";
import allRoutes from "@/shared/constants/Routes";
import useOutsideClick from "@/shared/hooks/useOutsideClick";
import { setLocale } from "@/shared/utils/LocaleUtils";

const navItems: Array<{ name: string; url: string }> = [
  { name: "Home", url: allRoutes.home.url },
  { name: "Projects", url: allRoutes.projects.url },
  { name: "Musics", url: allRoutes.musics.url },
  { name: "Art", url: allRoutes.art.url },
  { name: "Blog", url: allRoutes.blog.url },
];

const localeItems: Record<Locale, { name: string; nextLocale: Locale }> = {
  ko: { name: "English", nextLocale: "en" },
  en: { name: "한국어", nextLocale: "ko" },
};

const dimensionX = 20;
const rowStyle = "px-2 py-0.5 whitespace-pre";
const separator = <div className={rowStyle}>+{"-".repeat(dimensionX - 2)}+</div>;

type AppMenuItemProps = { children: ComponentChildren } & (
  | { type: "link"; url: string }
  | { type: "button"; onClick: () => void }
);

const AppMenuItem = (props: AppMenuItemProps) => {
  const content = (
    <>
      {`|${" ".repeat(dimensionX - 2)}|`}
      <span className="group-hover:text-yellow absolute top-1/2 left-7 -translate-y-1/2">{props.children}</span>
    </>
  );

  const Component = props.type === "link" ? "a" : "button";
  const attrs = props.type === "link" ? { href: props.url, target: "_blank" } : { onClick: props.onClick };

  return (
    <Component
      className={`group relative block cursor-pointer ${rowStyle} text-primary font-mono text-base leading-tight tracking-[normal]`}
      {...attrs}
    >
      {content}
    </Component>
  );
};

interface AppMenuProps {
  locale: Locale;
}

const AppMenu = ({ locale }: AppMenuProps) => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(menuRef, () => {
    if (isOpen) {
      setOpen(false);
    }
  }, [isOpen, setOpen]);

  const handleClickOpen = (event: MouseEvent) => {
    event.stopPropagation();
    setOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="hover:text-yellow cursor-pointer font-mono text-base"
        onClick={handleClickOpen}
      >{`<Menu/>`}</button>
      <div
        className={`bg-background text-primary absolute right-0 z-10 origin-top-right scale-0 font-mono text-base transition-[transform_200ms,opacity_150ms] ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        ref={menuRef}
      >
        {separator}
        {navItems.map(item => (
          <AppMenuItem key={item.name} type="link" url={`/${locale}${item.url}`}>
            {`<${item.name}/>`}
          </AppMenuItem>
        ))}
        {separator}
        <AppMenuItem
          type="button"
          onClick={() => {
            setLocale(localeItems[locale].nextLocale);
          }}
        >
          {`<${localeItems[locale].name}/>`}
        </AppMenuItem>
        {separator}
        <AppMenuItem type="link" url="https://mypage-v1.vercel.app/">
          v1()
        </AppMenuItem>
        <AppMenuItem type="link" url="https://mypage-v2.vercel.app/">
          v2()
        </AppMenuItem>
        {separator}
      </div>
    </div>
  );
};

export default AppMenu;
