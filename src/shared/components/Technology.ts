import ReactSVG from "$/icons/react.svg?raw";
import TSSVG from "$/icons/typescript.svg?raw";
import JSSVG from "$/icons/javascript.svg?raw";
import CSSSVG from "$/icons/css3.svg?raw";
import WebpackSVG from "$/icons/webpack.svg?raw";
import CPPSVG from "$/icons/cplusplus.svg?raw";
import SCSSSVG from "$/icons/sass.svg?raw";
import ReduxSVG from "$/icons/redux.svg?raw";
import NextSVG from "$/icons/nextdotjs.svg?raw";
import NodeSVG from "$/icons/nodedotjs.svg?raw";
import AWSSVG from "$/icons/amazonaws.svg?raw";
import SocketIOSVG from "$/icons/socketdotio.svg?raw";
import MobXSVG from "$/icons/mobx.svg?raw";
import ElectronSVG from "$/icons/electron.svg?raw";
import JestSVG from "$/icons/jest.svg?raw";
import StorybookSVG from "$/icons/storybook.svg?raw";
import KotlinSVG from "$/icons/kotlin.svg?raw";
import PythonSVG from "$/icons/python.svg?raw";
import EthereumSVG from "$/icons/ethereum.svg?raw";
import SoliditySVG from "$/icons/solidity.svg?raw";
import OpenGLSVG from "$/icons/opengl.svg?raw";
import UnitySVG from "$/icons/unity.svg?raw";

export interface Technology {
  name: string;
  icon: string;
  iconColor?: string;
}

export const allTechnologies = {
  react: { name: "React", icon: ReactSVG, iconColor: "#61DAFB" },
  redux: { name: "Redux", icon: ReduxSVG, iconColor: "#764ABC" },
  mobx: { name: "MobX", icon: MobXSVG, iconColor: "#FF9955" },
  mui: { name: "Material UI" },
  next: { name: "Next.js", icon: NextSVG, iconColor: "#7d7d7d" },
  node: { name: "Node.js", icon: NodeSVG, iconColor: "#339933" },
  js: { name: "JavaScript", icon: JSSVG, iconColor: "#F7DF1E" },
  ts: { name: "TypeScript", icon: TSSVG, iconColor: "#3178C6" },
  html: { name: "HTML" },
  css: { name: "CSS", icon: CSSSVG, iconColor: "#1572B6" },
  scss: { name: "SCSS", icon: SCSSSVG, iconColor: "#CC6699" },
  // emotion: { name: "Emotion", icon: createicon(`/icons/emotion.png`, "Emotion"), iconColor: "#C346A8" },
  styled: { name: "styled-components" },
  webpack: { name: "Webpack", icon: WebpackSVG, iconColor: "#8DD6F9" },
  cpp: { name: "C++", icon: CPPSVG, iconColor: "#00599C" },
  opengl: { name: "OpenGL", icon: OpenGLSVG, iconColor: "#5586A4" },
  python: { name: "Python", icon: PythonSVG, iconColor: "#3776AB" },
  java: { name: "Java" },
  kotlin: { name: "Kotlin", icon: KotlinSVG, iconColor: "#7F52FF" },
  aws: { name: "AWS", icon: AWSSVG, iconColor: "#E18E28" },
  electron: { name: "Electron", icon: ElectronSVG, iconColor: "#47848F" },
  jest: { name: "Jest", icon: JestSVG, iconColor: "#C21325" },
  storybook: { name: "Storybook", icon: StorybookSVG, iconColor: "#FF4785" },
  socketio: { name: "Socket.io", icon: SocketIOSVG, iconColor: "#010101" },
  ethereum: { name: "Ethereum", icon: EthereumSVG, iconColor: "#3C3C3D" },
  solidity: { name: "Solidity", icon: SoliditySVG, iconColor: "#363636" },
  // csharp: { name: "C#", icon: createicon(`/icons/csharp.png`, "CSharp") },
  unity: { name: "Unity", icon: UnitySVG },
} as const;
