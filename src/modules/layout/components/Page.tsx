import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";

import { Language, languageState } from "common/states/Language";
import StatusBar from "modules/layout/components/StatusBar";
import Header from "modules/layout/components/Header";

interface PageProps {
  title: Record<Language, string>;
  children: ReactNode;
}

const Page = ({ title, children }: PageProps) => {
  const language = useRecoilValue(languageState);

  return (
    <Container>
      <Inner>
        <StatusBar />
        <Header title={title[language]} />
        <Content>{children}</Content>
      </Inner>
    </Container>
  );
};

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

const Content = styled.main`
  overflow-y: auto;

  width: 100%;
  flex: 1;
`;

export default Page;
