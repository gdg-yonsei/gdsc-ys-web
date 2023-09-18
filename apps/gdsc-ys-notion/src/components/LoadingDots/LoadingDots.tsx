'use client';

import styled, { keyframes } from "styled-components";
import { rotation } from "./animation";

const LoadingDots = ({ fill = "white" }) => {
  return <Dot fill={fill} />;
}

export default LoadingDots;

const Dot = styled.div`
  --s: 15px;
  width: calc(var(--s)*2.33);

  aspect-ratio: 1;

  display: flex;
  justify-content: space-between;

  &::before,
  &::after {
    content: "";
    width: var(--s);
    border-radius: calc(var(--s)*2);

    --_g: no-repeat radial-gradient(farthest-side,white 94%,white);

    background:
      var(--_g) top,
      var(--_g) bottom;
    background-size: 100% var(--s);
    transform-origin: 50% calc(100% - var(--s)/2);
    animation: ${rotation} 1s infinite;
  }

  &::after {
    transform-origin: 50% calc(var(--s)/2);
  }
`