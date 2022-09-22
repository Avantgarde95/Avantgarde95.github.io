import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";
import Button, { ButtonProps } from "@mui/material/Button";

import NextLink from "common/components/NextLink";
import Section from "modules/home/components/Section";
import { createAnimation, fadeIn, putShadow, resetLink } from "common/styles/Mixins";

import YouTube from "modules/home/assets/YouTube.svg";
import GitHub from "modules/home/assets/GitHub.svg";
import Facebook from "modules/home/assets/Facebook.svg";
import Instagram from "modules/home/assets/Instagram.svg";
import Blog from "modules/home/assets/Blog.svg";

const LinksSection = () => (
  <Section title={{ Korean: "SNS", English: "SNS" }}>
    <EachLink href="https://www.youtube.com/user/Scottparkmusic">
      <YouTube />
      <Label>YouTube</Label>
    </EachLink>
    <EachLink href="https://github.com/Avantgarde95">
      <GitHub />
      <Label>GitHub</Label>
    </EachLink>
    <EachLink href="https://www.facebook.com/s.ramanujan">
      <Facebook />
      <Label>Facebook</Label>
    </EachLink>
    <EachLink href="https://www.instagram.com/hunminpark95">
      <Instagram />
      <Label>Instagram</Label>
    </EachLink>
    <EachLink href="https://avantgarde95.github.io/blog">
      <Blog />
      <Label>Blog</Label>
    </EachLink>
  </Section>
);

const iconAnimation = createAnimation([fadeIn], "1.5s");

const EachLink = (props: ButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      css={css`
        ${resetLink}
        ${putShadow}
        ${iconAnimation.style}

        box-sizing: border-box;
        display: inline-flex;
        flex-direction: row;
        align-items: center;

        height: 44px;
        margin-right: 24px;
        margin-bottom: 14px;
        padding-left: 14px;
        padding-right: 14px;

        background-color: ${theme.color.gray1};

        svg {
          width: 28px;
        }
      `}
      LinkComponent={NextLink}
      {...props}
    />
  );
};

const Label = styled.span`
  margin-left: 13px;
  font-size: 15px;
  font-weight: 500;
`;

export default LinksSection;
