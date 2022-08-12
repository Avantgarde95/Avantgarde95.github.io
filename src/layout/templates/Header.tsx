import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Menu from "layout/templates/Menu";
import { resetButton, resetTitle } from "styles/Mixins";

import MenuIcon from "layout/assets/Menu.svg";
import LanguageIcon from "layout/assets/Language.svg";
import { languageState } from "states/Language";

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

const Title = styled.h1`
  ${resetTitle}

  text-align: center;

  flex: 1;
  font-size: 21px;
  font-weight: 700;
`;

const headerEndStyle = css`
  width: 24px;
  height: 24px;
`;

const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickButton = () => {
    setShowMenu(true);
  };

  return (
    <>
      <button
        css={css`
          ${resetButton}
          ${headerEndStyle}

          margin-right: auto;
        `}
        onClick={handleClickButton}
      >
        <MenuIcon />
      </button>
      {<Menu show={showMenu} setShow={setShowMenu} />}
    </>
  );
};

const LanguageButton = () => {
  const setLanguage = useSetRecoilState(languageState);

  const handleClickButton = () => {
    setLanguage(language => (language === "Korean" ? "English" : "Korean"));
  };

  return (
    <>
      <button
        css={css`
          ${resetButton}
          ${headerEndStyle}

          margin-left: auto;
        `}
        onClick={handleClickButton}
      >
        <LanguageIcon />
      </button>
    </>
  );
};

export default Header;
