import { useCallback, useRef, useState } from "react";

import { useMount } from "..";

/**
 * ### useHover hooks
 *
 * ref를 통해 해당 물체에 마우스가 올라갔는지 판단하는 hooks입니다.
 *
 * @returns [ref, isHovering]
 */
const useHover = () => {
  const [isHovering, setHovering] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  const handleEnter = useCallback(() => {
    setHovering(true);
  }, []);

  const handleLeave = useCallback(() => {
    setHovering(false);
  }, []);

  useMount(() => {
    if (!ref.current) {
      return;
    }

    const refElement = ref.current;

    refElement.addEventListener("mouseenter", handleEnter);
    refElement.addEventListener("mouseleave", handleLeave);

    return () => {
      refElement.removeEventListener("mouseenter", handleEnter);
      refElement.removeEventListener("mouseleave", handleLeave);
    };
  });

  return [ref, isHovering];
};

export default useHover;
