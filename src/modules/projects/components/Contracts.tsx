import HistoryView from "@/common/components/HistoryView";
import { CommonParamsProps } from "@/common/models/Props";
import { createTranslation } from "@/common/utils/I18nServer";
import ProjectImage from "@/modules/projects/components/ProjectImage";
import DecoratedLink from "@/common/components/DecoratedLink";
import ProjectTechnologies from "@/modules/projects/components/ProjectTechnologies";
import { allTechnologies } from "@/common/models/Technology";

const data = {
  timebank: { ko: "For 타임뱅크코리아", en: "For Timebanks Korea" },
  personel: { ko: "For 개인", en: "For personel" },
  seeme: {
    ko: "장애인을 위한 직장 소개 사이트 (개발 중단)",
    en: "Job website for people with disabilities (Discontinued)",
  },
  meshdeform: {
    ko: (
      <>
        <DecoratedLink target="_blank" href="https://www.dgp.toronto.edu/~rms/software/Deform2D/index.html">
          2D 모양 변형 알고리즘
        </DecoratedLink>
        의 Unity 구현
      </>
    ),
    en: (
      <>
        Implementation of&nbsp;
        <DecoratedLink target="_blank" href="https://www.dgp.toronto.edu/~rms/software/Deform2D/index.html">
          2D shape manipulation algorithm
        </DecoratedLink>
        &nbsp; for Unity
      </>
    ),
  },
};

const Contracts = async ({ params }: CommonParamsProps) => {
  const { translate } = await createTranslation(data, params);

  return (
    <HistoryView
      items={[
        {
          id: "seeme",
          duration: { start: "2022", end: "2022" },
          title: (
            <DecoratedLink target="_blank" href="https://github.com/volunteer-project-1/volunteer_client">
              SeeMe
            </DecoratedLink>
          ),
          subtitle: (
            <>
              {translate("timebank")}
              <ProjectTechnologies
                technologies={[
                  allTechnologies.ts,
                  allTechnologies.scss,
                  allTechnologies.react,
                  allTechnologies.redux,
                  allTechnologies.next,
                ]}
              />
            </>
          ),
          content: (
            <>
              {translate("seeme")}
              <ProjectImage url="/images/seeme.png" alt="SeeMe" />
            </>
          ),
        },
        {
          id: "meshdeform",
          duration: { start: "2021", end: "2021" },
          title: "MeshDeform",
          subtitle: (
            <>
              {translate("personel")}
              <ProjectTechnologies technologies={[allTechnologies.csharp, allTechnologies.unity]} />
            </>
          ),
          content: (
            <>
              {translate("meshdeform")}
              <ProjectImage url="/images/meshdeform.png" alt="MeshDeform" />
            </>
          ),
        },
      ]}
    />
  );
};

export default Contracts;
