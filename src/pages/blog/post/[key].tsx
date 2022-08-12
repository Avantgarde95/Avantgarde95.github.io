import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

import Page from "layout/templates/Page";
import { postMap, Post } from "blog/models/Post";

interface PostPageProps {
  post?: Post;
}

const PostPage = ({ post }: PostPageProps) => (
  <Page title="Blog">
    <pre>{post?.content ?? ""}</pre>
  </Page>
);

interface Query extends ParsedUrlQuery {
  key: string;
}

export const getStaticPaths: GetStaticPaths<Query> = async () => ({
  paths: Object.keys(postMap).map(key => ({
    params: { key },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<PostPageProps, Query> = async context => {
  const key = context.params?.key;

  return {
    props: { post: typeof key === "undefined" ? undefined : postMap[key] },
  };
};

export default PostPage;
