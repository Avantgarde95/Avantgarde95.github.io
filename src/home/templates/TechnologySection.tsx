import { ElementType, useState } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { rgba } from "polished";

import Section from "home/components/Section";
import { centerAsAbsolute, centerChild, createAnimation, fadeIn, resetButton, zoomIn } from "styles/Mixins";

import ReactIcon from "home/assets/React.svg";
import JSIcon from "home/assets/JS.svg";
import TSIcon from "home/assets/TS.svg";
import CSSIcon from "home/assets/CSS.svg";
import CPPIcon from "home/assets/CPP.svg";
import WebpackIcon from "home/assets/Webpack.svg";

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
        {iconInfos.map(([name, Icon]) => (
          <IconButton
            key={name}
            onClick={() => {
              handleClickIconButton(name);
            }}
          >
            <Icon />
          </IconButton>
        ))}
      </Gallery>
    </Section>
  );
};

const iconInfos: Array<[string, ElementType]> = [
  ["React", ReactIcon],
  ["JavaScript", JSIcon],
  ["TypeScript", TSIcon],
  ["CSS", CSSIcon],
  ["C++", CPPIcon],
  ["Webpack", WebpackIcon],
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
