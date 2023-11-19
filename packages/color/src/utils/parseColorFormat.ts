import { COLOR_REGEX } from '../constants/regex';
import { ColorFormat } from '../types';

/**
 * Checks the color format with regex, and returns the corresponding color format
 *
 * @param color color to check
 * @returns Color format
 *
 * @author whatisyourname0
 */
export function parseColorFormat(targetColor: string): ColorFormat {
  const colorCode = targetColor.replaceAll(' ', '').toLowerCase();

  const findFormat = (format: ColorFormat) => COLOR_REGEX[format].test(colorCode) && format;

  return (
    findFormat(ColorFormat.RGB) ||
    findFormat(ColorFormat.RGBA) ||
    findFormat(ColorFormat.RRGGBB) ||
    findFormat(ColorFormat.RRGGBBAA) ||
    findFormat(ColorFormat.rgb) ||
    findFormat(ColorFormat.rgba) ||
    (() => {
      throw new Error(`[@gdsc-yonsei/color] - parseColorFormat: Undefined Color format - {${targetColor}}`);
    })()
  );
}
