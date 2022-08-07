import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";

import Grid from "components/Grid";
import { createAnimation, fadeIn, resetButton } from "styles/Mixins";

import Musics from "data/Musics.json";

const Gallery = () => {
  const [currentCategory, setCurrentCategory] = useState<Category>("Guitar");

  return (
    <Container>
      <Categories>
        {Object.keys(categoryMap).map(category => (
          <CategoryButton
            key={category}
            onClick={() => {
              setCurrentCategory(category as Category);
            }}
          >
            {category}
          </CategoryButton>
        ))}
      </Categories>
      <Grid cellWidth="478px" cellHeight="340px" maxDimensionX={2}>
        {categoryMap[currentCategory].map(videoID => (
          <Item key={videoID}>
            <Preview videoID={videoID} />
          </Item>
        ))}
      </Grid>
    </Container>
  );
};

const categoryMap = {
  Guitar: Musics.myGuitarPlayings,
  Piano: Musics.myPianoPlayings,
  Pieces: Musics.myPieces,
} as const;

type Category = keyof typeof categoryMap;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const categoryAnimation = createAnimation([fadeIn], "0.8s");

const Categories = styled.div`
  ${categoryAnimation.style}

  text-align: center;

  width: 100%;
  margin-bottom: 30px;
  font-size: 17px;
  font-weight: 400;

  color: ${({ theme }) => theme.color.blue};
`;

const CategoryButton = styled.button`
  ${resetButton}

  width: 56px;

  &:not(:first-of-type) {
    margin-left: 16px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 14px;
  margin-bottom: 14px;
`;

interface PreviewProps {
  videoID: string;
}

const Preview = ({ videoID }: PreviewProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const theme = useTheme();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (inView && !load) {
      setLoad(true);
    }
  }, [inView, load]);

  return (
    <div
      css={css`
        position: relative;

        width: 90%;
        height: 0;
        padding-bottom: 56.25%;

        background-color: ${theme.color.gray1};
      `}
      ref={ref}
    >
      {load && (
        <iframe
          css={css`
            position: absolute;

            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          `}
          title={`Video ${videoID}`}
          frameBorder={0}
          allowFullScreen={true}
          src={`https://www.youtube.com/embed/${videoID}`}
        />
      )}
    </div>
  );
};

export default Gallery;
