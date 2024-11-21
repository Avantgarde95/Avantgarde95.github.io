import Header from "@/common/components/Header";
import { CommonParamsProps } from "@/common/models/Props";
import MusicList from "@/modules/musics/components/MusicList";

const Page = async ({ params }: CommonParamsProps) => (
  <div className="h-full w-full">
    <Header title="Musics" />
    <MusicList />
  </div>
);

export default Page;
