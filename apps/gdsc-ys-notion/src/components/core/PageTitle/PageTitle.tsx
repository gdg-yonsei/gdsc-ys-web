"use client";

import type { CSSProperties } from "react";

import { Text } from "../Texts/Text";

import type { PageTitleProps } from "./PageTitle.type";

/**
 * ### PageTitle 컴포넌트
 *
 * 노션의 최상단 제목에 사용되는 컴포넌트입니다.
 */
const PageTitle = ({ label, labelColor }: PageTitleProps) => {
  const containerStyles: CSSProperties = {
    paddingRight: "calc(96px + env(safe-area-inset-right))",
  };

  const labelStyles: CSSProperties = {
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: 1.2,
  };

  return <Text label={label} labelColor={labelColor} containerStyle={containerStyles} labelStyle={labelStyles} bold underline={false} strikeThrough={false} />;
};

export default PageTitle;
