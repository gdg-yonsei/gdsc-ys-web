"use client";

import { CSSProperties } from "react";

import { Text } from "../Text";

import type { H4Props } from "./H4.type";

/**
 * ### 제목3 컴포넌트
 *
 * 제목3 컴포넌트입니다.
 *
 * 주요한 내용에 대한 소제목 혹은 내용 강조 시 사용됩니다.
 */
const H4 = ({ label, labelColor, underline = false, strikeThrough = false, italic = false, containerColor = "transparent", containerStyle = {} }: H4Props) => {
  const containerStyles: CSSProperties = {
    marginTop: "9px",
    lineHeight: 1.3,
    ...containerStyle,
  };

  const labelStyles: CSSProperties = {
    fontSize: "18px",
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

export default H4;
