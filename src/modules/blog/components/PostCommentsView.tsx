"use client";

import { ComponentProps, useState } from "react";
import { DiscussionEmbed } from "disqus-react";

const PostCommentsView = (props: ComponentProps<typeof DiscussionEmbed>) => {
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
      {!isReady && <div className="mb-32 mt-8 text-base">Loading the comments...</div>}
      <DiscussionEmbed {...newProps} />
    </>
  );
};

export default PostCommentsView;
