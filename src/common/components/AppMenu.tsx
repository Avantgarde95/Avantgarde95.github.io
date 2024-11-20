"use client";

import { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import allRoutes from "@/common/models/Routes";
import { useLocale } from "@/common/utils/I18nClient";
import { Locale } from "@/common/models/I18n";

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
const rowStyle = "!px-2 !py-0.5";
const separator = <div className={rowStyle}>+{"-".repeat(dimensionX - 2)}+</div>;

interface AppMenuItemProps {
  label: string;
  onClick: () => void;
}

const AppMenuItem = ({ label, onClick }: AppMenuItemProps) => (
  <MenuItem
    className={`group !relative !min-h-0 !whitespace-pre ${rowStyle} !font-mono !text-base !leading-tight !tracking-[normal] !text-primary`}
    onClick={onClick}
  >
    {`|${" ".repeat(dimensionX - 2)}|`}
    <span className="absolute left-7 top-1/2 -translate-y-1/2 group-hover:text-yellow">{label}</span>
  </MenuItem>
);

const AppMenu = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const router = useRouter();
  const { locale, setLocale } = useLocale();

  const isOpen = anchor !== null;

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <>
      <button className="font-mono text-base hover:text-yellow" onClick={handleOpen}>{`<Menu/>`}</button>
      <Menu
        slotProps={{
          paper: {
            className: "!bg-background [&_.MuiList-root]:p-0",
          },
        }}
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        elevation={0}
      >
        <div className="font-mono text-base text-primary">
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
        </div>
      </Menu>
    </>
  );
};

export default AppMenu;
