import HistoryView from "@/common/components/HistoryView";
import { CommonParamsProps } from "@/common/models/Props";
import { createTranslation } from "@/common/utils/I18nServer";
import ProjectImage from "@/modules/projects/ProjectImage";
import DecoratedLink from "@/common/components/DecoratedLink";

import WooriHangulImage from "$/images/woorihangul.png";
import LetsStyleImage from "$/images/letsstyle.png";
import LetsReactImage from "$/images/letsreact.png";
import AsciiSnowImage from "$/images/asciisnow.png";
import PaintTalkImage from "$/images/painttalk.png";

const data = {
  forteam: { ko: "회사 팀원들 위해 제작", en: "For company teammates" },
};

const Personal = async ({ params }: CommonParamsProps) => {
  const { translate } = await createTranslation(data, params);

  return (
    <HistoryView
      items={[
        {
          id: "woorihangul",
          duration: { start: "2024", end: "2024" },
          title: (
            <DecoratedLink target="_blank" href="https://woori-hangul.vercel.app/">
              woori-hangul
            </DecoratedLink>
          ),
          content: (
            <>
              <ProjectImage url={WooriHangulImage} alt="woori-hangul" />
            </>
          ),
        },
        {
          id: "letsstyle",
          duration: { start: "2022", end: "2022" },
          title: (
            <DecoratedLink target="_blank" href="https://lets-style.vercel.app/">
              lets-style
            </DecoratedLink>
          ),
          content: (
            <>
              <ProjectImage url={LetsStyleImage} alt="lets-style" />
            </>
          ),
        },
        {
          id: "letsreact",
          duration: { start: "2021", end: "2021" },
          title: (
            <DecoratedLink target="_blank" href="https://avantgarde95.github.io/lets-react/">
              lets-react
            </DecoratedLink>
          ),
          subtitle: translate("forteam"),
          content: (
            <>
              <ProjectImage url={LetsReactImage} alt="lets-react" />
            </>
          ),
        },
        {
          id: "asciisnow",
          duration: { start: "2020", end: "2020" },
          title: (
            <DecoratedLink target="_blank" href="https://avantgarde95.github.io/asciisnow/">
              ASCII snow
            </DecoratedLink>
          ),
          content: (
            <>
              <ProjectImage url={AsciiSnowImage} alt="asciisnow" />
            </>
          ),
        },
        {
          id: "painttalk",
          duration: { start: "2019", end: "2019" },
          title: (
            <DecoratedLink target="_blank" href="https://github.com/Avantgarde95/PaintTalk">
              PaintTalk
            </DecoratedLink>
          ),
          content: (
            <>
              <ProjectImage url={PaintTalkImage} alt="PaintTalk" />
            </>
          ),
        },
      ]}
    />
  );
};

export default Personal;
