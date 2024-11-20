import Link from "next/link";

import { CommonParamsProps } from "@/common/models/Props";
import { createTranslation } from "@/common/utils/I18nServer";
import { History } from "@/modules/home/Common";

const data = {
  graduateMajor: {
    ko: "전산학부 석사",
    en: "M.S. in School of computing",
  },
  bachelorMajor: {
    ko: "전산학부 및 수리과학과 학사",
    en: "B.S. in School of computing & Department of Mathematical Sciences",
  },
  link: {
    ko: "링크",
    en: "Link",
  },
};

const linkStyle = "text-blue hover:text-yellow";

const Education = async ({ params }: CommonParamsProps) => {
  const { translate } = await createTranslation(data, params);

  return (
    <History
      items={[
        {
          id: "graduate",
          duration: { start: "2018", end: "2021" },
          title: "KAIST",
          subtitle: translate("graduateMajor"),
          content: (
            <>
              MeshChain: Secure 3D model and intellectual property management powered by blockchain technology (
              <Link className={linkStyle} target="_blank" href="https://avantgarde95.github.io/MeshChain-publish/">
                {translate("link")}
              </Link>
              )
              <br />
              Collaborative 3D modeling system based on blockchain (
              <Link className={linkStyle} target="_blank" href="https://avantgarde95.github.io/C3DMB/">
                {translate("link")}
              </Link>
              )
            </>
          ),
        },
        {
          id: "bachelor",
          duration: { start: "2013", end: "2018" },
          title: "KAIST",
          subtitle: translate("bachelorMajor"),
        },
      ]}
    />
  );
};

export default Education;
