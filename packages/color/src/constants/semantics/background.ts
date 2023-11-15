import { palette } from "../palette"

/**
 * ### Background color
 * 
 * Colorset for overall background color or background of main elements
 */
export const background = {
  /**
   * ### Common background
   * 
   * Background colorset in normal situations
   */
  common: {
    /**
     * ### Primary level
     * 
     * Common background color
     */
    primary: {
      blue: palette.white,
      green: palette.white,
      yellow: palette.white,
      red: palette.white,
    },
    /**
     * ### Secondary lavel
     * 
     * for elevated element or background context
     */
    secondary: {
      blue: palette.blue.o100,
      green: palette.green.o100,
      yellow: palette.yellow.o100,
      red: palette.red.o100,
    },
    /**
     * ### Tertiary level
     * 
     * for more elevated element or background context
     */
    tertiary: {
      blue: palette.white,
      green: palette.white,
      yellow: palette.white,
      red: palette.white,
    },
  },
  /**
   * ### Grayscale background
   * 
   * Background colorset in normal grayscale bacground context.
   */
  gray: {
   /**
    * ### Primary level
    * 
    * Common background color
    */
    primary: {
      blue: palette.white,
      green: palette.white,
      yellow: palette.white,
      red: palette.white,
    },
    /**
     * ### Secondary level
     * 
     * for elevated element or background context
     */
    secondary: {
      blue: palette.coolGray.o100,
      green: palette.coolGray.o100,
      yellow: palette.warmGray.o100,
      red: palette.warmGray.o100,
    },
    /**
     * ### Tertiary level
     * 
     * for more elevated element or background context
     */
    tertiary: {
      blue: palette.white,
      green: palette.white,
      yellow: palette.white,
      red: palette.white,
    },
  }
}