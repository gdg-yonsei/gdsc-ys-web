import type { ChildrenProp } from '@gdsc-ys/misc';

import type { ColorFormat } from '@gdsc-ys-color/types';

/**
 * ### StyleProviderProps
 *
 * Props for global StyleProvider node
 */
export interface StyleProviderProps extends ChildrenProp {
  /**
   * ### Main theme configuration
   *
   * _should be enum of ColorTheme preset_
   */
  theme: ColorFormat;
}
