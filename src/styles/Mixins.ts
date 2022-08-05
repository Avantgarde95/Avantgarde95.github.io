import { css } from "@emotion/react";

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
