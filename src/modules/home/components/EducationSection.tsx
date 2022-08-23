import styled from "@emotion/styled";

import { English, Korean } from "common/components/Language";
import Section from "modules/home/components/Section";

const EducationSection = () => (
  <Section title={{ Korean: "학력", English: "Education" }}>
    <Row>
      <School>
        <Korean>고등학교</Korean>
        <English>High school</English>
      </School>
      <Description>
        <Korean>대전과학고등학교</Korean>
        <English>Daejeon Science High School</English> (2011 ~ 2013)
      </Description>
    </Row>
    <Row>
      <School>
        <Korean>대학교</Korean>
        <English>University</English>
      </School>
      <Description>
        KAIST <Korean>전산학부 및 수리과학과 학사 (복수전공,</Korean>
        <English>B.S. in School of Computing and Department of Mathematical Sciences (Double major,</English> 2013 ~
        2018)
      </Description>
    </Row>
    <Row>
      <School>
        <Korean>대학원</Korean>
        <English>Graduated school</English>
      </School>
      <Description>
        KAIST <Korean>전산학부 석사</Korean>
        <English>M.S. in School of Computing</English> (2018 ~ 2021)
      </Description>
    </Row>
  </Section>
);

export default EducationSection;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
`;

const School = styled.div`
  width: 90px;
  font-size: 17px;
  font-weight: 700;
`;

const Description = styled.div`
  flex: 1;
  font-size: 17px;
  font-weight: 400;
`;
