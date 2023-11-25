import { ColorTheme } from '@gdsc-yonsei-color/types';

/**
 * ### ColorThemeProvider props
 */
export interface ColorThemeProviderProps {
  /**
   * ### Theme config
   *
   * Configure the overall color theme.
   *
   * _should be enum member of ColorTheme_
   */
  themeConfig: ColorTheme;

  /**
   * ### Children node
   *
   * Children node of ColoThemeProvider
   */
  children: React.ReactNode;
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
