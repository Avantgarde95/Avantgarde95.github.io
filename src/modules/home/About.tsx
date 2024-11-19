import { CommonParamsProps } from "@/common/models/Props";
import { createTranslation } from "@/common/utils/I18nServer";

const data = {
  about: {
    ko: "안녕",
    en: "Hello",
  },
};

const About = async ({ params }: CommonParamsProps) => {
  const { translate } = await createTranslation(data, params);

  return <div>{translate("about")}</div>;
};

export default About;
