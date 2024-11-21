export interface Work {
  name: string;
  demoURL: string;
  codeURL: string;
  scale?: number;
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
  {
    name: "simple-christmas-tree",
    demoURL: "https://c6jjj.csb.app/",
    codeURL: "https://codesandbox.io/s/simple-christmas-tree-c6jjj",
  },
  { name: "sun", demoURL: "https://wfxb8f.csb.app/", codeURL: "https://codesandbox.io/s/sun-wfxb8f" },
  {
    name: "cat",
    demoURL: "https://avantgarde95.github.io/cat/cat1.html",
    codeURL: "https://github.com/Avantgarde95/cat",
    scale: 0.9,
  },
  { name: "guitar", demoURL: "https://lqii8k.csb.app/", codeURL: "https://codesandbox.io/s/guitar-lqii8k" },
  {
    name: "sea-and-coconut",
    demoURL: "https://gxfv9i.csb.app/",
    codeURL: "https://codesandbox.io/s/sea-and-coconut-gxfv9i",
    scale: 0.8,
  },
  { name: "doguri", demoURL: "https://ckjtww.csb.app/", codeURL: "https://codesandbox.io/s/doguri-ckjtww" },
  {
    name: "doguri-variations",
    demoURL: "https://d646zl.csb.app/",
    codeURL: "https://codesandbox.io/s/doguri-variations-d646zl",
  },
  {
    name: "infinite-loop-coding-logo",
    demoURL: "https://rj10sv.csb.app/",
    codeURL: "https://codesandbox.io/s/infinite-loop-coding-logo-rj10sv",
  },
  { name: "c2022yh", demoURL: "https://vg3w5j.csb.app/", codeURL: "https://codesandbox.io/s/c2022yh-vg3w5j" },
  {
    name: "moon",
    demoURL: "https://2mj3hc.csb.app/",
    codeURL: "https://codesandbox.io/s/2mj3hc",
    scale: 0.7,
  },
  { name: "snowman", demoURL: "https://ejbt1s.csb.app/", codeURL: "https://codesandbox.io/s/ejbt1s", scale: 0.7 },
];

allWorks.reverse();

export default allWorks;
