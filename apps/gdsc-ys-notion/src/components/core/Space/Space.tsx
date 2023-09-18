"use client";

import { styled } from "styled-components";

import type { SpaceProps } from "./Space.type";

/**
 * ### Space 컴포넌트
 *
 * 일정 공간을 차지하는 컴포넌트입니다.
 *
 * 주로 마진, 패딩 대신 명시적으로 공간을 나타낼 때 사용합니다.
 */
const Space = ({ vertical, horizontal, backgroundColor = "transparent" }: SpaceProps) => {
  return <Container $height={vertical} $width={horizontal} $backgroundColor={backgroundColor} />;
};

export default Space;

const Container = styled.div<{
  $height?: number;
  $width?: number;
  $backgroundColor?: string;
}>`
  width: ${({ $width }) => ($width ? `${$width}px` : "100%")};
  min-width: ${({ $width }) => ($width ? `${$width}px` : "100%")};

  height: ${({ $height }) => ($height ? `${$height}px` : "100%")};
  min-height: ${({ $height }) => ($height ? `${$height}px` : "100%")};

  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;
