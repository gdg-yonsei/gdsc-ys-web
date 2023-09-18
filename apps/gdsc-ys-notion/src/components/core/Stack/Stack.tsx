"use client";

import { FC, PropsWithChildren } from "react";
import { styled } from "styled-components";

import type { StackProps } from "./Stack.type";

/**
 * ### HStack 컴포넌트
 *
 * 요소를 flexbox 형태의 수평으로 쌓습니다.
 */
const HStack: FC<PropsWithChildren<StackProps>> = ({ children, gap = 0 }) => {
  return (
    <Stack $horizontal={false} $gap={gap}>
      {children}
    </Stack>
  );
};

/**
 * ### VStack 컴포넌트
 *
 * 요소를 flexbox 형태의 수직으로 쌓습니다.
 */
const VStack: FC<PropsWithChildren<StackProps>> = ({ children, gap = 0 }) => {
  return (
    <Stack $horizontal={true} $gap={gap}>
      {children}
    </Stack>
  );
};

const Stack = styled.div<{ $horizontal: boolean; $gap: number }>`
  display: flex;
  flex-direction: ${({ $horizontal }) => ($horizontal ? "column" : "row")};
  width: 100%;
  height: 100%;

  gap: ${({ $gap }) => `${$gap}px`};
`;

const V = {
  Horizontal: HStack,
  Vertical: VStack,
};

export default V;
