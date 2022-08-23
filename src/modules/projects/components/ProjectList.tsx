import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";

import useURL from "common/hooks/useURL";
import { English, Korean } from "common/components/Language";
import Link from "common/components/Link";
import Grid from "common/components/Grid";
import { createAnimation, fadeIn, resetLink, wideScreen } from "common/styles/Mixins";

import Projects from "modules/projects/assets/Projects.json";

const ProjectList = () => {
  const onWideScreen = useMediaQuery(wideScreen);

  const items = Projects.map(project => (
    <Item key={project.name}>
      <Preview repositoryURL={project.repositoryURL} imageURL={project.imageURL} alt={project.name} />
      <Name>{project.name}</Name>
    </Item>
  ));

  return (
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
      <Content>
        {onWideScreen ? (
          <Grid cellWidth={cellWidth} cellHeight="340px" maxDimensionX={2}>
            {items}
          </Grid>
        ) : (
          items
        )}
      </Content>
    </Container>
  );
};

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

export default ProjectList;
