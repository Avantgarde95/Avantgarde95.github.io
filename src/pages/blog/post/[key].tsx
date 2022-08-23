import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

import { Post, allPosts } from "modules/blog/Post";
import PostView from "modules/blog/components/PostView";
import Page from "modules/layout/components/Page";

interface PostPageProps {
  post?: Post;
}

const PostPage = ({ post }: PostPageProps) => (
  <Page title={{ Korean: "블로그", English: "Blog" }}>{post && <PostView post={post} />}</Page>
);

interface Query extends ParsedUrlQuery {
  key: string;
}

export const getStaticPaths: GetStaticPaths<Query> = async () => ({
  paths: allPosts.map(post => ({
    params: { key: post.key },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<PostPageProps, Query> = async context => {
  const post = allPosts.find(eachPost => eachPost.key === context.params?.key);

  if (typeof post === "undefined") {
    return { props: {} };
  }

  return { props: { post } };
};

export default PostPage;
