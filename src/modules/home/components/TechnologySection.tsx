import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Button from "@mui/material/Button";

import { createAnimation, fadeIn, resetButton, zoomIn } from "common/styles/Mixins";
import Section from "modules/home/components/Section";

import ReactIcon from "modules/home/assets/React.png";
import JSIcon from "modules/home/assets/JS.png";
import TSIcon from "modules/home/assets/TS.png";
import CSSIcon from "modules/home/assets/CSS.png";
import CPPIcon from "modules/home/assets/CPP.png";
import WebpackIcon from "modules/home/assets/Webpack.png";

const TechnologySection = () => {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const titleTail = selectedName === null ? "" : ` - ${selectedName}`;

  const handleBlurGallery = () => {
    setSelectedName(null);
  };

  const handleClickIconButton = (name: string) => {
    setSelectedName(name);
  };

  return (
    <Section title={{ Korean: `주요기술${titleTail}`, English: `Main technologies${titleTail}` }}>
      <Gallery onBlur={handleBlurGallery}>
        {iconInfos.map(([name, url]) => (
          <IconButton
            css={css`
              background-image: url(${url});
              background-repeat: no-repeat;
            `}
            key={name}
            onClick={() => {
              handleClickIconButton(name);
            }}
          />
        ))}
      </Gallery>
    </Section>
  );
};

const iconInfos: Array<[string, string]> = [
  ["React", ReactIcon.src],
  ["JavaScript", JSIcon.src],
  ["TypeScript", TSIcon.src],
  ["CSS", CSSIcon.src],
  ["C++", CPPIcon.src],
  ["Webpack", WebpackIcon.src],
];

const Gallery = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const iconAnimation = createAnimation([fadeIn, zoomIn], "1s");

const IconButton = styled(Button)`
  ${resetButton}
  ${iconAnimation.style}

  position: relative;
  overflow: hidden;

  min-width: 0;
  min-height: 0;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
`;

export default TechnologySection;
