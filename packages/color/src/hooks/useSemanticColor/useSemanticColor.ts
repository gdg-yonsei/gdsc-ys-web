import { useMemo } from "react";

import { color } from "@gdsc-ys-color/styles";
import { ColorTheme } from "@gdsc-ys-color/types";
import type { SemanticColors } from "@gdsc-ys-color/types"

import { useTheme } from "../useTheme";

export function useSemanticColor(themeConfig?: ColorTheme): SemanticColors {
  const theme = useTheme(themeConfig);
  const colorTheme = useMemo(getColorTheme, [theme]);
  
  /**
   * retrieves color theme from generated color object
   */
  function getColorTheme() {
    const colors = { ...color[theme]}

    return colors;
  }

  return colorTheme;
}
