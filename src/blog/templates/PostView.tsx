import ReactMarkdown, { Options as ReactMarkdownOptions } from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import SyntaxHighlighterTheme from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import remarkGfm from "remark-gfm";
import { DiscussionEmbed } from "disqus-react";
import styled from "@emotion/styled";

import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import cpp from "react-syntax-highlighter/dist/cjs/languages/prism/cpp";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";

import { formatTime } from "utils/StringUtils";
import { Post } from "blog/Post";
import Link from "components/Link";
import { resetLink } from "styles/Mixins";

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
  postKey: string;
  post: Post;
}

const PostView = ({ postKey, post }: PostViewProps) => (
  <Container>
    <Title>{post.title}</Title>
    <DateView>{formatTime(post.time)}</DateView>
    <Content>
      <ReactMarkdown components={componentMap} remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>
    </Content>
    <Others>
      Category: <CategoryLink>{post.category}</CategoryLink>
    </Others>
    <DiscussionEmbed
      shortname={"Avantgarde95"}
      config={{
        url: `https://avantgarde95.github.io/blog/${postKey}`,
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
        language={match[1]}
        {...others}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...others}>
        {children}
      </code>
    );
  },
};

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
