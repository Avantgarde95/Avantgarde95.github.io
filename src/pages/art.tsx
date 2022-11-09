import Page from "modules/layout/components/Page";
import ArtList from "modules/art/components/ArtList";

const ArtPage = () => (
  <Page title={{ Korean: "아트", English: "Art" }}>
    <ArtList />
  </Page>
);

export default ArtPage;
