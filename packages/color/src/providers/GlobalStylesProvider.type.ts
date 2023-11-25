import type { ColorTheme } from '@gdsc-yonsei-color/types';

/**
 * ### GlobalStylesProvider props
 *
 * Props for global GlobalStylesProvider node
 */
export interface GlobalStylesProviderProps {
  /**
   * ### Main theme configuration
   *
   * This prop should be enum member of ColorTheme preset
   */
  theme?: ColorTheme;

  /**
   * ### Children node
   *
   * Children node of ColoThemeProvider
   */
  children: React.ReactNode;
}
