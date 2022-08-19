import Page from "layout/templates/Page";
import MusicList from "musics/templates/MusicList";

const MusicsPage = () => (
  <Page title={{ Korean: "음악", English: "Musics" }}>
    <MusicList />
  </Page>
);

export default MusicsPage;
