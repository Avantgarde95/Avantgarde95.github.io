"use client";

import { MouseEvent, useRef, useState } from "react";
import { useRouter } from "nextjs-toploader/app";

import allRoutes from "@/common/models/Routes";
import { useLocale } from "@/common/utils/I18nClient";
import { Locale } from "@/common/models/I18n";
import useOutsideClick from "@/common/hooks/useOutsideClick";

const navItems: Array<{ name: string; url: string }> = [
  { name: "Home", url: allRoutes.home.url },
  { name: "Projects", url: allRoutes.projects.url },
  { name: "Musics", url: allRoutes.musics.url },
  { name: "Art", url: allRoutes.art.url },
  // { name: "Blog", url: allRoutes.blog.url },
];

const localeItems: Record<Locale, { name: string; nextLocale: Locale }> = {
  ko: { name: "English", nextLocale: "en" },
  en: { name: "한국어", nextLocale: "ko" },
};

const dimensionX = 20;
const rowStyle = "px-2 py-0.5 whitespace-pre";
const separator = <div className={rowStyle}>+{"-".repeat(dimensionX - 2)}+</div>;

interface AppMenuItemProps {
  label: string;
  onClick: () => void;
}

const AppMenuItem = ({ label, onClick }: AppMenuItemProps) => (
  <button
    className={`group relative block ${rowStyle} font-mono text-base leading-tight tracking-[normal] text-primary`}
    onClick={onClick}
  >
    {`|${" ".repeat(dimensionX - 2)}|`}
    <span className="absolute left-7 top-1/2 -translate-y-1/2 group-hover:text-yellow">{label}</span>
  </button>
);

const AppMenu = () => {
  const router = useRouter();
  const { locale, setLocale } = useLocale();
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(
    menuRef,
    () => {
      if (isOpen) {
        setOpen(false);
      }
    },
    [isOpen, setOpen]
  );

  const handleClickOpen = (event: MouseEvent) => {
    event.stopPropagation();
    setOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="font-mono text-base hover:text-yellow" onClick={handleClickOpen}>{`<Menu/>`}</button>
      <div
        className={`absolute right-0 z-10 origin-top-right scale-0 bg-background font-mono text-base text-primary [transition:transform_200ms,opacity_150ms] ${
          isOpen ? "opacity-1 scale-100" : "scale-0 opacity-0"
        }`}
        ref={menuRef}
      >
        {separator}
        {navItems.map(item => (
          <AppMenuItem
            key={item.name}
            label={`<${item.name}/>`}
            onClick={() => {
              router.push(`/${locale}${item.url}`);
            }}
          />
        ))}
        {separator}
        <AppMenuItem
          label={`${localeItems[locale].name}()`}
          onClick={() => {
            setLocale(localeItems[locale].nextLocale);
          }}
        />
        {separator}
        <AppMenuItem
          label="v1()"
          onClick={() => {
            window.open("https://mypage-v1.vercel.app/", "_blank");
          }}
        />
        <AppMenuItem
          label="v2()"
          onClick={() => {
            window.open("https://mypage-v2.vercel.app/", "_blank");
          }}
        />
        {separator}
      </div>
    </div>
  );
};

export default AppMenu;
