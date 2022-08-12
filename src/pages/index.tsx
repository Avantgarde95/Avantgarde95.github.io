import Page from "layout/templates/Page";
import ProfileSection from "home/templates/ProfileSection";
import EducationSection from "home/templates/EducationSection";
import TechnologySection from "home/templates/TechnologySection";
import LinksSection from "home/templates/LinksSection";

const HomePage = () => (
  <Page title="Welcome">
    <ProfileSection />
    <EducationSection />
    <TechnologySection />
    <LinksSection />
  </Page>
);

export default HomePage;
