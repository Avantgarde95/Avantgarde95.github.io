import styled from "@emotion/styled";

import Link from "components/Link";
import Section from "home/components/Section";
import { createAnimation, fadeIn, putShadow, resetLink } from "styles/Mixins";

import YouTube from "home/assets/YouTube.svg";
import GitHub from "home/assets/GitHub.svg";
import Facebook from "home/assets/Facebook.svg";
import Instagram from "home/assets/Instagram.svg";
import Blog from "home/assets/Blog.svg";

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

const EachLink = styled(Link)`
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

  background-color: ${({ theme }) => theme.color.gray1};

  svg {
    width: 28px;
  }
`;

const Label = styled.span`
  margin-left: 13px;
  font-size: 15px;
  font-weight: 500;
`;

export default LinksSection;
