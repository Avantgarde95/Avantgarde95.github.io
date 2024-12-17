import HistoryView from "@/common/components/HistoryView";
import { CommonParamsProps } from "@/common/models/Props";
import { createTranslation } from "@/common/utils/I18nServer";

const data = {
  tmaxgaia: {
    ko: "티맥스가이아",
    en: "TmaxGaia",
  },
  researcher: {
    ko: "연구원",
    en: "Researcher",
  },
  gaia: {
    ko: "No-code 앱 제작 프로그램 GAIA 개발",
    en: "No-code app dev. program GAIA",
  },
  office: {
    ko: "데스크톱용 오피스 프로그램 ToOffice 개발",
    en: "",
  },
};

const Careers = async ({ params }: CommonParamsProps) => {
  const { translate } = await createTranslation(data, params);

  return (
    <HistoryView
      items={[
        {
          id: "tmaxgaia",
          duration: { start: "2023", end: "2024" },
          title: translate("tmaxgaia"),
          subtitle: translate("researcher"),
          content: (
            <>
              {translate("gaia")}
              <br />
              {translate("office")}
            </>
          ),
        },
      ]}
    />
  );
};

export default Careers;
