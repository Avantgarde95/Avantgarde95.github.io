import styled from "@emotion/styled";

import { formatTime } from "utils/StringUtils";
import { Category } from "blog/Category";
import Link from "components/Link";
import { resetLink } from "styles/Mixins";

export interface PostPreview {
  key: string;
  title: string;
  time: number;
  category: Category;
  content: string;
}

interface PostPreviewListProps {
  previews: Array<PostPreview>;
}

const PostPreviewList = ({ previews }: PostPreviewListProps) => (
  <Container>
    {previews.map(preview => (
      <Row key={preview.key}>
        <Title href={`/blog/post/${preview.key}`}>{preview.title}</Title>
        <DateView>{formatTime(preview.time)}</DateView>
        <Content dangerouslySetInnerHTML={{ __html: preview.content }} />
      </Row>
    ))}
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 0 21px;
`;

const Row = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray2};
`;

const Title = styled(Link)`
  ${resetLink}

  display: block;

  font-size: 18px;
  font-weight: bold;
`;

const DateView = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
`;

const Content = styled.div`
  word-break: break-all;

  font-size: 14px;
`;

export default PostPreviewList;
