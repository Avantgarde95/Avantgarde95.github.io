import { CommonParamsProps } from "@/common/models/Props";
import { createTranslation } from "@/common/utils/I18nServer";

const data = {
  about: {
    ko: (
      <>
        반갑습니다! 개발자 박훈민입니다.
        <br />
        <br />
        다양한 기술과 언어들을 다룬 경험이 있으며, 현재는 프론트엔드 작업을 주로 하고 있습니다. 장기적인 관점으로
        개발하고자 노력합니다 - 관리하기 좋으면서 이해하기도 편한 코드를 작성하고자 노력합니다.
        <br />
        <br />
        개발 외적으로는, 음악에 관심이 많습니다. 클래식 음악을 주로 듣고, 다른 장르의 음악들도 거부감없이 듣습니다.
        취미로 연주, 작곡, 편곡을 하고 있습니다.
        <br />
        <br />
        감사합니다!
      </>
    ),
    en: (
      <>
        Welcome! I&apos;m Hunmin Park, developer.
        <br />
        <br />I have experience with various technologies and languages. I&apos;m currently mainly working on front-end.
        I try to develop with a long-term perspective - I try to write code that is easy to manage and understand.
        <br />
        <br />
        Personally, I&apos;m very interested in music. I mainly listen to classical music, but I also listen to other
        genres, too. I play, compose, and arrange music as a hobby.
        <br />
        <br />
        Thanks!
      </>
    ),
  },
};

const About = async ({ params }: CommonParamsProps) => {
  const { translate } = await createTranslation(data, params);

  return <div>{translate("about")}</div>;
};

export default About;
