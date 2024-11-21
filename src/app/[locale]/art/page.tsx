import Header from "@/common/components/Header";
import { CommonParamsProps } from "@/common/models/Props";
import { createTranslation } from "@/common/utils/I18nServer";
import Preview from "@/modules/art/components/Preview";
import allWorks from "@/modules/art/models/Works";

const data = {
  description: {
    ko: "웹을 이용하여 제작한 작품들입니다.",
    en: "These are works made using web technology.",
  },
};

const Page = async ({ params }: CommonParamsProps) => {
  const { translate } = await createTranslation(data, params);

  return (
    <div className="w-full">
      <Header title="Art" />
      <div className="mt-4">{translate("description")}</div>
      <div className="mt-8 grid grid-cols-1 justify-center gap-x-12 gap-y-12 sm:grid-cols-[478px] lg:grid-cols-2">
        {allWorks.map(work => (
          <Preview key={work.name} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Page;
