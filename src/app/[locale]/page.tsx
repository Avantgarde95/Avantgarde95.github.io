import { localeNames } from "@/common/models/I18n";

const Page = () => <div>Hello</div>;

export async function generateStaticParams() {
  return localeNames.map(value => ({ locale: value }));
}

export default Page;
