export interface Work {
  name: string;
  demoURL: string;
  codeURL: string;
  previewURL?: string;
  scale?: number;
  description?: string;
}

function createCodeSandbox(
  name: string,
  projectID: string,
  previewID: string,
  scale?: number,
  description?: string,
): Work {
  return {
    name,
    demoURL: `https://${previewID}.csb.app`,
    codeURL: `https://codesandbox.io/s/${projectID}`,
    // previewURL: `https://codesandbox.io/embed/${previewID}?view=preview&module=%2Findex.html&hidenavigation=1&hidedevtools=1`,
    scale,
    description,
  };
}

const allWorks: Array<Work> = [
  {
    name: "asciirain",
    demoURL: "https://avantgarde95.github.io/asciirain",
    codeURL: "https://github.com/Avantgarde95/asciirain",
    scale: 0.7,
  },
  {
    name: "asciisnow",
    demoURL: "https://avantgarde95.github.io/asciisnow/?image=christmas",
    codeURL: "https://github.com/Avantgarde95/asciisnow",
    scale: 0.7,
  },
  {
    name: "html-birthday-card",
    demoURL: "https://avantgarde95.github.io/html-birthday-card/",
    codeURL: "https://github.com/Avantgarde95/html-birthday-card",
    scale: 0.7,
  },
  createCodeSandbox("simple-christmas-tree", "simple-christmas-tree-c6jjj", "c6jjj"),
  createCodeSandbox("sun", "sun-wfxb8f", "wfxb8f"),
  {
    name: "cat",
    demoURL: "https://avantgarde95.github.io/cat/cat1.html",
    codeURL: "https://github.com/Avantgarde95/cat",
    scale: 0.9,
  },
  createCodeSandbox("guitar", "guitar-lqii8k", "lqii8k"),
  createCodeSandbox("sea-and-coconut", "sea-and-coconut-gxfv9i", "gxfv9i", 0.8),
  createCodeSandbox("puppy", "nike-puppy-loj5r9", "loj5r9"),
  createCodeSandbox("error-cat", "error-cat-4zu4ls", "4zu4ls"),
  createCodeSandbox("doguri", "doguri-ckjtww", "ckjtww"),
  createCodeSandbox("doguri-variations", "doguri-variations-d646zl", "d646zl", 1, "Click the emojis!"),
  createCodeSandbox("animal-cakes", "v2wgzk", "v2wgzk"),
  createCodeSandbox("infinite-loop-coding-logo", "infinite-loop-coding-logo-rj10sv", "rj10sv"),
  createCodeSandbox("c2022yh", "c2022yh-forked-lwmxmn", "lwmxmn"),
  createCodeSandbox("single-element-art\n(Single <div> + All CSS!)", "single-element-art-k20srv", "k20srv"),
  createCodeSandbox("snowman", "ejbt1s", "ejbt1s", 0.7),
  createCodeSandbox("moon", "moon-forked-qgy8l3", "qgy8l3", 0.7, "Click the buttons or the moon!"),
];

allWorks.reverse();

export default allWorks;
