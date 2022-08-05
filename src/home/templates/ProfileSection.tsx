import styled from "@emotion/styled";

import Me from "home/assets/Me.jpg";

const ProfileSection = () => (
  <Container>
    <Profile src={Me.src} alt="Me" />
    <Content>
      <Name>박훈민</Name>
      <Job>Developer, Front-End</Job>
    </Content>
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 40px;
  padding-left: 20px;
`;

const profileSize = 84;

const Profile = styled.img`
  width: ${profileSize}px;
  height: ${profileSize}px;
  border-radius: 50%;

  object-fit: contain;
`;

const Content = styled.div`
  margin-left: 14px;
`;

const Name = styled.div`
  font-size: 21px;
  font-weight: 500;
`;

const Job = styled.div`
  font-size: 17px;
  font-weight: 400;

  color: ${({ theme }) => theme.color.gray2};
`;

export default ProfileSection;
