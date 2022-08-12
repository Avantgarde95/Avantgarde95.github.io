import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

import { Post, postMap } from "blog/Post";
import PostView from "blog/templates/PostView";
import Page from "layout/templates/Page";

interface PostPageProps {
  postKey?: string;
  post?: Post;
}

const PostPage = ({ postKey, post }: PostPageProps) => (
  <Page title="Blog">{postKey && post && <PostView postKey={postKey} post={post} />}</Page>
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

  if (typeof key === "undefined") {
    return { props: {} };
  }

  const post = postMap[key];

  return {
    props: {
      postKey: key,
      post,
    },
  };
};

export default PostPage;
