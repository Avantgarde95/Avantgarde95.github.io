"use client";

import { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import allRoutes from "@/common/models/Routes";

const navItems: Array<{ name: string; url: string }> = [
  { name: "Home", url: allRoutes.home.url },
  { name: "Projects", url: allRoutes.projects.url },
  { name: "Musics", url: allRoutes.musics.url },
  { name: "Art", url: allRoutes.art.url },
];

const dimensionX = 20;
const separator = <div className="px-2 py-1">+{"-".repeat(dimensionX - 2)}+</div>;

const AppMenu = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const router = useRouter();

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
            <MenuItem
              key={item.name}
              className="group !min-h-0 !whitespace-pre !px-2 !py-1 !font-mono !text-base !leading-tight !tracking-[normal] !text-primary"
              onClick={() => {
                router.push(item.url);
              }}
            >
              |&nbsp;
              <span className="group-hover:text-yellow">
                {`<${item.name}/>`}
                {" ".repeat(dimensionX - 7 - item.name.length)}
              </span>
              &nbsp;|
            </MenuItem>
          ))}
          {separator}
        </div>
      </Menu>
    </>
  );
};

export default AppMenu;
