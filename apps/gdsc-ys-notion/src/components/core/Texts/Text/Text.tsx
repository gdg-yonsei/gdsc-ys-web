"use client";

import { css, styled } from "styled-components";

import { useTheme } from "next-themes";

import type { TextProps } from "./Text.type";
import type { BlockContainerProps, TextContentProps } from "@@/core";

const Text = ({
  label,
  labelColor = "#FFFFFF",
  labelStyle = {},
  bold = false,
  underline = false,
  strikeThrough = false,
  italic = false,
  containerStyle = {},
  containerColor = "transparent",
}: TextProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <BlockContainer $containerColor={containerColor} style={containerStyle}>
      <Content $labelColor={labelColor} $resolvedTheme={resolvedTheme} $bold={bold} $underline={underline} $strikeThrough={strikeThrough} $italic={italic} style={labelStyle}>
        {label}
      </Content>
    </BlockContainer>
  );
};

export default Text;

const BlockContainer = styled.div<BlockContainerProps>`
  width: 100%;
  margin-top: 1px;
  margin-bottom: 1px;

  background-color: ${({ $containerColor }) => $containerColor};
`;

const Content = styled.span<TextContentProps>`
  margin: 0;
  padding: 3px 2px;

  display: flex;

  white-space: pre-wrap;
  word-break: break-word;
  caret-color: ${({ theme }) => theme["caret-color"]};
  color: ${({ $labelColor, $resolvedTheme }) => ($labelColor ? $labelColor : $resolvedTheme === "dark" ? "black" : "white")};

  font-size: 16px;
  line-height: 1.5;

  ${({ $bold }) => {
    if ($bold) {
      return css`
        font-weight: 600;
      `;
    }
  }}

  ${({ $underline }) => {
    if ($underline) {
      return css`
        text-decoration: underline;
        text-underline-position: under;
        text-underline-offset: 0px;
      `;
    }
  }};

  ${({ $strikeThrough }) => {
    if ($strikeThrough) {
      return css`
        text-decoration: line-through;
      `;
    }
  }}

  ${({ $italic }) => {
    if ($italic) {
      return css`
        font-style: italic;
      `;
    }
  }}
`;
