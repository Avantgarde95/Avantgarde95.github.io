import React from "react";
import styled from "@emotion/styled";

const HomePage = () => <Title>My app!</Title>;

const Title = styled.div`
  box-sizing: border-box;

  padding: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.color.primary};
`;

export default HomePage;
