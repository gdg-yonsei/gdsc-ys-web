import type { ChildrenProp } from '@gdsc-ys/misc';
import { ColorTheme } from '@gdsc-ys-color/types';

/**
 * ### ColorThemeProvider props
 */
export interface ColorThemeProviderProps extends ChildrenProp {
  /**
   * ### Theme config
   * 
   * Configure the overall color theme.
   * 
   * _should be enum member of ColorTheme_
   */
  themeConfig: ColorTheme;
}

/**
 * ### CSS theme provider props
 */
export interface ThemeProviderCSSProps {
  /**
   * ### Configured theme
   */
  themeConfig?: ColorTheme;
}