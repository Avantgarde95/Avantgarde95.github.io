export const allCategories = ["Computer", "Music", "Misc"] as const;
export type Category = typeof allCategories[number];

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
    key: "wslgdisplayissue",
    title: 'Solving "Cannot open display" issue in WSLg',
    time: new Date("2022-03-31").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/WSLgDisplayIssue.md"),
  },
  {
    key: "storybookstyle",
    title: "Loader conflict in Storybook Webpack configuration",
    time: new Date("2022-02-05").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/StorybookStyle.md"),
  },
  {
    key: "dropdownblurclick",
    title: "Mixing blur event and click event",
    time: new Date("2022-01-28").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/DropdownBlurClick.md"),
  },
  {
    key: "flexminheight",
    title: "Fix flexbox overflow using min-height",
    time: new Date("2022-01-22").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/FlexMinHeight.md"),
  },
  {
    key: "cssbordertriangle",
    title: "Drawing a triangle using CSS border",
    time: new Date("2022-01-22").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/CSSBorderTriangle.md"),
  },
  {
    key: "ssrwindow",
    title: "window object when using SSR (ex. Next.js)",
    time: new Date("2022-01-22").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/SSRWindow.md"),
  },
  {
    key: "typescriptenumandstringuniontype",
    title: "enum vs string union type in TypeScript",
    time: new Date("2021-10-19").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/TypeScriptEnumAndStringUnionType.md"),
  },
  {
    key: "customjesttransformer",
    title: "Custom Jest transformer",
    time: new Date("2021-10-19").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/CustomJestTransformer.md"),
  },
  {
    key: "crtp",
    title: "CRTP (Curiously Recurring Template Pattern)",
    time: new Date("2021-06-10").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/CRTP.md"),
  },
  {
    key: "htmltext",
    title: "Get the pure text from a HTML text",
    time: new Date("2021-05-01").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/HTMLText.md"),
  },
  {
    key: "typescriptstringuniontype",
    title: "Generate a union type from an array in TypeScript",
    time: new Date("2021-04-14").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/TypeScriptStringUnionType.md"),
  },
  {
    key: "smartpointertree",
    title: "Creating a tree using the smart pointer",
    time: new Date("2021-04-12").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/SmartPointerTree.md"),
  },
  {
    key: "impressiveslipknotliveperformances",
    title: "Impressive Slipknot live performances",
    time: new Date("2021-01-18").getTime(),
    category: "Music",
    content: require("modules/blog/posts/ImpressiveSlipknotLivePerformances.md"),
  },
  {
    key: "reactiframehistory",
    title: "Preventing iframe from affecting the history",
    time: new Date("2020-12-29").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/IframeHistory.md"),
  },
  {
    key: "githubpagesrouting",
    title: "Routing in GitHub Pages",
    time: new Date("2020-12-29").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/GitHubPagesRouting.md"),
  },
  {
    key: "reacterrorhandling",
    title: "Error handling in React.js",
    time: new Date("2020-12-29").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/ReactErrorHandling.md"),
  },
  {
    key: "christmas2020",
    title: "Merry Christmas!",
    time: new Date("2020-12-28").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/Christmas2020.md"),
  },
  {
    key: "custommarkedrenderer",
    title: "Customize marked.js renderer",
    time: new Date("2020-10-11").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/CustomMarkedRenderer.md"),
  },
  {
    key: "myguitars",
    title: "My guitars",
    time: new Date("2020-10-11").getTime(),
    category: "Music",
    content: require("modules/blog/posts/MyGuitars.md"),
  },
  {
    key: "markdowntest",
    title: "Markdown test",
    time: new Date("2020-10-03").getTime(),
    category: "Computer",
    content: require("modules/blog/posts/MarkdownTest.md"),
  },
  {
    key: "welcome",
    title: "Welcome",
    time: new Date("2020-09-21").getTime(),
    category: "Misc",
    content: require("modules/blog/posts/Welcome.md"),
  },
];
