"use client";

import { ComponentProps, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import SyntaxHighlighterTheme from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import cpp from "react-syntax-highlighter/dist/cjs/languages/prism/cpp";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";

import { parseYouTubeURL } from "@/common/utils/StringUtils";
import DecoratedLink from "@/common/components/DecoratedLink";
import { Post } from "@/modules/blog/models/Post";

SyntaxHighlighter.registerLanguage("js", javascript);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("ts", typescript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("bash", bash);

interface PostContentViewProps {
  post: Post;
}

const PostContentView = ({ post }: PostContentViewProps) => (
  <div className="mb-2 break-all text-base [&_a]:cursor-pointer [&_a]:font-normal [&_code]:font-mono [&_h1]:my-4 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:my-4 [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:my-4 [&_h3]:text-base [&_li]:list-disc [&_p]:my-4 [&_pre]:my-4 [&_table]:border-collapse [&_table]:border-2 [&_table]:border-solid [&_table]:border-gray [&_td]:border-2 [&_td]:border-solid [&_td]:border-gray [&_th]:border-2 [&_th]:border-solid [&_th]:border-gray [&_th]:p-[8px] [&_ul]:pl-6">
    <ReactMarkdown
      components={{
        code: MarkdownCode,
        a: MarkdownLink,
        img: MarkdownImage,
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      skipHtml
    >
      {post.content}
    </ReactMarkdown>
  </div>
);

const MarkdownCode = ({
  node,
  inline,
  className,
  children,
  ...others
}: {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: ReactNode;
  others?: any;
}) => {
  const match = /language-(\w+)/.exec(className || "");

  if (inline || !match) {
    return (
      <InlineCode className={className} {...others}>
        {children}
      </InlineCode>
    );
  }

  return (
    <SyntaxHighlighter style={{ ...SyntaxHighlighterTheme }} language={match[1].toLowerCase()} {...others}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

const MarkdownImage = ({ node, src, alt, ...others }: { node?: any } & ComponentProps<"img">) => (
  <span className="block w-full overflow-x-auto">
    <img src={src} alt={alt} {...others} />
  </span>
);

const MarkdownLink = ({ node, ...others }: { node?: any } & ComponentProps<"a">) => {
  const youTubeID = parseYouTubeURL(others.href ?? "");

  if (youTubeID === null) {
    return <DecoratedLink {...others} href={others.href ?? "#"} />;
  }

  return (
    <iframe
      className="max-w-full"
      title={`Video ${youTubeID}`}
      width={560}
      height={315}
      frameBorder={0}
      allowFullScreen
      src={`https://www.youtube.com/embed/${youTubeID}`}
    />
  );
};

const InlineCode = ({ className, ...others }: ComponentProps<"code">) => (
  <code
    className={`bg-gray bg-opacity-20 pl-[2px] pr-[2px] align-middle text-sm leading-none ${className}`}
    {...others}
  />
);

export default PostContentView;
