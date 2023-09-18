"use client";

import { CSSProperties } from "react";
import { styled } from "styled-components";

import { CalloutProps } from "./Callout.type";
import { Text } from "..";

/**
 * ### Callout 컴포넌트
 *
 * Callout 컴포넌트입니다.
 *
 * 강조하고 싶은 내용이나, 내용을 별도의 섹션으로 분리하고 싶을 때 사용할 수 있습니다.
 */
const Callout = ({ leftLabel = "🤔", right, rightLabel = "", rightLabelStyle, bold = false, underline = false, strikeThrough = false }: CalloutProps) => {
  const $rightLabelStyle: CSSProperties = {
    lineHeight: 1.3,
    fontSize: "17px",
    ...rightLabelStyle,
  };

  return (
    <BlockContainer>
      <CalloutWrapper>
        {leftLabel && (
          <LeftContainer>
            <LeftSpan>{leftLabel}</LeftSpan>
          </LeftContainer>
        )}
        {rightLabel && (
          <RightContainer>
            {right ? right : <Text label={rightLabel} labelStyle={$rightLabelStyle} bold={bold} underline={underline} strikeThrough={strikeThrough} />}
          </RightContainer>
        )}
      </CalloutWrapper>
    </BlockContainer>
  );
};

export default Callout;

const BlockContainer = styled.div`
  width: 100%;
  max-width: 100%;

  margin: 4px 0;
  position: relative;

  background-color: ${({ theme }) => theme["callout-background"]};
  border-radius: 4px;
`;

const CalloutWrapper = styled.div`
  width: 100%;
  padding: 16px 16px 16px 12px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  border-radius: 3px;
`;

const LeftContainer = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftSpan = styled.span`
  display: inline-flex;
  white-space: nowrap;
  font-size: 16px;
`;

const RightContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RightSpan = styled.span`
  width: 100%;
  max-width: 100%;

  white-space: pre-wrap;
  word-break: break-word;

  cursor: text;
  padding: 0 2px;
`;
