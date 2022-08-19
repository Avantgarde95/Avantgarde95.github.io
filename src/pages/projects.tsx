import Page from "layout/templates/Page";
import ProjectList from "projects/templates/ProjectList";

const ProjectsPage = () => (
  <Page title={{ Korean: "프로젝트", English: "Projects" }}>
    <ProjectList />
  </Page>
);

export default ProjectsPage;
