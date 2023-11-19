import type { ChildrenProp } from '@gdsc-yonsei/misc';
import { ColorTheme } from '@gdsc-yonsei-color/types';

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