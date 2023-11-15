/**
 * ### Color theme enum
 *
 * Enumerate of color themes
 */
export const ColorTheme = {
  /**
   * ### Red-centered mode
   */
  Red: 'red',

  /**
   * ### Green-centered mode
   */
  Green: 'green',

  /**
   * ### Blue-centered mode
   */
  Blue: 'blue',

  /**
   * ### Yellow-centered mode
   */
  Yellow: 'yellow',
}

export type ColorTheme = (typeof ColorTheme)[keyof typeof ColorTheme];
