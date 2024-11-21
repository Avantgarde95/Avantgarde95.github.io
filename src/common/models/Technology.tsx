import { ComponentProps, ElementType } from "react";

import ReactSVG from "$/icons/react.svg";
import TSSVG from "$/icons/typescript.svg";
import JSSVG from "$/icons/javascript.svg";
import CSSSVG from "$/icons/css3.svg";
import WebpackSVG from "$/icons/webpack.svg";
import CPPSVG from "$/icons/cplusplus.svg";
import SCSSSVG from "$/icons/sass.svg";
import ReduxSVG from "$/icons/redux.svg";
import NextSVG from "$/icons/nextdotjs.svg";
import NodeSVG from "$/icons/nodedotjs.svg";
import AWSSVG from "$/icons/amazonaws.svg";
import SocketIOSVG from "$/icons/socketdotio.svg";
import MobXSVG from "$/icons/mobx.svg";
import ElectronSVG from "$/icons/electron.svg";
import JestSVG from "$/icons/jest.svg";
import StorybookSVG from "$/icons/storybook.svg";
import KotlinSVG from "$/icons/kotlin.svg";
import PythonSVG from "$/icons/python.svg";
import EthereumSVG from "$/icons/ethereum.svg";
import SoliditySVG from "$/icons/solidity.svg";
import OpenGLSVG from "$/icons/opengl.svg";
import UnitySVG from "$/icons/unity.svg";

function createIcon(imageURL: string, alt: string) {
  const Component = (props: ComponentProps<"img">) => <img src={imageURL} alt={alt} {...props} />;
  Component.displayName = "Icon";
  return Component;
}

export interface Technology {
  name: string;
  Icon?: ElementType;
  iconColor?: string;
}

export const allTechnologies = {
  react: { name: "React", Icon: ReactSVG, iconColor: "#61DAFB" },
  redux: { name: "Redux", Icon: ReduxSVG, iconColor: "#764ABC" },
  mobx: { name: "MobX", Icon: MobXSVG, iconColor: "#FF9955" },
  mui: { name: "Material UI" },
  next: { name: "Next.js", Icon: NextSVG, iconColor: "#7d7d7d" },
  node: { name: "Node.js", Icon: NodeSVG, iconColor: "#339933" },
  js: { name: "JavaScript", Icon: JSSVG, iconColor: "#F7DF1E" },
  ts: { name: "TypeScript", Icon: TSSVG, iconColor: "#3178C6" },
  html: { name: "HTML" },
  css: { name: "CSS", Icon: CSSSVG, iconColor: "#1572B6" },
  scss: { name: "SCSS", Icon: SCSSSVG, iconColor: "#CC6699" },
  emotion: { name: "Emotion", Icon: createIcon(`/icons/emotion.png`, "Emotion"), iconColor: "#C346A8" },
  styled: { name: "styled-components" },
  webpack: { name: "Webpack", Icon: WebpackSVG, iconColor: "#8DD6F9" },
  cpp: { name: "C++", Icon: CPPSVG, iconColor: "#00599C" },
  opengl: { name: "OpenGL", Icon: OpenGLSVG, iconColor: "#5586A4" },
  python: { name: "Python", Icon: PythonSVG, iconColor: "#3776AB" },
  java: { name: "Java" },
  kotlin: { name: "Kotlin", Icon: KotlinSVG, iconColor: "#7F52FF" },
  aws: { name: "AWS", Icon: AWSSVG, iconColor: "#E18E28" },
  electron: { name: "Electron", Icon: ElectronSVG, iconColor: "#47848F" },
  jest: { name: "Jest", Icon: JestSVG, iconColor: "#C21325" },
  storybook: { name: "Storybook", Icon: StorybookSVG, iconColor: "#FF4785" },
  socketio: { name: "Socket.io", Icon: SocketIOSVG, iconColor: "#010101" },
  ethereum: { name: "Ethereum", Icon: EthereumSVG, iconColor: "#3C3C3D" },
  solidity: { name: "Solidity", Icon: SoliditySVG, iconColor: "#363636" },
  csharp: { name: "C#", Icon: createIcon(`/icons/csharp.png`, "CSharp") },
  unity: { name: "Unity", Icon: UnitySVG },
} as const;
