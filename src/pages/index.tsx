import Page from "modules/layout/components/Page";
import ProfileSection from "modules/home/components/ProfileSection";
import EducationSection from "modules/home/components/EducationSection";
import TechnologySection from "modules/home/components/TechnologySection";
import LinksSection from "modules/home/components/LinksSection";

const HomePage = () => (
  <Page title={{ Korean: "환영합니다", English: "Welcome" }}>
    <ProfileSection />
    <EducationSection />
    <TechnologySection />
    <LinksSection />
  </Page>
);

export default HomePage;
