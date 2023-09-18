"use client";

import { CSSProperties } from "react";

import { Text } from "../Text";

import type { H1Props } from "./H1.type";

/**
 * ### 제목1 컴포넌트
 *
 * 제목1 컴포넌트입니다.
 *
 * 주요한 내용에 대한 제목 혹은 소제목으로 사용됩니다.
 */
const H1 = ({ label, labelColor, underline = false, strikeThrough = false, italic = false, containerColor = "transparent", containerStyle = {} }: H1Props) => {
  const containerStyles: CSSProperties = {
    marginTop: "36px",
    lineHeight: 1.3,
    ...containerStyle,
  };

  const labelStyles: CSSProperties = {
    fontSize: "30px",
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

export default H1;
