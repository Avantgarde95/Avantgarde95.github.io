import HistoryView from "@/common/components/HistoryView";
import { CommonParamsProps } from "@/common/models/Props";
import { createTranslation } from "@/common/utils/I18nServer";
import ProjectImage from "@/modules/projects/components/ProjectImage";
import DecoratedLink from "@/common/components/DecoratedLink";
import ProjectTechnologies from "@/modules/projects/components/ProjectTechnologies";
import { allTechnologies } from "@/common/models/Technology";

const data = {
  forteam: { ko: "회사 팀원들 위해 제작", en: "For company teammates" },
  woorihangul: {
    ko: "토스 한글날 이벤트와 유사한 다른 글자 찾기 게임",
    en: "Other letter-finding game, similar to Toss's Hangul day event",
  },
  letsstyle: {
    ko: "직접 구현해본 CSS-in-JS",
    en: "My own implementation of CSS-in-JS",
  },
  letsreact: {
    ko: "React로 구현한 React 튜토리얼",
    en: "React tutorial written in React",
  },
  asciisnow: {
    ko: "아스키 아트로 만들어 본 눈",
    en: "ASCII art snow",
  },
  painttalk: {
    ko: "자연어로 그림 그리기",
    en: "Draw a picture by using natural language",
  },
};

const Personal = async ({ params }: CommonParamsProps) => {
  const { translate } = await createTranslation(data, params);

  return (
    <HistoryView
      items={[
        {
          id: "woorihangul",
          duration: { start: "2024", end: "2024" },
          title: <DecoratedLink href="https://woori-hangul.vercel.app/">woori-hangul</DecoratedLink>,
          subtitle: (
            <ProjectTechnologies technologies={[allTechnologies.ts, allTechnologies.emotion, allTechnologies.next]} />
          ),
          content: (
            <>
              {translate("woorihangul")}
              <ProjectImage url="/images/woorihangul.png" alt="woori-hangul" />
            </>
          ),
        },
        {
          id: "letsstyle",
          duration: { start: "2022", end: "2022" },
          title: <DecoratedLink href="https://lets-style.vercel.app/">lets-style</DecoratedLink>,
          subtitle: <ProjectTechnologies technologies={[allTechnologies.ts, allTechnologies.next]} />,
          content: (
            <>
              {translate("letsstyle")}
              <ProjectImage url="/images/letsstyle.png" alt="lets-style" />
            </>
          ),
        },
        {
          id: "letsreact",
          duration: { start: "2021", end: "2021" },
          title: <DecoratedLink href="https://avantgarde95.github.io/lets-react/">lets-react</DecoratedLink>,
          subtitle: (
            <>
              {translate("forteam")}
              <ProjectTechnologies
                technologies={[
                  allTechnologies.ts,
                  allTechnologies.scss,
                  allTechnologies.react,
                  allTechnologies.webpack,
                ]}
              />
            </>
          ),
          content: (
            <>
              {translate("letsreact")}
              <ProjectImage url="/images/letsreact.png" alt="lets-react" />
            </>
          ),
        },
        {
          id: "asciisnow",
          duration: { start: "2020", end: "2020" },
          title: <DecoratedLink href="https://avantgarde95.github.io/asciisnow/">ASCII snow</DecoratedLink>,
          subtitle: <ProjectTechnologies technologies={[allTechnologies.js]} />,
          content: (
            <>
              {translate("asciisnow")}
              <ProjectImage url="/images/asciisnow.png" alt="asciisnow" />
            </>
          ),
        },
        {
          id: "painttalk",
          duration: { start: "2019", end: "2019" },
          subtitle: <ProjectTechnologies technologies={[allTechnologies.kotlin]} />,
          title: <DecoratedLink href="https://github.com/Avantgarde95/PaintTalk">PaintTalk</DecoratedLink>,
          content: (
            <>
              {translate("painttalk")}
              <ProjectImage url="/images/painttalk.png" alt="PaintTalk" />
            </>
          ),
        },
      ]}
    />
  );
};

export default Personal;
