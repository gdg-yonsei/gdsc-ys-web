"use client";

import { styled } from "styled-components";

import Image from "next/image";

import type { UpperLogoProps } from "./UpperLogo.type";
import { spin } from "./animation";

const UpperLogo = ({ src, alt, ...props }: UpperLogoProps) => {

  return (
    <BlockContainer>
      <LogoContainer>
        <Image src={src} width={96} height={96} alt={alt} {...props} />
      </LogoContainer>
    </BlockContainer>
  );
};

export default UpperLogo;

const BlockContainer = styled.div`
  width: 100%;

  margin-bottom: 108px;
`;

const LogoContainer = styled.div`
  width: 144px;
  height: 144px;

  position: absolute;
  top: -72px;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  border-radius: 50%;
`;