import { ComponentProps, ComponentPropsWithRef, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { rgba } from "polished";
import { DiscussionEmbed } from "disqus-react";

import ReactMarkdown from "react-markdown";
import { ReactMarkdownProps, CodeProps } from "react-markdown/lib/ast-to-react";
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

import { formatTime, parseYouTubeURL } from "common/utils/StringUtils";
import useClient from "common/hooks/useClient";
import Link from "common/components/Link";
import { resetLink } from "common/styles/Mixins";
import { Post } from "modules/blog/Post";

SyntaxHighlighter.registerLanguage("js", javascript);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("ts", typescript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("bash", bash);

interface PostViewProps {
  post: Post;
}

const PostView = ({ post }: PostViewProps) => (
  <Container>
    <Title>{post.title}</Title>
    <DateView>{formatTime(post.time)}</DateView>
    <Content>
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
    </Content>
    <Others>
      Category: <CategoryLink href={`/blog/category/${post.category.toLowerCase()}`}>{post.category}</CategoryLink>
    </Others>
    <Comments
      shortname={"Avantgarde95"}
      config={{
        url: `https://avantgarde95.github.io/blog/${post.key}`,
        identifier: post.title,
        title: post.title,
      }}
    />
  </Container>
);

const MarkdownCode = ({ node, inline, className, children, ...others }: CodeProps) => {
  const { isClient } = useClient();

  const match = /language-(\w+)/.exec(className || "");

  return isClient && !inline && match ? (
    <SyntaxHighlighter
      // We put 'as' because of the strange type computation of `style`.
      style={SyntaxHighlighterTheme as any}
      language={match[1].toLowerCase()}
      {...others}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <InlineCode className={className} {...others}>
      {children}
    </InlineCode>
  );
};

const MarkdownLink = ({ node, ...others }: ReactMarkdownProps & ComponentPropsWithRef<"a">) => {
  const youTubeID = parseYouTubeURL(others.href ?? "");

  if (youTubeID === null) {
    return <Link {...others} />;
  } else {
    return (
      <YouTube
        width={560}
        height={315}
        frameBorder={0}
        allowFullScreen
        src={`https://www.youtube.com/embed/${youTubeID}`}
      />
    );
  }
};

const MarkdownImage = ({ node, src, alt, ...others }: ReactMarkdownProps & ComponentProps<"img">) => (
  <div
    css={css`
      overflow-x: auto;

      width: 100%;
    `}
  >
    <img src={src} alt={alt} {...others} />
  </div>
);

const InlineCode = styled.code`
  box-sizing: border-box;
  vertical-align: middle;

  font-size: 13px;
  padding: 0 2px;
  line-height: 16px;
  background-color: ${({ theme }) => rgba(theme.color.gray3, 0.7)};
`;

const YouTube = styled.iframe`
  max-width: 100%;
`;

const Container = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 0 21px;
`;

const Title = styled.div`
  margin-bottom: 2px;
  font-size: 20px;
  font-weight: bold;
`;

const DateView = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
`;

const Content = styled.div`
  word-break: break-all;

  width: 100%;
  margin-bottom: 8px;
  font-size: 16px;
  border-top: 1px solid ${({ theme }) => theme.color.gray2};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray2};

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 16px;
  }

  ul {
    padding-left: 24px;
  }

  a {
    cursor: pointer;

    font-weight: normal;
    color: ${({ theme }) => theme.color.blue};
  }

  table {
    box-sizing: border-box;

    border-collapse: collapse;
    border: 1px solid ${({ theme }) => theme.color.gray2};

    th,
    td {
      box-sizing: border-box;

      padding: 8px;
      border: 1px solid ${({ theme }) => theme.color.gray2};
    }
  }

  code {
    font-family: "SF Mono", monospace !important;
  }
`;

const Others = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
`;

const CategoryLink = styled(Link)`
  ${resetLink}

  color: ${({ theme }) => theme.color.blue};
`;

const Comments = (props: ComponentProps<typeof DiscussionEmbed>) => {
  const [isReady, setReady] = useState(false);

  const newProps: typeof props = {
    ...props,
    config: {
      ...props.config,
      onReady: () => {
        setReady(true);
      },
    },
  };

  return (
    <>
      {!isReady && (
        <div
          css={css`
            margin-top: 32px;
            margin-bottom: 128px;
            font-size: 16px;
          `}
        >
          Loading the comments...
        </div>
      )}
      <DiscussionEmbed {...newProps} />
    </>
  );
};

export default PostView;
