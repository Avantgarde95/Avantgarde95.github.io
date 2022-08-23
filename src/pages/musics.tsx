import Page from "modules/layout/components/Page";
import MusicList from "modules/musics/components/MusicList";

const MusicsPage = () => (
  <Page title={{ Korean: "음악", English: "Musics" }}>
    <MusicList />
  </Page>
);

export default MusicsPage;
