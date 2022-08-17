import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

import { allCategories, allPosts } from "blog/Post";
import PostPreviewList, { PostPreview } from "blog/templates/PostPreviewList";
import Page from "layout/templates/Page";
import { extractTextFromMarkdown } from "utils/StringUtils";

interface FilteredPreviewListPageProps {
  previews: Array<PostPreview>;
}

const FilteredPreviewListPage = ({ previews }: FilteredPreviewListPageProps) => (
  <Page title="Blog">
    <PostPreviewList previews={previews} />
  </Page>
);

interface Query extends ParsedUrlQuery {
  key: string;
}

export const getStaticPaths: GetStaticPaths<Query> = async () => ({
  paths: allCategories.map(category => ({
    params: { key: category.toLowerCase() },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<FilteredPreviewListPageProps, Query> = async context => ({
  props: {
    previews: allPosts
      .filter(post => post.category.toLowerCase() === context.params?.key)
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

export default FilteredPreviewListPage;
