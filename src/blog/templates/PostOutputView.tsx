import styled from "@emotion/styled";
import { DiscussionEmbed } from "disqus-react";

import { formatTime } from "utils/StringUtils";
import { Category } from "blog/Category";
import Link from "components/Link";
import { resetLink } from "styles/Mixins";

export interface PostOutput {
  key: string;
  title: string;
  time: number;
  category: Category;
  content: string;
}

interface PostOutputViewProps {
  output: PostOutput;
}

const PostOutputView = ({ output }: PostOutputViewProps) => (
  <Container>
    <Title>{output.title}</Title>
    <DateView>{formatTime(output.time)}</DateView>
    <Content dangerouslySetInnerHTML={{ __html: output.content }} />
    <Others>
      Category: <CategoryLink>{output.category}</CategoryLink>
    </Others>
    <DiscussionEmbed
      shortname={"Avantgarde95"}
      config={{
        url: `https://avantgarde95.github.io/blog/${output.key}`,
        identifier: output.title,
        title: output.title,
      }}
    />
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 0 21px;
`;

const Title = styled.div`
  margin-bottom: 2px;
  font-size: 20px;
  font-weight: bold;
`;

const DateView = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
`;

const Content = styled.div`
  word-break: break-all;

  width: 100%;
  margin-bottom: 8px;
  font-size: 16px;
  border-top: 1px solid ${({ theme }) => theme.color.gray2};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray2};

  pre {
    overflow-x: auto;
    box-sizing: border-box;

    padding: 8px;
    font-family: "Inconsolata", monospace;
    background-color: #1e1e1e;
  }

  code {
    font-family: "Inconsolata", monospace;
  }
`;

const Others = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
`;

const CategoryLink = styled(Link)`
  ${resetLink}

  color: ${({ theme }) => theme.color.blue};
`;

export default PostOutputView;
