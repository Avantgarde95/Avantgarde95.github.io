import HistoryView from "@/common/components/HistoryView";
import { CommonParamsProps } from "@/common/models/Props";
import { createTranslation } from "@/common/utils/I18nServer";
import DecoratedLink from "@/common/components/DecoratedLink";
import ProjectImage from "@/modules/projects/components/ProjectImage";
import ProjectTechnologies from "@/modules/projects/components/ProjectTechnologies";
import { allTechnologies } from "@/common/models/Technology";

const data = {
  tmax: { ko: "티맥스가이아", en: "TmaxGaia" },
  graduate: { ko: "대학원 연구", en: "Graduate school" },
  gaia: {
    ko: "No-code 앱 제작 도구",
    en: "No-code app creation tool",
  },
  office: {
    ko: "데스크톱용 오피스 프로그램 모음집",
    en: "Office suite for desktop",
  },
  meshchain: {
    ko: "탈중앙화 네트워크를 활용한 3D 협업 및 지적 재산권 관리 시스템",
    en: "Collaborative 3D modeling & intellectual property management system powered by decentralized network",
  },
  c3dmb: {
    ko: "블록체인 기반의 3D 협업 시스템",
    en: "Collaborative 3D modeling system based on blockchain",
  },
};

const Main = async ({ params }: CommonParamsProps) => {
  const { translate } = await createTranslation(data, params);

  return (
    <HistoryView
      items={[
        {
          id: "gaia",
          duration: { start: "2021" },
          title: <DecoratedLink href="https://tmaxgaia.net/GAIACube">GAIA</DecoratedLink>,
          subtitle: (
            <>
              {translate("tmax")}
              <ProjectTechnologies
                technologies={[
                  allTechnologies.ts,
                  allTechnologies.scss,
                  allTechnologies.react,
                  allTechnologies.mobx,
                  allTechnologies.electron,
                  allTechnologies.webpack,
                ]}
              />
            </>
          ),
          content: translate("gaia"),
        },
        {
          id: "office",
          duration: { start: "2021", end: "2021" },
          title: "ToOffice",
          subtitle: (
            <>
              {translate("tmax")}
              <ProjectTechnologies technologies={[allTechnologies.cpp]} />
            </>
          ),
          content: (
            <>
              {translate("office")}
              <ProjectImage url="/images/tooffice.png" alt="ToOffice" />
            </>
          ),
        },
        {
          id: "meshchain",
          duration: { start: "2020", end: "2021" },
          title: <DecoratedLink href="https://avantgarde95.github.io/MeshChain-publish/">MeshChain</DecoratedLink>,
          subtitle: (
            <>
              {translate("graduate")}
              <ProjectTechnologies
                technologies={[
                  allTechnologies.kotlin,
                  allTechnologies.js,
                  allTechnologies.python,
                  allTechnologies.ethereum,
                  allTechnologies.solidity,
                  allTechnologies.opengl,
                ]}
              />
            </>
          ),
          content: (
            <>
              {translate("meshchain")}
              <ProjectImage url="/images/meshchain.png" alt="MeshChain" />
            </>
          ),
        },
        {
          id: "c3dmb",
          duration: { start: "2018", end: "2019" },
          title: <DecoratedLink href="https://avantgarde95.github.io/C3DMB/">C3DMB</DecoratedLink>,
          subtitle: (
            <>
              {translate("graduate")}
              <ProjectTechnologies
                technologies={[allTechnologies.kotlin, allTechnologies.python, allTechnologies.opengl]}
              />
            </>
          ),
          content: (
            <>
              {translate("c3dmb")}
              <ProjectImage url={"/images/c3dmb.png"} alt="C3DMB" />
            </>
          ),
        },
      ]}
    />
  );
};

export default Main;
