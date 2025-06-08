import type { ImageMetadata } from "astro";

import emotion from "@/shared/icons/emotion.png";

export type Technology = {
  name: string;
} & (
  | {
      iconType: "svg";
      iconName: string;
      iconColor?: string;
    }
  | {
      iconType: "png";
      icon: ImageMetadata;
    }
);

export const allTechnologies = {
  react: { name: "React", iconType: "svg", iconName: "react", iconColor: "#61DAFB" },
  redux: { name: "Redux", iconType: "svg", iconName: "redux", iconColor: "#764ABC" },
  mobx: { name: "MobX", iconType: "svg", iconName: "mobx", iconColor: "#FF9955" },
  next: { name: "Next.js", iconType: "svg", iconName: "next", iconColor: "#7d7d7d" },
  node: { name: "Node.js", iconType: "svg", iconName: "node", iconColor: "#339933" },
  js: { name: "JavaScript", iconType: "svg", iconName: "javascript", iconColor: "#F7DF1E" },
  ts: { name: "TypeScript", iconType: "svg", iconName: "typescript", iconColor: "#3178C6" },
  scss: { name: "SCSS", iconType: "svg", iconName: "scss", iconColor: "#CC6699" },
  emotion: { name: "Emotion", iconType: "png", icon: emotion },
  webpack: { name: "Webpack", iconType: "svg", iconName: "webpack", iconColor: "#8DD6F9" },
  cpp: { name: "C++", iconType: "svg", iconName: "cpp", iconColor: "#00599C" },
  opengl: { name: "OpenGL", iconType: "svg", iconName: "opengl", iconColor: "#5586A4" },
  python: { name: "Python", iconType: "svg", iconName: "python", iconColor: "#3776AB" },
  kotlin: { name: "Kotlin", iconType: "svg", iconName: "kotlin", iconColor: "#7F52FF" },
  aws: { name: "AWS", iconType: "svg", iconName: "aws", iconColor: "#E18E28" },
  electron: { name: "Electron", iconType: "svg", iconName: "electron", iconColor: "#47848F" },
  jest: { name: "Jest", iconType: "svg", iconName: "jest", iconColor: "#C21325" },
  storybook: { name: "Storybook", iconType: "svg", iconName: "storybook", iconColor: "#FF4785" },
  socketio: { name: "Socket.io", iconType: "svg", iconName: "socketio", iconColor: "#010101" },
  ethereum: { name: "Ethereum", iconType: "svg", iconName: "ethereum", iconColor: "#3C3C3D" },
  solidity: { name: "Solidity", iconType: "svg", iconName: "solidity", iconColor: "#363636" },
  // csharp: { name: "C#", icon: createicon(`/icons/csharp.png`, "CSharp") },
  unity: { name: "Unity", iconType: "svg", iconName: "unity" },
} as const satisfies Record<string, Technology>;
