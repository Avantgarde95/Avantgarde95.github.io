import styled from "@emotion/styled";

import Section from "home/components/Section";

const EducationSection = () => (
  <Section title="학력">
    <Row>
      <School>고등학교</School>
      <Description>대전과학고등학교</Description>
    </Row>
    <Row>
      <School>대학교</School>
      <Description>KAIST</Description>
    </Row>
    <Row>
      <School>대학원</School>
      <Description>KAIST</Description>
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
  font-size: 17px;
  font-weight: 400;
`;
