import styled from "@emotion/styled";
import { css } from "@emotion/react";

import useNow from "hooks/useNow";
import { centerChild } from "styles/Mixins";

import WiFi from "layout/assets/WiFi.svg";
import Signal from "layout/assets/Signal.svg";
import Battery from "layout/assets/Battery.svg";

const StatusBar = () => (
  <Container>
    <Clock />
    <Icon css={firstIconStyle}>
      <WiFi />
    </Icon>
    <Icon>
      <Signal />
    </Icon>
    <Icon>
      <Battery />
    </Icon>
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 22px 24px 10px 24px;
`;

const Clock = () => {
  const { hour, minute } = useNow();

  return (
    <div
      css={css`
        font-size: 14px;
        font-weight: 500;
      `}
    >
      {hour}:{minute}
    </div>
  );
};

const firstIconStyle = css`
  margin-left: auto;
`;

const Icon = styled.div`
  ${centerChild}

  width: 17px;
  height: 17px;
`;

export default StatusBar;
