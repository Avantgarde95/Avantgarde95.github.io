import { ReactNode } from "react";
import styled from "@emotion/styled";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <Container>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Container>
);

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
