import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";

import { Language, languageState } from "common/states/Language";

interface SectionProps {
  title: Record<Language, string>;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  const language = useRecoilValue(languageState);

  return (
    <Container>
      <Title>{title[language]}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 28px 24px 24px 24px;

  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
`;

const Title = styled.div`
  font-size: 21px;
  font-weight: 500;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export default Section;
