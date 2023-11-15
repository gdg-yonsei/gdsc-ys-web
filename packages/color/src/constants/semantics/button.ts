import { getHexcode } from "../../utils";
import { palette } from "../palette";

/**
 * ### Button color
 * 
 * Colorset for elements with which 'press' interaction happens.
 * 
 * Each colorset has 5 state, which has it's own color.
 * 
 * - Common - Color when the element is ready for user press input
 * - Active - Color when the element is hovered by user
 * - Pressed - Color when the element is pressed
 * - Loading - Color when the element is standby for other change or interaction
 * - Disabled - Color when the element is in disabled state 
 */
export const button = {
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
        red: palette.red.o700,
      },
      pressed: {
        blue: palette.blue.o700,
        green: palette.green.o700,
        yellow: getHexcode(palette.yellow.o1000, 0.84),
        red: palette.red.o800,
      },
      loading: {
        blue: palette.blue.o700,
        green: palette.blue.o700,
        yellow: getHexcode(palette.yellow.o1000, 0.84),
        red: palette.red.o700,
      },
      disabled: {
        blue: palette.coolGray.o200,
        green: palette.coolGray.o200,
        yellow: palette.warmGray.o200,
        red: palette.warmGray.o200,
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
        blue: palette.white,
        green: palette.white,
        yellow: palette.white,
        red: palette.white,
      },
      active: {
        blue: palette.white,
        green: palette.white,
        yellow: palette.white,
        red: palette.white,
      },
      pressed: {
        blue: palette.white,
        green: palette.white,
        yellow: palette.white,
        red: palette.white,
      },
      loading: {
        blue: palette.white,
        green: palette.white,
        yellow: palette.white,
        red: palette.white,
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
      common: {
        blue: getHexcode(palette.blue.o300, 0.84),
        green: getHexcode(palette.green.o300, 0.9),
        yellow: palette.yellow.o300,
        red: palette.red.o300,
      },
      active: {
        blue: getHexcode(palette.blue.o400, 0.9),
        green: getHexcode(palette.green.o400, 0.84),
        yellow: palette.yellow.o400,
        red: palette.red.o400,
      },
      pressed: {
        blue: palette.blue.o400,
        green: palette.green.o400,
        yellow: palette.yellow.o500,
        red: getHexcode(palette.red.o500, 0.9),
      },
      loading: {
        blue: palette.blue.o400,
        green: palette.green.o400,
        yellow: palette.yellow.o500,
        red: getHexcode(palette.red.o500, 0.9),
      },
      disabled: {
        blue: palette.coolGray.o200,
        green: palette.coolGray.o200,
        yellow: palette.warmGray.o200,
        red: palette.warmGray.o200,
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
        blue: palette.blue.o900,
        green: palette.green.o900,
        yellow: palette.yellow.o1000,
        red: palette.red.o900,
      },
      active: {
        blue: palette.blue.o900,
        green: palette.green.o900,
        yellow: palette.yellow.o1000,
        red: palette.red.o1000,
      },
      pressed: {
        blue: palette.blue.o900,
        green: palette.green.o900,
        yellow: palette.yellow.o1000,
        red: palette.red.o1000,
      },
      loading: {
        blue: palette.blue.o900,
        green: palette.green.o900,
        yellow: palette.yellow.o1000,
        red: palette.red.o1000,
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
     * Background colorset for primary button background
     */
    background: {
      common: {
        blue: palette.coolGray.o200,
        green: palette.coolGray.o200,
        yellow: palette.warmGray.o200,
        red: palette.warmGray.o200,
      },
      active: {
        blue: palette.coolGray.o300,
        green: palette.coolGray.o300,
        yellow: palette.warmGray.o300,
        red: palette.warmGray.o300,
      },
      pressed: {
        blue: palette.coolGray.o400,
        green: palette.coolGray.o400,
        yellow: palette.warmGray.o400,
        red: palette.warmGray.o400,
      },
      loading: {
        blue: palette.coolGray.o400,
        green: palette.coolGray.o400,
        yellow: palette.warmGray.o400,
        red: palette.warmGray.o400
      },
      disabled: {
        blue: palette.coolGray.o200,
        green: palette.coolGray.o200,
        yellow: palette.warmGray.o200,
        red: palette.warmGray.o200
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
        blue: palette.coolGray.o700,
        green: palette.coolGray.o700,
        yellow: palette.warmGray.o700,
        red: palette.warmGray.o700,
      },
      active: {
        blue: palette.coolGray.o700,
        green: palette.coolGray.o700,
        yellow: palette.warmGray.o700,
        red: palette.warmGray.o800,
      },
      pressed: {
        blue: palette.coolGray.o700,
        green: palette.coolGray.o700,
        yellow: palette.warmGray.o700,
        red: palette.warmGray.o800,
      },
      loading: {
        blue: palette.coolGray.o700,
        green: palette.coolGray.o700,
        yellow: palette.warmGray.o700,
        red: palette.warmGray.o800,
      },
      disabled: {
        blue: palette.coolGray.o400,
        green: palette.coolGray.o400,
        yellow: palette.warmGray.o400,
        red: palette.warmGray.o400,
      }
    }
  }
}