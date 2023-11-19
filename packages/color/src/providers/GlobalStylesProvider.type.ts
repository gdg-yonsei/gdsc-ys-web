import type { ChildrenProp } from '@gdsc-yonsei/misc';
import type { ColorTheme } from '@gdsc-yonsei-color/types';

/**
 * ### GlobalStylesProvider props
 *
 * Props for global GlobalStylesProvider node
 */
export interface GlobalStylesProviderProps extends ChildrenProp {
  /**
   * ### Main theme configuration
   *
   * This prop should be enum member of ColorTheme preset
   */
  theme: ColorTheme;
}
