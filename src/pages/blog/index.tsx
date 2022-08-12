import type { GetStaticProps } from "next";

import { postMap } from "blog/Post";
import { markdownToText } from "blog/Render";
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
    previews: Object.entries(postMap)
      .sort(([key1, post1], [key2, post2]) => post2.time - post1.time)
      .map(([key, post]) => {
        const content = markdownToText(post.content);
        const maxContentLength = 100;

        return {
          key,
          title: post.title,
          time: post.time,
          category: post.category,
          content: content.slice(0, maxContentLength) + (content.length > maxContentLength ? "..." : ""),
        };
      }),
  },
});

export default BlogPage;
