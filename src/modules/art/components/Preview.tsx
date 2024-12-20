"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { IoIosRefresh } from "react-icons/io";
import { FaRegWindowRestore } from "react-icons/fa";
import { BsCode } from "react-icons/bs";

import useForceUpdate from "@/common/hooks/useForceUpdate";
import { Work } from "@/modules/art/models/Works";

const buttonStyle =
  "w-[36px] h-full flex flex-row justify-center items-center text-[20px] text-white hover:text-yellow";

interface PreviewProps {
  work: Work;
}

const Preview = ({ work }: PreviewProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.8 });
  const [isRequested, setRequested] = useState(false);
  const { value, forceUpdate } = useForceUpdate();

  useEffect(() => {
    if (inView && !isRequested) {
      setRequested(true);
    }
  }, [inView, isRequested]);

  const scale = work.scale ?? 1;
  const scaleString = `${Math.floor(100 / scale)}%`;

  const handleClickRefresh = forceUpdate;

  const handleOpenDemo = () => {
    window.open(work.demoURL, "_blank");
  };

  const handleOpenCode = () => {
    window.open(work.codeURL, "_blank");
  };

  return (
    <div className="flex h-[450px] flex-col items-center">
      <div className="relative h-[360px] w-full">
        <iframe
          className="origin-top-left"
          style={{
            width: scaleString,
            height: scaleString,
            transform: `scale(${scale})`,
          }}
          key={value}
          title={work.name}
          src={work.demoURL}
          frameBorder={0}
        />
        <div className="absolute right-0 top-0 flex h-[36px] flex-row bg-background bg-opacity-60">
          <button className={buttonStyle} onClick={handleClickRefresh}>
            <IoIosRefresh />
          </button>
          <button className={buttonStyle} onClick={handleOpenDemo}>
            <FaRegWindowRestore />
          </button>
          <button className={buttonStyle} onClick={handleOpenCode}>
            <BsCode />
          </button>
        </div>
      </div>
      <div className="mt-4 whitespace-pre-wrap text-center">{work.name}</div>
    </div>
  );
};

export default Preview;
