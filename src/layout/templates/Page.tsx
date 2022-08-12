import { ReactNode } from "react";
import styled from "@emotion/styled";

import StatusBar from "layout/templates/StatusBar";
import Header from "layout/templates/Header";

interface PageProps {
  title: string;
  children: ReactNode;
}

const Page = ({ title, children }: PageProps) => (
  <Container>
    <Inner>
      <StatusBar />
      <Header title={title} />
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

const Content = styled.main`
  overflow-y: auto;

  width: 100%;
  flex: 1;
`;

export default Page;
