import { forwardRef, useState } from "react";
import { styled } from "styled-components";

import Image from "next/image";

import { useScroll, useWindowSize } from "@/hooks";
import u from "@/utils";

import type { ScrollProps } from "@/hooks/useScroll";

const BannerImage = forwardRef<HTMLDivElement, any>((_, ref) => {
  const [brightness, setBrightness] = useState(100);
  const [upperPadding, setUpperPadding] = useState(0);

  const { height } = useWindowSize();
  const scrollEffect = ({ currPos }: ScrollProps) => {
    const nextBrightness = u.math.range(0, (height as number) / 2, 100, 0, currPos.y);
    const nextUpperPadding = u.math.range(0, (height as number) / 2, 0, 25, currPos.y);

    setBrightness(nextBrightness);
    setUpperPadding(nextUpperPadding);
  };

  useScroll({
    effect: scrollEffect,
    useWindow: true,
  });

  return (
    <ImageContainer $brightness={brightness} $upperPadding={upperPadding} ref={ref}>
      <Image
        src={"/images/gdsc-banner-dark.png"}
        style={{
          objectFit: "cover",
        }}
        loading="eager"
        fill
        priority
        alt="GDSC Banner Image"
      />
    </ImageContainer>
  );
});

export default BannerImage;

const ImageContainer = styled.div<{ $brightness: number; $upperPadding: number }>`
  width: 100%;
  height: 50vh;

  /* transform: translateY(); */
  transform: ${({ $upperPadding }) => `translateY(-${$upperPadding}vh)`};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  filter: ${({ $brightness }) => `brightness(${$brightness}%)`};
`;
