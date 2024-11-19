import { localeNames } from "@/common/models/I18n";
import Header from "@/common/components/Header";

const Page = () => (
  <div className="h-full w-full">
    <Header
      title={
        <>
          <span className="text-orange">Hunmin</span> <span className="text-green">Park</span>
        </>
      }
    />
  </div>
);

export async function generateStaticParams() {
  return localeNames.map(value => ({ locale: value }));
}

export default Page;
