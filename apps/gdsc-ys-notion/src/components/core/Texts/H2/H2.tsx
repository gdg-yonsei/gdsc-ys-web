"use client";

import { CSSProperties } from "react";

import { Text } from "../Text";

import type { H2Props } from "./H2.type";

/**
 * ### 제목2 컴포넌트
 *
 * 제목2 컴포넌트입니다.
 *
 * 주요한 내용에 대한 제목 혹은 소제목으로 사용됩니다.
 */
const H2 = ({ label, labelColor, underline = false, strikeThrough = false, italic = false, containerColor = "transparent", containerStyle = {} }: H2Props) => {
  const containerStyles: CSSProperties = {
    marginTop: "27px",
    lineHeight: 1.3,
    ...containerStyle,
  };

  const labelStyles: CSSProperties = {
    fontSize: "24px",
  };

  return (
    <Text
      label={label}
      labelColor={labelColor}
      containerColor={containerColor}
      containerStyle={containerStyles}
      labelStyle={labelStyles}
      bold
      underline={underline}
      strikeThrough={strikeThrough}
      italic={italic}
    />
  );
};

export default H2;
