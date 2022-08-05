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
