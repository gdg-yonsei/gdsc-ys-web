import { getHexcode } from "../../utils";
import { palette } from "../palette";

/**
 * ### Border color
 * 
 * Colorset for borders.
 * 
 * Used when additional border styles is needed
 * or separator color between parallel elements
 */
export const border = {
  /**
   * ### Primary color
   * 
   * Border colorset in normal situations
   */
  primary: {
    blue: palette.coolGray.o400,
    green: getHexcode(palette.coolGray.o500, 0.9),
    yellow: palette.warmGray.o400,
    red: palette.warmGray.o400,
  },
  /**
   * ### Secondary color
   * 
   * Border colorset for elevated or focused, active context.
   */
  secondary: {
    blue: palette.coolGray.o800,
    green: palette.coolGray.o800,
    yellow: palette.warmGray.o800,
    red: palette.warmGray.o800,
  }
}