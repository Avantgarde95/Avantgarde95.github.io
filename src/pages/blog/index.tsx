import type { GetStaticProps } from "next";

import Page from "layout/templates/Page";
import { Category } from "blog/models/Category";
import { postMap } from "blog/models/Post";

interface Preview {
  title: string;
  time: number;
  category: Category;
  content: string;
}

interface BlogPageProps {
  previews: Array<Preview>;
}

const BlogPage = ({ previews }: BlogPageProps) => (
  <Page title="Blog">
    <pre>{previews.map(preview => preview.content).join("\n\n\n")}</pre>
  </Page>
);

export const getStaticProps: GetStaticProps<BlogPageProps> = async context => ({
  props: {
    previews: Object.entries(postMap)
      .sort(([key1, post1], [key2, post2]) => post2.time - post1.time)
      .map(([key, post]) => ({
        ...post,
        content: post.content.slice(0, 100),
      })),
  },
});

export default BlogPage;
