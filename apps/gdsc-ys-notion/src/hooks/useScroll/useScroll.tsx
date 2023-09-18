import { useRef } from "react";

import { useIsomorphicLayoutEffect } from "..";

import type { useScrollProps } from "./useScroll.type";

const isBrowser = typeof window !== `undefined`;
const zeroPosition = { x: 0, y: 0 };

const getClientRect = (element?: HTMLElement) => element?.getBoundingClientRect();

const getScrollPos = ({ element, useWindow, boundingElement }: { element?: ElementRef; boundingElement?: ElementRef; useWindow?: boolean }) => {
  if (!isBrowser) {
    return zeroPosition;
  }

  if (useWindow) {
    return { x: window.scrollX, y: window.scrollY };
  }

  const targetPosition = getClientRect(element?.current || document.body);
  const containerPosition = getClientRect(boundingElement?.current);

  if (!targetPosition) {
    return zeroPosition;
  }

  if (containerPosition) {
    return {
      x: (containerPosition.x || 0) - (targetPosition.x || 0),
      y: (containerPosition.y || 0) - (targetPosition.y || 0),
    };
  }

  return { x: targetPosition.left, y: targetPosition.top };
};

/**
 * ### useScroll hooks
 *
 * 스크롤 위치를 얻는 hooks입니다.
 *
 * @example
 * ```tsx
 * useScroll(({ prevPos, currPos }) => {
 *   console.log(prevPos.x);
 *   console.log(currPos.y);
 * })
 * ```
 */
const useScroll = ({ effect, deps, element, useWindow, wait, boundingElement }: useScrollProps): void => {
  const position = useRef(getScrollPos({ useWindow, boundingElement }));

  let throttleTimeout: number | null = null;

  const callBack = () => {
    const currPos = getScrollPos({ element, useWindow, boundingElement });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return undefined;
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = window.setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    if (boundingElement) {
      boundingElement.current?.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (boundingElement) {
        boundingElement.current?.removeEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }

      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, deps);
};

export default useScroll;
