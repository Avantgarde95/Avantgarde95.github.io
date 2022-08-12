import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

import { Post, posts } from "blog/Post";
import PostView from "blog/templates/PostView";
import Page from "layout/templates/Page";

interface PostPageProps {
  post?: Post;
}

const PostPage = ({ post }: PostPageProps) => <Page title="Blog">{post && <PostView post={post} />}</Page>;

interface Query extends ParsedUrlQuery {
  key: string;
}

export const getStaticPaths: GetStaticPaths<Query> = async () => ({
  paths: posts.map(post => ({
    params: { key: post.key },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<PostPageProps, Query> = async context => {
  const post = posts.find(eachPost => eachPost.key === context.params?.key);

  if (typeof post === "undefined") {
    return { props: {} };
  }

  return { props: { post } };
};

export default PostPage;
