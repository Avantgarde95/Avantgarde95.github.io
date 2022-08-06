import { ReactNode, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { languageState } from "states/Language";
import StatusBar from "layout/templates/StatusBar";
import Menu from "layout/templates/Menu";
import { resetButton, resetTitle } from "styles/Mixins";

import MenuIcon from "layout/assets/Menu.svg";
import LanguageIcon from "layout/assets/Language.svg";

interface PageProps {
  title: string;
  children: ReactNode;
}

const Page = ({ title, children }: PageProps) => (
  <Container>
    <Inner>
      <StatusBar />
      <Header>
        <MenuButton />
        <Title>{title.toUpperCase()}</Title>
        <LanguageButton />
      </Header>
      <Content>{children}</Content>
    </Inner>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1000px;
`;

const Header = styled.header`
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

const Content = styled.main`
  overflow-y: auto;

  width: 100%;
  flex: 1;
`;

export default Page;
