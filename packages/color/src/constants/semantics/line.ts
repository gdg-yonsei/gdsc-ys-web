import { getHexcode } from "../../utils";
import { palette } from "../palette";

/**
 * ### Line color
 * 
 * Color for lines.
 * 
 * Used when simple separation is needed.
 */
export const line = {
  /**
   * ### Primary color
   * 
   * Line colorset in normal situations
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
   * Line colorset for elevated or focused, active context.
   */
  secondary: {
    blue: palette.coolGray.o800,
    green: palette.coolGray.o800,
    yellow: palette.warmGray.o800,
    red: palette.warmGray.o800,
  }
}