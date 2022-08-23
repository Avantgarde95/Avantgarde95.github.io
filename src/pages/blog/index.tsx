import type { GetStaticProps } from "next";

import { extractTextFromMarkdown } from "common/utils/StringUtils";
import { allPosts } from "modules/blog/Post";
import PostPreviewList, { PostPreview } from "modules/blog/components/PostPreviewList";
import Page from "modules/layout/components/Page";

interface BlogPageProps {
  previews: Array<PostPreview>;
}

const PreviewListPage = ({ previews }: BlogPageProps) => (
  <Page title={{ Korean: "블로그", English: "Blog" }}>
    <PostPreviewList previews={previews} />
  </Page>
);

export const getStaticProps: GetStaticProps<BlogPageProps> = async context => ({
  props: {
    previews: allPosts
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

export default PreviewListPage;
