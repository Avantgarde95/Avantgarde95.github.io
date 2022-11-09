import { MouseEvent } from "react";
import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";
import Drawer from "@mui/material/Drawer";
import Button, { ButtonProps } from "@mui/material/Button";

import useScreen from "common/hooks/useScreen";
import NextLink from "common/components/NextLink";
import { resetButton, resetLink } from "common/styles/Mixins";

import CloseMenu from "modules/layout/assets/CloseMenu.svg";

interface MenuProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

const Menu = ({ show, setShow }: MenuProps) => {
  const theme = useTheme();
  const { isWide } = useScreen();

  const handleClickPaper = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <Drawer
      PaperProps={{
        sx: {
          width: "284px",
          backgroundColor: theme.color.white,
        },
        onClick: handleClickPaper,
      }}
      anchor="left"
      open={show}
      onClick={handleCloseModal}
      hideBackdrop={isWide}
    >
      <Controls>
        <CloseButton onClick={handleCloseModal}>
          <CloseMenu />
        </CloseButton>
      </Controls>
      <EachLink href="/">Home</EachLink>
      <EachLink href="https://avant-resume.vercel.app/">Resume</EachLink>
      <EachLink href="/projects">Projects</EachLink>
      <EachLink href="/musics">Musics</EachLink>
      <EachLink href="/art">Art</EachLink>
      <EachLink href="/blog">Blog</EachLink>
      <EachLink href="https://github.com/Avantgarde95">GitHub</EachLink>
    </Drawer>
  );
};

const Controls = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 52px;
  margin-bottom: 24px;
`;

const CloseButton = styled.button`
  ${resetButton}

  margin-left: auto;
  margin-right: 14px;
`;

const EachLink = (props: ButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      css={css`
        ${resetLink}

        text-transform: none;
        overflow-x: hidden;
        white-space: nowrap;
        box-sizing: border-box;
        display: block;

        width: 100%;
        height: 44px;
        min-width: 0;
        min-height: 0;
        padding: 0;
        padding-top: 14px;
        padding-left: 24px;
        font-size: 19px;
        font-weight: 700;
        line-height: normal;
        letter-spacing: normal;

        border-radius: 0;
        border-bottom: 0.5px solid ${theme.color.black};
      `}
      LinkComponent={NextLink}
      {...props}
    />
  );
};

export default Menu;
