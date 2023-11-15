import { createContext } from "react";

import { ERRORS } from "../configs";
import { ColorTheme } from "../types";

/**
 * Context that validates whether theme context is set
 */
export const ThemeConfigValidateContext = createContext<boolean>(false);

/**
 * Change the theme by setter function
 */
export type ThemeConfigSetterFn = (theme: ColorTheme) => void;

/**
 * ### Theme setter context
 * 
 * return the setter function. If not configured, the context emits warning.
 */
export const ThemeConfigSetterContext = createContext<ThemeConfigSetterFn>(
  (newTheme: ColorTheme) => {
    newTheme; // HACK: Make tsc happy :)
    console.warn(ERRORS.CONTEXT_THEME_CONFIG_SETTER_CONTEXT_NO_THEME_CONFIG_SETTER);
  }
);

/**
 * ### Theme context
 * 
 * Return the current theme context.
 * 
 * Supports 'blue', 'red', 'green', 'yellow' theme
 * 
 * Default color theme is blue
 * 
 * @default ColorTheme.Blue
 */
export const ThemeContext = createContext<ColorTheme>(ColorTheme.Blue);