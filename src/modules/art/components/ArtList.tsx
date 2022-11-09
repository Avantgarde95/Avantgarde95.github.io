import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IoIosRefresh } from "react-icons/io";
import { FaRegWindowRestore } from "react-icons/fa";
import { BsCode } from "react-icons/bs";

import useForceUpdate from "common/hooks/useForceUpdate";
import Grid from "common/components/Grid";
import { English, Korean } from "common/components/Language";
import { createAnimation, fadeIn, resetButton, wideScreen } from "common/styles/Mixins";

const ArtList = () => {
  const onWideScreen = useMediaQuery(wideScreen);

  const items = works.map(work => <WorkView key={work.name} work={work} />);

  return (
    <Container>
      <Description>
        <Korean>CSS를 주로 사용하여 제작한 작품들입니다.</Korean>
        <English>These are works made mainly using CSS.</English>
      </Description>
      <Content>
        {onWideScreen ? (
          <Grid cellWidth={cellWidth} cellHeight="450px" maxDimensionX={2}>
            {items}
          </Grid>
        ) : (
          items
        )}
      </Content>
    </Container>
  );
};

interface Work {
  name: string;
  demoURL: string;
  codeURL: string;
  scale?: number;
}

const works: Array<Work> = [
  {
    name: "asciirain",
    demoURL: "https://avantgarde95.github.io/asciirain",
    codeURL: "https://github.com/Avantgarde95/asciirain",
    scale: 0.7,
  },
  {
    name: "asciisnow",
    demoURL: "https://avantgarde95.github.io/asciisnow/?image=christmas",
    codeURL: "https://github.com/Avantgarde95/asciisnow",
    scale: 0.7,
  },
  {
    name: "html-birthday-card",
    demoURL: "https://avantgarde95.github.io/html-birthday-card/",
    codeURL: "https://github.com/Avantgarde95/html-birthday-card",
    scale: 0.7,
  },
  {
    name: "simple-christmas-tree",
    demoURL: "https://c6jjj.csb.app/",
    codeURL: "https://codesandbox.io/s/simple-christmas-tree-c6jjj",
  },
  { name: "sun", demoURL: "https://wfxb8f.csb.app/", codeURL: "https://codesandbox.io/s/sun-wfxb8f" },
  {
    name: "cat",
    demoURL: "https://avantgarde95.github.io/cat/cat1.html",
    codeURL: "https://github.com/Avantgarde95/cat",
    scale: 0.9,
  },
  { name: "guitar", demoURL: "https://lqii8k.csb.app/", codeURL: "https://codesandbox.io/s/guitar-lqii8k" },
  {
    name: "sea-and-coconut",
    demoURL: "https://gxfv9i.csb.app/",
    codeURL: "https://codesandbox.io/s/sea-and-coconut-gxfv9i",
    scale: 0.8,
  },
  { name: "doguri", demoURL: "https://ckjtww.csb.app/", codeURL: "https://codesandbox.io/s/doguri-ckjtww" },
  {
    name: "doguri-variations",
    demoURL: "https://d646zl.csb.app/",
    codeURL: "https://codesandbox.io/s/doguri-variations-d646zl",
  },
  {
    name: "infinite-loop-coding-logo",
    demoURL: "https://rj10sv.csb.app/",
    codeURL: "https://codesandbox.io/s/infinite-loop-coding-logo-rj10sv",
  },
  { name: "c2022yh", demoURL: "https://vg3w5j.csb.app/", codeURL: "https://codesandbox.io/s/c2022yh-vg3w5j" },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  overflow-y: auto;

  width: 100%;
  flex: 1;
`;

const descriptionAnimation = createAnimation([fadeIn], "0.8s");

const Description = styled.div`
  ${descriptionAnimation.style}

  text-align: center;

  width: 100%;
  margin-bottom: 30px;
  font-size: 17px;
  font-weight: 400;

  color: ${({ theme }) => theme.color.blue};
`;

const cellWidth = "478px";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: ${cellWidth};
  margin-top: 14px;
  margin-bottom: 14px;
`;

interface WorkViewProps {
  work: Work;
}

const WorkView = ({ work }: WorkViewProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const theme = useTheme();
  const [load, setLoad] = useState(false);
  const { value, forceUpdate } = useForceUpdate();

  const scale = work.scale ?? 1;

  useEffect(() => {
    if (inView && !load) {
      setLoad(true);
    }
  }, [inView, load]);

  const handleClickRefresh = forceUpdate;

  const handleOpenDemo = () => {
    window.open(work.demoURL, "_blank");
  };

  const handleOpenCode = () => {
    window.open(work.codeURL, "_blank");
  };

  return (
    <Item>
      <div
        css={css`
          position: relative;
          overflow: hidden;

          height: 360px;
          width: 90%;
          border: 4px solid ${theme.color.gray1};

          background-color: ${load ? "transparent" : theme.color.gray1};
        `}
        ref={ref}
      >
        {load && (
          <>
            <iframe
              css={css`
                width: ${Math.floor(100 / scale)}%;
                height: ${Math.floor(100 / scale)}%;
                transform-origin: top left;
                transform: scale(${scale});
              `}
              key={value}
              title={work.name}
              src={work.demoURL}
              frameBorder={0}
            />
            <Controls>
              <ControlButton onClick={handleClickRefresh}>
                <IoIosRefresh />
              </ControlButton>
              <ControlButton onClick={handleOpenDemo}>
                <FaRegWindowRestore />
              </ControlButton>
              <ControlButton onClick={handleOpenCode}>
                <BsCode />
              </ControlButton>
            </Controls>
          </>
        )}
      </div>
      <Name>{work.name}</Name>
    </Item>
  );
};

const Controls = styled.div`
  position: absolute;

  top: 0;
  right: 0;

  background-color: ${({ theme }) => theme.color.white};
`;

const ControlButton = styled(Button)`
  ${resetButton}

  text-transform: none;
  overflow-x: hidden;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-size: 20px;
  line-height: normal;

  border-radius: 0;
  background-color: ${({ theme }) => theme.color.white};
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 12px;
  margin-bottom: 14px;
  font-size: 17px;
  font-weight: 400;
`;

export default ArtList;
