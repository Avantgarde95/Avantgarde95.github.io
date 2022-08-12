import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";

import { postMap } from "blog/Post";
import PostOutputView, { PostOutput } from "blog/templates/PostOutputView";
import { markdownToHTML } from "blog/Render";
import Page from "layout/templates/Page";

interface PostPageProps {
  output?: PostOutput;
}

const PostPage = ({ output }: PostPageProps) => (
  <Page title="Blog">{output && <PostOutputView output={output} />}</Page>
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
      output: {
        key,
        title: post.title,
        time: post.time,
        category: post.category,
        content: markdownToHTML(post.content),
      },
    },
  };
};

export default PostPage;
