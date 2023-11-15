import { palette } from "../palette";

/**
 * ### Tag color
 * 
 * Colorset for tags.
 * 
 * Used when short essential infomation should be displayed
 * in embedded manner.
 * 
 * Tag has two states.
 * - Common
 * - Disabled
 */
export const tag = {
  /**
   * ### Primary color
   * 
   * Colorset for primary tag
   * 
   * Used for most important information
   */
  primary: {
    /**
     * ### Background color
     * 
     * Background colorset for primary tag.
     */
    background: {
      common: {
        blue: palette.blue.o500,
        green: palette.green.o500,
        yellow: palette.yellow.o800,
        red: palette.red.o600,
      },
      disabled: {
        blue: palette.coolGray.o200,
        green: palette.coolGray.o200,
        yellow: palette.warmGray.o200,
        red: palette.warmGray.o200,
      },
    },
    /**
     * ### Label color
     * 
     * Label colorset for primary tag.
     */
    label: {
      common: {
        blue: palette.white,
        green: palette.white,
        yellow: palette.white,
        red: palette.white,
      },
      disabled: {
        blue: palette.coolGray.o400,
        green: palette.coolGray.o400,
        yellow: palette.warmGray.o400,
        red: palette.warmGray.o400
      },
    },
  },
  secondary: {
    /**
     * ### Background color
     * 
     * Background colorset for secondary tag.
     */
    background: {
      common: {
        blue: palette.blue.o300,
        green: palette.green.o300,
        yellow: palette.yellow.o300,
        red: palette.red.o300,
      },
      disabled: {
        blue: palette.coolGray.o200,
        green: palette.coolGray.o200,
        yellow: palette.warmGray.o200,
        red: palette.warmGray.o200,
      },
    },
    /**
     * ### Label color
     * 
     * Label colorset for secondary tag.
     */
    label: {
      common: {
        blue: palette.blue.o900,
        green: palette.green.o900,
        yellow: palette.yellow.o1000,
        red: palette.red.o900,
      },
      disabled: {
        blue: palette.coolGray.o400,
        green: palette.coolGray.o400,
        yellow: palette.warmGray.o400,
        red: palette.warmGray.o400,
      },
    },
  },
  tertiary: {
    /**
     * ### Background color
     * 
     * Background colorset for tertiary tag.
     */
    background: {
      common: {
        blue: palette.coolGray.o200,
        green: palette.coolGray.o200,
        yellow: palette.warmGray.o200,
        red: palette.warmGray.o200
      },
      disabled: {
        blue: palette.coolGray.o200,
        green: palette.coolGray.o200,
        yellow: palette.warmGray.o200,
        red: palette.warmGray.o200
      },
    },
    /**
     * ### Label color
     * 
     * Label colorset for primary tag.
     */
    label: {
      common: {
        blue: palette.coolGray.o700,
        green: palette.coolGray.o700,
        yellow: palette.warmGray.o700,
        red: palette.warmGray.o700
      },
      disabled: {
        blue: palette.coolGray.o400,
        green: palette.coolGray.o400,
        yellow: palette.warmGray.o400,
        red: palette.warmGray.o400
      },
    },
  },
}