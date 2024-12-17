import { Metadata } from "next";

import { CommonParamsProps } from "@/common/models/Props";
import { formatTime } from "@/common/utils/StringUtils";
import Header from "@/common/components/Header";
import { allPosts } from "@/modules/blog/models/Post";
import PostContentView from "@/modules/blog/components/PostContentView";
import PostCommentsView from "@/modules/blog/components/PostCommentsView";

type PostParams = CommonParamsProps<{ key?: string }>;

function findPost(key: string) {
  return allPosts.find(post => post.key === key);
}

const Page = async ({ params }: PostParams) => {
  const { key } = await params;
  const post = findPost(key ?? "");

  if (!post) {
    return null;
  }

  return (
    <div className="w-full">
      <Header title="Blog" />
      <div className="mb-4 w-full border-b-2 border-dashed border-gray pb-4">
        <h2 className="m-0 p-0 text-xl">{post.title}</h2>
        <div className="text-gray">{formatTime(post.time)}</div>
      </div>
      <PostContentView post={post} />
      <div className="my-4 w-full border-b-2 border-dashed border-gray" />
      <PostCommentsView
        shortname="Avantgarde95"
        config={{
          url: `https://avantgarde95.github.io/blog/${post.key}`,
          identifier: post.title,
          title: post.title,
        }}
      />
    </div>
  );
};

export async function generateStaticParams() {
  return [...allPosts.map(post => ({ key: post.key }))];
}

export async function generateMetadata({ params }: PostParams): Promise<Metadata> {
  const { key } = await params;
  const post = findPost(key ?? "");

  return {
    title: post?.title ?? "Blog",
  };
}

export default Page;
