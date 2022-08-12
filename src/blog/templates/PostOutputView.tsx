import styled from "@emotion/styled";

import { formatTime } from "utils/StringUtils";
import { Category } from "blog/Category";

export interface PostOutput {
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
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 0 21px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const DateView = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
`;

const Content = styled.div`
  word-break: break-all;

  width: 100%;
  margin-bottom: 16px;
  font-size: 16px;

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

export default PostOutputView;
