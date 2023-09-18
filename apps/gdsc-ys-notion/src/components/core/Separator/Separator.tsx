"use client";

import { CSSProperties } from "react";
import { styled, useTheme } from "styled-components";

import { SeparatorProps } from ".";

/**
 * ### 구분선 컴포넌트
 *
 * 구분선 컴포넌트입니다.
 *
 * 영역을 구분할 때 사용합니다.
 *
 * 추가적인 공간을 만들거나, type, color를 지정할 수 있습니다.
 */
const Separator = ({ margin = 0, type = "solid", color }: SeparatorProps) => {
  const theme = useTheme();

  return (
    <BlockContainer $margin={margin}>
      <Line $type={type} $color={color ?? theme.separator} />
    </BlockContainer>
  );
};

export default Separator;

const BlockContainer = styled.div<{ $margin: number }>`
  width: 100%;
  height: 13px;
  margin: ${({ $margin }) => `${$margin}px`} 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.hr<{ $type: CSSProperties["borderStyle"]; $color: string }>`
  width: 100%;
  height: 0px;
  border: 1px ${({ $type }) => $type} ${({ $color }) => $color};
`;
