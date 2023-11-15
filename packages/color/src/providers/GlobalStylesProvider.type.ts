import type { ChildrenProp } from '@gdsc-ys/misc';
import type { ColorTheme } from '@gdsc-ys-color/types';

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
