import { getHexcode } from "../../utils";
import { palette } from "../palette";

/**
 * ### TextButton color
 * 
 * Colorset for elements with which 'press' interaction happens.
 * TextButton refers to buttons which have transparent background
 * 
 * Each colorset has 5 state, which has it's own color.
 * 
 * - Common - Color when the element is ready for user press input
 * - Active - Color when the element is hovered by user
 * - Pressed - Color when the element is pressed
 * - Loading - Color when the element is standby for other change or interaction
 * - Disabled - Color when the element is in disabled state 
 */
export const textButton = {
  /**
   * ### Primary color
   * 
   * Colorset for primary content button
   * 
   * Used for main action or most important interaction
   */
  primary: {
    /**
     * ### Background color
     * 
     * Background colorset for primary button background
     */
    background: {
      active: {
        blue: palette.coolGray.o200,
        green: getHexcode(palette.coolGray.o200, 0.64),
        yellow: palette.warmGray.o200,
        red: palette.warmGray.o200,
      },
      pressed: {
        blue: palette.coolGray.o400,
        green: getHexcode(palette.coolGray.o400, 0.72),
        yellow: palette.warmGray.o400,
        red: palette.warmGray.o400,
      },
    },
    /**
     * ### Label color
     * 
     * Label colorset for primary button background
     * 
     * Used for inner strings or glyphs
     */
    label: {
      common: {
        blue: palette.blue.o500,
        green: palette.green.o500,
        yellow: palette.yellow.o800,
        red: palette.red.o600,
      },
      active: {
        blue: palette.blue.o600,
        green: palette.green.o600,
        yellow: palette.yellow.o900,
        red: getHexcode(palette.red.o700, 0.84),
      },
      pressed: {
        blue: palette.blue.o700,
        green: palette.green.o700,
        yellow: getHexcode(palette.yellow.o1000, 0.84),
        red: palette.red.o700,
      },
      loading: {
        blue: palette.blue.o700,
        green: palette.green.o700,
        yellow: getHexcode(palette.yellow.o1000, 0.84),
        red: palette.red.o700,
      },
      disabled: {
        blue: palette.coolGray.o400,
        green: palette.coolGray.o400,
        yellow: palette.warmGray.o400,
        red: palette.warmGray.o400,
      }
    }
  },
  /**
   * ### Secondary color
   * 
   * Colorset for secondary content button
   * 
   * Used for sub action or less important interaction
   */
  secondary: {
    /**
     * ### Background color
     * 
     * Background colorset for primary button background
     */
    background: {
      active: {
        blue: palette.blue.o300,
        green: getHexcode(palette.green.o300, 0.64),
        yellow: getHexcode(palette.yellow.o300, 0.64),
        red: getHexcode(palette.red.o300, 0.64),
      },
      pressed: {
        blue: palette.blue.o300,
        green: getHexcode(palette.green.o300, 0.72),
        yellow: getHexcode(palette.yellow.o300, 0.72),
        red: getHexcode(palette.red.o300, 0.72),
      },
    },
    /**
     * ### Label color
     * 
     * Label colorset for primary button background
     * 
     * Used for inner strings or glyphs
     */
    label: {
      common: {
        blue: palette.blue.o500,
        green: palette.green.o500,
        yellow: palette.yellow.o800,
        red: palette.red.o500,
      },
      active: {
        blue: palette.blue.o600,
        green: palette.green.o600,
        yellow: palette.yellow.o900,
        red: palette.red.o600,
      },
      pressed: {
        blue: palette.blue.o700,
        green: palette.green.o700,
        yellow: palette.yellow.o1000,
        red: palette.red.o700,
      },
      loading: {
        blue: palette.blue.o700,
        green: palette.green.o700,
        yellow: palette.yellow.o1000,
        red: palette.red.o700,
      },
      disabled: {
        blue: palette.coolGray.o400,
        green: palette.coolGray.o400,
        yellow: palette.warmGray.o400,
        red:palette.warmGray.o400,
      }
    }
  },
  /**
   * ### Tertiary color
   * 
   * Colorset for tertiary content button
   * 
   * Used for sub action or less important interaction
   */
  tertiary: {
    /**
     * ### Background color
     * 
     * Background colorset for tertiary button background
     */
    background: {
      active: {
        blue: getHexcode(palette.coolGray.o200, 0.64),
        green: getHexcode(palette.coolGray.o200, 0.64),
        yellow: getHexcode(palette.warmGray.o200, 0.64),
        red: getHexcode(palette.warmGray.o200, 0.64),
      },
      pressed: {
        blue: getHexcode(palette.coolGray.o200, 0.72),
        green: getHexcode(palette.coolGray.o200, 0.72),
        yellow: getHexcode(palette.warmGray.o200, 0.72),
        red: getHexcode(palette.warmGray.o200, 0.72),
      }
    },
    /**
     * ### Label color
     * 
     * Label colorset for primary button background
     * 
     * Used for inner strings or glyphs
     */
    label: {
      common: {
        blue: palette.coolGray.o800,
        green: palette.coolGray.o800,
        yellow: palette.warmGray.o800,
        red: palette.warmGray.o800,
      },
      active: {
        blue: palette.coolGray.o900,
        green: palette.coolGray.o900,
        yellow: palette.warmGray.o900,
        red: palette.warmGray.o900,
      },
      pressed: {
        blue: palette.coolGray.o1000,
        green: palette.coolGray.o1000,
        yellow: palette.warmGray.o1000,
        red: palette.warmGray.o1000,
      },
      loading: {
        blue:  palette.coolGray.o1000,
        green: palette.coolGray.o1000,
        yellow: palette.warmGray.o1000,
        red: palette.warmGray.o1000,
      },
      disabled: {
        blue:  palette.coolGray.o400,
        green: palette.coolGray.o400,
        yellow: palette.warmGray.o400,
        red: palette.warmGray.o400,
      }
    }
  }
}