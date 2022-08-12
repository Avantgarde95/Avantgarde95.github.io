import { Category } from "blog/Category";

export interface Post {
  title: string;
  time: number;
  category: Category;
  content: string;
}

export const postMap: Record<string, Post> = {
  wslgdisplayissue: {
    title: 'Solving "Cannot open display" issue in WSLg',
    time: new Date("2022-03-31").getTime(),
    category: "Computer",
    content: require("blog/posts/WSLgDisplayIssue.md"),
  },
  storybookstyle: {
    title: "Loader conflict in Storybook Webpack configuration",
    time: new Date("2022-02-05").getTime(),
    category: "Computer",
    content: require("blog/posts/StorybookStyle.md"),
  },
  dropdownblurclick: {
    title: "Mixing blur event and click event",
    time: new Date("2022-01-28").getTime(),
    category: "Computer",
    content: require("blog/posts/DropdownBlurClick.md"),
  },
  flexminheight: {
    title: "Fix flexbox overflow using min-height",
    time: new Date("2022-01-22").getTime(),
    category: "Computer",
    content: require("blog/posts/FlexMinHeight.md"),
  },
  cssbordertriangle: {
    title: "Drawing a triangle using CSS border",
    time: new Date("2022-01-22").getTime(),
    category: "Computer",
    content: require("blog/posts/CSSBorderTriangle.md"),
  },
  ssrwindow: {
    title: "window object when using SSR (ex. Next.js)",
    time: new Date("2022-01-22").getTime(),
    category: "Computer",
    content: require("blog/posts/SSRWindow.md"),
  },
  typescriptenumandstringuniontype: {
    title: "enum vs string union type in TypeScript",
    time: new Date("2021-10-19").getTime(),
    category: "Computer",
    content: require("blog/posts/TypeScriptEnumAndStringUnionType.md"),
  },
  customjesttransformer: {
    title: "Custom Jest transformer",
    time: new Date("2021-10-19").getTime(),
    category: "Computer",
    content: require("blog/posts/CustomJestTransformer.md"),
  },
  crtp: {
    title: "CRTP (Curiously Recurring Template Pattern)",
    time: new Date("2021-06-10").getTime(),
    category: "Computer",
    content: require("blog/posts/CRTP.md"),
  },
  htmltext: {
    title: "Get the pure text from a HTML text",
    time: new Date("2021-05-01").getTime(),
    category: "Computer",
    content: require("blog/posts/HTMLText.md"),
  },
  typescriptstringuniontype: {
    title: "Generate a union type from an array in TypeScript",
    time: new Date("2021-04-14").getTime(),
    category: "Computer",
    content: require("blog/posts/TypeScriptStringUnionType.md"),
  },
  smartpointertree: {
    title: "Creating a tree using the smart pointer",
    time: new Date("2021-04-12").getTime(),
    category: "Computer",
    content: require("blog/posts/SmartPointerTree.md"),
  },
  impressiveslipknotliveperformances: {
    title: "Impressive Slipknot live performances",
    time: new Date("2021-01-18").getTime(),
    category: "Music",
    content: require("blog/posts/ImpressiveSlipknotLivePerformances.md"),
  },
  reactiframehistory: {
    title: "Preventing iframe from affecting the history",
    time: new Date("2020-12-29").getTime(),
    category: "Computer",
    content: require("blog/posts/IframeHistory.md"),
  },
  githubpagesrouting: {
    title: "Routing in GitHub Pages",
    time: new Date("2020-12-29").getTime(),
    category: "Computer",
    content: require("blog/posts/GitHubPagesRouting.md"),
  },
  reacterrorhandling: {
    title: "Error handling in React.js",
    time: new Date("2020-12-29").getTime(),
    category: "Computer",
    content: require("blog/posts/ReactErrorHandling.md"),
  },
  christmas2020: {
    title: "Merry Christmas!",
    time: new Date("2020-12-28").getTime(),
    category: "Computer",
    content: require("blog/posts/Christmas2020.md"),
  },
  custommarkedrenderer: {
    title: "Customize marked.js renderer",
    time: new Date("2020-10-11").getTime(),
    category: "Computer",
    content: require("blog/posts/CustomMarkedRenderer.md"),
  },
  myguitars: {
    title: "My guitars",
    time: new Date("2020-10-11").getTime(),
    category: "Music",
    content: require("blog/posts/MyGuitars.md"),
  },
  markdowntest: {
    title: "Markdown test",
    time: new Date("2020-10-03").getTime(),
    category: "Computer",
    content: require("blog/posts/MarkdownTest.md"),
  },
  welcome: {
    title: "Welcome",
    time: new Date("2020-09-21").getTime(),
    category: "Misc",
    content: require("blog/posts/Welcome.md"),
  },
};
