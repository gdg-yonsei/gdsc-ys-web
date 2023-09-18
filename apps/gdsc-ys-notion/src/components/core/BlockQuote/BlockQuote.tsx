"use client";

import { styled } from "styled-components";

import type { BlockQuoteProps } from "./BlockQuote.type";

/**
 * ### BlockQuote 컴포넌트
 *
 * 인용문을 사용하거나, 내용을 강조할 때 사용합니다.
 */
const BlockQuote = ({ label }: BlockQuoteProps) => {
  return (
    <BlockContainer>
      <HTMLBlockQuote>
        <HorizontalLine />
        <Content>{label}</Content>
      </HTMLBlockQuote>
    </BlockContainer>
  );
};

export default BlockQuote;

const BlockContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 30px;

  margin: 4px 0;
`;

const HTMLBlockQuote = styled.blockquote`
  width: 100%;
  height: 30px;
  margin: 0;
  padding: 3px 2px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;

  font-size: 16px;
`;

const HorizontalLine = styled.div`
  width: 3px;
  height: 100%;

  background-color: white;
`;

const Content = styled.div`
  width: 100%;

  white-space: pre-wrap;
  word-break: break-word;

  caret-color: ${({ theme }) => theme["caret-color"]};
`;
