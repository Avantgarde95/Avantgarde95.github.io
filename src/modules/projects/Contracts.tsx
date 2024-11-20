import HistoryView from "@/common/components/HistoryView";
import { CommonParamsProps } from "@/common/models/Props";
import { createTranslation } from "@/common/utils/I18nServer";
import ProjectImage from "@/modules/projects/ProjectImage";
import DecoratedLink from "@/common/components/DecoratedLink";

import SeeMeImage from "$/images/seeme.png";
import MeshDeformImage from "$/images/meshdeform.png";

const data = {
  timebank: { ko: "타임뱅크코리아", en: "Timebanks Korea" },
  personel: { ko: "개인", en: "personel" },
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
          subtitle: `For ${translate("timebank")}`,
          content: (
            <>
              <ProjectImage url={SeeMeImage} alt="SeeMe" />
            </>
          ),
        },
        {
          id: "meshdeform",
          duration: { start: "2021", end: "2021" },
          title: "MeshDeform",
          subtitle: `For ${translate("personel")}`,
          content: (
            <>
              <ProjectImage url={MeshDeformImage} alt="MeshDeform" />
            </>
          ),
        },
      ]}
    />
  );
};

export default Contracts;
