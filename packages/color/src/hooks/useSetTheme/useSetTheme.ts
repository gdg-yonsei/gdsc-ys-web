import { useContext } from "react";

import { ThemeConfigSetterContext, type ThemeConfigSetterFn } from '../../contexts';

/**
 * ### useSetTheme hooks
 * 
 * returns theme setter function
 * 
 * if theme is set by ThemeProvider, theme setted by useSetTheme() will be ignored.
 * 
 * @returns ThemeConfigSetterFunction
 */
export const useSetTheme = (): ThemeConfigSetterFn => {
  const themeSetter = useContext(ThemeConfigSetterContext);

  return themeSetter;
}