import { useContext } from "react";

import { ThemeContext } from "../../contexts";
import { ColorTheme } from "../../types";

/**
 * ### useTheme hooks
 * 
 * Get current theme
 * 
 * @param preference manual colorTheme. If not undefined, returns preferred theme and ignores current setting.
 * @returns current configured color mode
 */
export const useTheme = (preference?: ColorTheme) => {
  const currentTheme = useContext(ThemeContext);

  return preference ?? currentTheme;
}