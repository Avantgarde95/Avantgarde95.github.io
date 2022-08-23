import { DiscussionEmbed } from "disqus-react";
import styled from "@emotion/styled";
import { rgba } from "polished";

import ReactMarkdown, { Options as ReactMarkdownOptions } from "react-markdown";
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
import { Post } from "modules/blog/Post";
import Link from "common/components/Link";
import { resetLink } from "common/styles/Mixins";

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
      <ReactMarkdown components={componentMap} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml>
        {post.content}
      </ReactMarkdown>
    </Content>
    <Others>
      Category: <CategoryLink href={`/blog/category/${post.category.toLowerCase()}`}>{post.category}</CategoryLink>
    </Others>
    <DiscussionEmbed
      shortname={"Avantgarde95"}
      config={{
        url: `https://avantgarde95.github.io/blog/${post.key}`,
        identifier: post.title,
        title: post.title,
      }}
    />
  </Container>
);

const componentMap: ReactMarkdownOptions["components"] = {
  code: ({ node, inline, className, children, ...others }) => {
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
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
  },
  a: ({ node, ...others }) => {
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
  },
  img: ({ node, src, alt, ...others }) => (
    <ImageContainer>
      <img src={src} alt={alt} {...others} />
    </ImageContainer>
  ),
};

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

const ImageContainer = styled.div`
  overflow-x: auto;

  width: 100%;
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

export default PostView;
