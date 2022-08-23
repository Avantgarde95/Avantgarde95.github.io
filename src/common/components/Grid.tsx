import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface GridProps {
  className?: string;
  cellWidth: string;
  cellHeight: string;
  maxDimensionX: number;
  children: Array<ReactNode>;
}

const Grid = ({ className, cellWidth, cellHeight, maxDimensionX, children }: GridProps) => (
  <Container
    css={css`
      max-width: calc(${cellWidth} * ${maxDimensionX});
    `}
    className={className}
  >
    {children.map((content, index) => (
      <RealCell
        css={css`
          width: ${cellWidth};
          height: ${cellHeight};
        `}
        key={index}
      >
        {content}
      </RealCell>
    ))}
    {range(maxDimensionX).map((_, index) => (
      <FakeCell
        css={css`
          width: ${cellWidth};
          height: 0;
        `}
        key={index}
      />
    ))}
  </Container>
);

function range(limit: number) {
  return Array.from(Array(limit).keys());
}

const RealCell = styled.div``;

const FakeCell = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;

export default Grid;
