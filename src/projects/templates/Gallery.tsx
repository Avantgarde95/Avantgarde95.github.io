import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";

import useURL from "hooks/useURL";
import { English, Korean } from "components/Language";
import Link from "components/Link";
import Grid from "components/Grid";
import { createAnimation, fadeIn, resetLink } from "styles/Mixins";

import Projects from "projects/assets/Projects.json";

const Gallery = () => (
  <Container>
    <Description>
      <Korean>더 자세한 정보는 </Korean>
      <English>You can see the details at </English>
      <Link
        css={css`
          text-decoration: underline;
        `}
        href="https://github.com/Avantgarde95"
      >
        Github
      </Link>
      <Korean>에 있습니다.</Korean>
      <English>.</English>
    </Description>
    <Grid cellWidth="478px" cellHeight="340px" maxDimensionX={2}>
      {Projects.map(project => (
        <Item key={project.name}>
          <Preview repositoryURL={project.repositoryURL} imageURL={project.imageURL} alt={project.name} />
          <Name>{project.name}</Name>
        </Item>
      ))}
    </Grid>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
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

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 14px;
  margin-bottom: 14px;
`;

interface PreviewProps {
  repositoryURL: string;
  imageURL: string;
  alt: string;
}

const Preview = ({ repositoryURL, imageURL, alt }: PreviewProps) => {
  const { isValidURL } = useURL(imageURL);
  const theme = useTheme();

  return (
    <Link
      css={css`
        ${resetLink}

        box-sizing: border-box;
        display: block;

        height: 264px;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        background-color: ${theme.color.gray1};
      `}
      href={repositoryURL}
    >
      {isValidURL && (
        <img
          css={css`
            width: 100%;
            height: 100%;

            object-fit: contain;
          `}
          src={imageURL}
          alt={alt}
        />
      )}
    </Link>
  );
};

const Name = styled.div`
  text-align: center;

  width: 100%;
  margin-top: 12px;
  margin-bottom: 14px;
  font-size: 17px;
  font-weight: 400;
`;

export default Gallery;
