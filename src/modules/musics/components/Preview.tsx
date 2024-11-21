"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface PreviewProps {
  videoID: string;
}

const Preview = ({ videoID }: PreviewProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [isRequested, setRequested] = useState(false);

  useEffect(() => {
    if (inView && !isRequested) {
      setRequested(true);
    }
  }, [inView, isRequested]);

  return (
    <div className="relative h-0 w-full bg-gray pb-[56.25%]" ref={ref}>
      {isRequested && (
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          title={`Video ${videoID}`}
          frameBorder={0}
          allowFullScreen={true}
          src={`https://www.youtube.com/embed/${videoID}`}
        />
      )}
    </div>
  );
};

export default Preview;
