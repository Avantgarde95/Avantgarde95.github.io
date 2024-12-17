export const allCategories = ["Computer", "Music", "Misc"] as const;
export type Category = (typeof allCategories)[number];

export interface PostMeta {
  key: string;
  title: string;
  time: number;
  category: Category;
}

export interface Post extends PostMeta {
  content: string;
}

export const allPosts: Array<Post> = [
  {
    key: "nextmismatch",
    title: "Server & client mismatch problem in Next.js",
    time: new Date("2022-09-21").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/NextMismatch.md"),
  },
  {
    key: "nextgithubpages",
    title: "Creating GitHub pages using Next.js",
    time: new Date("2022-09-19").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/NextGitHubPages.md"),
  },
  {
    key: "cssinjscompatible",
    title: "Creating a component compatible to CSS-in-JS",
    time: new Date("2022-09-08").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/CSSInJSCompatible.md"),
  },
  {
    key: "wslgdisplayissue",
    title: 'Solving "Cannot open display" issue in WSLg',
    time: new Date("2022-03-31").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/WSLgDisplayIssue.md"),
  },
  {
    key: "storybookstyle",
    title: "Loader conflict in Storybook Webpack configuration",
    time: new Date("2022-02-05").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/StorybookStyle.md"),
  },
  {
    key: "dropdownblurclick",
    title: "Mixing blur event and click event",
    time: new Date("2022-01-28").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/DropdownBlurClick.md"),
  },
  {
    key: "flexminheight",
    title: "Fix flexbox overflow using min-height",
    time: new Date("2022-01-22").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/FlexMinHeight.md"),
  },
  {
    key: "cssbordertriangle",
    title: "Drawing a triangle using CSS border",
    time: new Date("2022-01-22").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/CSSBorderTriangle.md"),
  },
  {
    key: "ssrwindow",
    title: "window object when using SSR (ex. Next.js)",
    time: new Date("2022-01-22").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/SSRWindow.md"),
  },
  {
    key: "typescriptenumandstringuniontype",
    title: "enum vs string union type in TypeScript",
    time: new Date("2021-10-19").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/TypeScriptEnumAndStringUnionType.md"),
  },
  {
    key: "customjesttransformer",
    title: "Custom Jest transformer",
    time: new Date("2021-10-19").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/CustomJestTransformer.md"),
  },
  {
    key: "crtp",
    title: "CRTP (Curiously Recurring Template Pattern)",
    time: new Date("2021-06-10").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/CRTP.md"),
  },
  {
    key: "htmltext",
    title: "Get the pure text from a HTML text",
    time: new Date("2021-05-01").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/HTMLText.md"),
  },
  {
    key: "typescriptstringuniontype",
    title: "Generate a union type from an array in TypeScript",
    time: new Date("2021-04-14").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/TypeScriptStringUnionType.md"),
  },
  {
    key: "smartpointertree",
    title: "Creating a tree using the smart pointer",
    time: new Date("2021-04-12").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/SmartPointerTree.md"),
  },
  {
    key: "impressiveslipknotliveperformances",
    title: "Impressive Slipknot live performances",
    time: new Date("2021-01-18").getTime(),
    category: "Music",
    content: require("@/modules/blog/data/ImpressiveSlipknotLivePerformances.md"),
  },
  {
    key: "reactiframehistory",
    title: "Preventing iframe from affecting the history",
    time: new Date("2020-12-29").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/IframeHistory.md"),
  },
  {
    key: "githubpagesrouting",
    title: "Routing in GitHub Pages",
    time: new Date("2020-12-29").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/GitHubPagesRouting.md"),
  },
  {
    key: "reacterrorhandling",
    title: "Error handling in React.js",
    time: new Date("2020-12-29").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/ReactErrorHandling.md"),
  },
  {
    key: "christmas2020",
    title: "Merry Christmas!",
    time: new Date("2020-12-28").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/Christmas2020.md"),
  },
  {
    key: "custommarkedrenderer",
    title: "Customize marked.js renderer",
    time: new Date("2020-10-11").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/CustomMarkedRenderer.md"),
  },
  {
    key: "myguitars",
    title: "My guitars",
    time: new Date("2020-10-11").getTime(),
    category: "Music",
    content: require("@/modules/blog/data/MyGuitars.md"),
  },
  {
    key: "markdowntest",
    title: "Markdown test",
    time: new Date("2020-10-03").getTime(),
    category: "Computer",
    content: require("@/modules/blog/data/MarkdownTest.md"),
  },
  {
    key: "welcome",
    title: "Welcome",
    time: new Date("2020-09-21").getTime(),
    category: "Misc",
    content: require("@/modules/blog/data/Welcome.md"),
  },
];
