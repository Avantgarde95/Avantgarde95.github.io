import type { GetStaticProps } from "next";

import { extractTextFromMarkdown } from "utils/StringUtils";
import { posts } from "blog/Post";
import PostPreviewList, { PostPreview } from "blog/templates/PostPreviewList";
import Page from "layout/templates/Page";

interface BlogPageProps {
  previews: Array<PostPreview>;
}

const BlogPage = ({ previews }: BlogPageProps) => (
  <Page title="Blog">
    <PostPreviewList previews={previews} />
  </Page>
);

export const getStaticProps: GetStaticProps<BlogPageProps> = async context => ({
  props: {
    previews: posts
      .sort((post1, post2) => post2.time - post1.time)
      .map(post => {
        const content = extractTextFromMarkdown(post.content);
        const maxContentLength = 100;

        return {
          key: post.key,
          title: post.title,
          time: post.time,
          category: post.category,
          content: content.slice(0, maxContentLength) + (content.length > maxContentLength ? "..." : ""),
        };
      }),
  },
});

export default BlogPage;
