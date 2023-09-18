import { useState } from "react";

import { useMount } from "..";

const useWindowSize = () => {
  const [size, setSize] = useState<
    | {
        width: null;
        height: null;
      }
    | {
        width: number;
        height: number;
      }
  >({
    width: null,
    height: null,
  });

  useMount(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return size;
};

export default useWindowSize;
