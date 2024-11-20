import HistoryView from "@/common/components/HistoryView";
import { CommonParamsProps } from "@/common/models/Props";
import { createTranslation } from "@/common/utils/I18nServer";
import DecoratedLink from "@/common/components/DecoratedLink";
import ProjectImage from "@/modules/projects/ProjectImage";

import ToOfficeImage from "$/images/tooffice.png";
import MeshChainImage from "$/images/meshchain.png";
import C3DMBImage from "$/images/c3dmb.png";

const data = {
  tmax: { ko: "티맥스가이아", en: "TmaxGaia" },
  graduate: { ko: "대학원 연구", en: "Graduate school" },
};

const Main = async ({ params }: CommonParamsProps) => {
  const { translate } = await createTranslation(data, params);

  return (
    <HistoryView
      items={[
        {
          id: "gaia",
          duration: { start: "2021" },
          title: "GAIA",
          subtitle: translate("tmax"),
        },
        {
          id: "office",
          duration: { start: "2021", end: "2021" },
          title: "ToOffice",
          subtitle: translate("tmax"),
          content: (
            <>
              <ProjectImage url={ToOfficeImage} alt="ToOffice" />
            </>
          ),
        },
        {
          id: "meshchain",
          duration: { start: "2020", end: "2021" },
          title: (
            <DecoratedLink target="_blank" href="https://avantgarde95.github.io/MeshChain-publish/">
              MeshChain
            </DecoratedLink>
          ),
          subtitle: translate("graduate"),
          content: (
            <>
              <ProjectImage url={MeshChainImage} alt="MeshChain" />
            </>
          ),
        },
        {
          id: "c3dmb",
          duration: { start: "2018", end: "2019" },
          title: (
            <DecoratedLink target="_blank" href="https://avantgarde95.github.io/C3DMB/">
              C3DMB
            </DecoratedLink>
          ),
          subtitle: translate("graduate"),
          content: (
            <>
              <ProjectImage url={C3DMBImage} alt="C3DMB" />
            </>
          ),
        },
      ]}
    />
  );
};

export default Main;
