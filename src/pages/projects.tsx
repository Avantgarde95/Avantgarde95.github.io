import Page from "modules/layout/components/Page";
import ProjectList from "modules/projects/components/ProjectList";

const ProjectsPage = () => (
  <Page title={{ Korean: "프로젝트", English: "Projects" }}>
    <ProjectList />
  </Page>
);

export default ProjectsPage;
