import { Metadata } from "next";

import Header from "@/common/components/Header";
import { CommonParamsProps } from "@/common/models/Props";
import { extractTextFromMarkdown, formatTime } from "@/common/utils/StringUtils";
import DecoratedLink from "@/common/components/DecoratedLink";
import { getLocale } from "@/common/utils/I18nServer";
import { allPosts } from "@/modules/blog/models/Post";

const previews = allPosts
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
  });

const Page = async ({ params }: CommonParamsProps) => {
  const locale = await getLocale(params);

  return (
    <div className="w-full">
      <Header title="Blog" />
      {previews.map(preview => (
        <div className="mb-6 w-full border-b-2 border-dashed border-gray pb-6" key={preview.key}>
          <DecoratedLink className="text-xl hover:text-yellow" href={`/${locale}/blog/post/${preview.key}`}>
            {preview.title}
          </DecoratedLink>
          <div className="text-gray">{formatTime(preview.time)}</div>
          <div>{preview.content}</div>
        </div>
      ))}
    </div>
  );
};

export const metadata: Metadata = {
  title: "Blog",
};

export default Page;
