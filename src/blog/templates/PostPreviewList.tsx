import styled from "@emotion/styled";

import { formatTime } from "utils/StringUtils";
import { allCategories, PostMeta } from "blog/Post";
import Link from "components/Link";
import { createAnimation, fadeIn, resetLink } from "styles/Mixins";

export interface PostPreview extends PostMeta {
  key: string;
  content: string;
}

interface PostPreviewListProps {
  previews: Array<PostPreview>;
}

const PostPreviewList = ({ previews }: PostPreviewListProps) => (
  <Container>
    <Categories>
      {allCategories.map(category => (
        <CategoryButton key={category} href={`/blog/category/${category.toLowerCase()}`}>
          {category}
        </CategoryButton>
      ))}
    </Categories>
    {previews.map(preview => (
      <Row key={preview.key}>
        <PostLink href={`/blog/post/${preview.key}`}>{preview.title}</PostLink>
        <DateView>{formatTime(preview.time)}</DateView>
        <Content dangerouslySetInnerHTML={{ __html: preview.content }} />
        <Others>
          Category:{" "}
          <CategoryLink href={`/blog/category/${preview.category.toLowerCase()}`}>{preview.category}</CategoryLink>
        </Others>
      </Row>
    ))}
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 0 21px;
`;

const categoryAnimation = createAnimation([fadeIn], "0.8s");

const Categories = styled.div`
  ${categoryAnimation.style}

  text-align: center;

  width: 100%;
  font-size: 17px;
  font-weight: 400;

  color: ${({ theme }) => theme.color.blue};
`;

const CategoryButton = styled(Link)`
  ${resetLink}

  &:not(:first-of-type) {
    margin-left: 16px;
  }
`;

const Row = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray2};
`;

const PostLink = styled(Link)`
  ${resetLink}

  display: block;

  margin-bottom: 2px;
  font-size: 20px;
  font-weight: bold;

  color: ${({ theme }) => theme.color.blue};
`;

const DateView = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
`;

const Content = styled.div`
  word-break: break-all;

  margin-bottom: 8px;
  font-size: 16px;
`;

const Others = styled.div`
  font-size: 16px;
`;

const CategoryLink = styled(Link)`
  ${resetLink}

  color: ${({ theme }) => theme.color.blue};
`;

export default PostPreviewList;
