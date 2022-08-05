import { ElementType, useState } from "react";
import styled from "@emotion/styled";
import { rgba } from "polished";

import Section from "home/components/Section";
import { centerAsAbsolute, centerChild, resetButton } from "styles/Mixins";

import ReactIcon from "home/assets/React.svg";
import JSIcon from "home/assets/JS.svg";
import TSIcon from "home/assets/TS.svg";
import CSSIcon from "home/assets/CSS.svg";
import CPPIcon from "home/assets/CPP.svg";
import WebpackIcon from "home/assets/Webpack.svg";

const TechnologySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleBlurGallery = () => {
    setSelectedIndex(null);
  };

  const handleClickIconButton = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Section title="주요기술">
      <Gallery onBlur={handleBlurGallery}>
        {iconInfos.map(([name, Icon], index) => (
          <IconButton
            key={index}
            onClick={() => {
              handleClickIconButton(index);
            }}
          >
            <Icon />
            {selectedIndex === index && <Name>{name}</Name>}
          </IconButton>
        ))}
      </Gallery>
    </Section>
  );
};

const iconInfos: Array<[string, ElementType]> = [
  ["React", ReactIcon],
  ["Java\nScript", JSIcon],
  ["Type\nScript", TSIcon],
  ["CSS", CSSIcon],
  ["C++", CPPIcon],
  ["Web\npack", WebpackIcon],
];

const Gallery = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const IconButton = styled.button`
  ${resetButton}

  position: relative;
  overflow: hidden;

  width: 56px;
  height: 56px;
  flex-shrink: 0;
`;

const Name = styled.span`
  ${centerChild}
  ${centerAsAbsolute}

  position: absolute;

  width: 48px;
  height: 48px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${({ theme }) => rgba(theme.color.gray3, 0.5)};
`;

export default TechnologySection;
