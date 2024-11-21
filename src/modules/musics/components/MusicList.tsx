"use client";

import { useState } from "react";

import PageMenu from "@/common/components/PageMenu";
import Musics from "@/modules/musics/data/Musics.json";
import Preview from "@/modules/musics/components/Preview";

const categoryMap = {
  Pieces: { videoIDs: Musics.myPieces },
  Guitar: { videoIDs: Musics.myGuitarPlayings },
  Piano: { videoIDs: Musics.myPianoPlayings },
} as const;

type Category = keyof typeof categoryMap;

const categories = Object.keys(categoryMap) as Array<Category>;

const MusicList = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Pieces");

  return (
    <>
      <PageMenu
        items={categories.map(category => ({
          type: "button",
          label: category,
          onClick: () => {
            setSelectedCategory(category);
          },
        }))}
      />
      <div className="mt-8 grid grid-cols-1 justify-center gap-x-12 gap-y-16 sm:grid-cols-[478px] lg:grid-cols-2">
        {categoryMap[selectedCategory].videoIDs.map(videoID => (
          <Preview key={videoID} videoID={videoID} />
        ))}
      </div>
    </>
  );
};

export default MusicList;
