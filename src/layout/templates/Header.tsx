import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Button from "@mui/material/Button";

import { languageState } from "states/Language";
import Menu from "layout/templates/Menu";
import { createAnimation, fadeIn, resetButton, resetTitle } from "styles/Mixins";

import MenuIcon from "layout/assets/Menu.svg";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <Container>
    <MenuButton />
    <Title>{title.toUpperCase()}</Title>
    <LanguageButton />
  </Container>
);

const Container = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 18px 20px;
`;

const titleAnimation = createAnimation([fadeIn], "0.5s");

const Title = styled.h1`
  ${resetTitle}

  text-align: center;

  flex: 1;
  font-size: 21px;
  font-weight: 700;

  ${titleAnimation.style}
`;

const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickButton = () => {
    setShowMenu(true);
  };

  return (
    <>
      <Button
        css={css`
          ${resetButton}
          ${headerEndStyle}

          min-width: 0;
          min-height: 0;
          margin-right: auto;
        `}
        onClick={handleClickButton}
      >
        <MenuIcon />
      </Button>
      {<Menu show={showMenu} setShow={setShowMenu} />}
    </>
  );
};

const headerEndStyle = css`
  width: 24px;
  height: 24px;
`;

const LanguageButton = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  const handleClickButton = () => {
    setLanguage(language => (language === "Korean" ? "English" : "Korean"));
  };

  return (
    <>
      <Button
        css={css`
          ${resetButton}
          ${headerEndStyle}

          display: flex;
          flex-direction: row;
          align-items: flex-end;

          min-width: 0;
          min-height: 0;
          margin-left: auto;
        `}
        onClick={handleClickButton}
      >
        <span
          css={css`
            ${createLanguageStyle(language === "Korean")}
          `}
        >
          가
        </span>
        <span
          css={css`
            ${createLanguageStyle(language === "English")}
          `}
        >
          A
        </span>
      </Button>
    </>
  );
};

const createLanguageStyle = (isActive: boolean) => css`
  font-size: ${isActive ? "21px" : "12px"};
  line-height: ${isActive ? "21px" : "12px"};
  opacity: ${isActive ? 1 : 0.5};

  transition: opacity 1s, font-size 0.3s, line-height 0.3s;
`;

export default Header;
