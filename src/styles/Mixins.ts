import { css, keyframes } from "@emotion/react";

export const wideScreen = "(min-width: 768px)";

export const resetButton = css`
  cursor: pointer;
  box-sizing: border-box;

  border: 0;
  padding: 0;
  color: inherit;
  background-color: transparent;

  font-family: inherit;
  font-size: inherit;
`;

export const resetLink = css`
  text-decoration: none;

  color: inherit;

  font-family: inherit;
  font-size: inherit;
`;

/**
 * Reset <h1>, <h2>, ...
 */
export const resetTitle = css`
  margin: 0;
  padding: 0;
`;

export const centerChild = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const centerAsAbsolute = css`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const putShadow = css`
  box-shadow: 0px 1px 5px rgba(129, 129, 129, 0.25);
`;

interface AnimationInfo {
  startStyle: string;
  endStyle: string;
}

export const fadeIn: AnimationInfo = {
  startStyle: "opacity: 0",
  endStyle: "opacity: 1",
};

export const zoomIn: AnimationInfo = {
  startStyle: "transform: scale(0.5)",
  endStyle: "transform: scale(1)",
};

export const createAnimation = (infos: Array<AnimationInfo>, duration = "1s") => {
  const animationKeyframes = keyframes`
    100% {
      ${infos.map(animation => animation.endStyle + ";").join("\n")}
    }
  `;

  const animationStyle = css`
    ${infos.map(animation => animation.startStyle + ";").join("\n")}
    animation: ${animationKeyframes} ${duration} forwards;
  `;

  return {
    style: animationStyle,
    keyframes: animationKeyframes,
  };
};
