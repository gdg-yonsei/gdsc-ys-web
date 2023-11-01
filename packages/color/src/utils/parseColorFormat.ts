import { COLOR_REGEX } from '../constants';
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
  const parsedTargetColor = targetColor.replaceAll(' ', '').toLowerCase();

  const findFormat = Object.entries(COLOR_REGEX).find(([, formatRegex]) => formatRegex[1].test(parsedTargetColor));

  if (!findFormat) {
    throw new Error(`[@gdsc-ys/color] - parseColorFormat: Undefined Color format - {${targetColor}}`);
  }

  /**
   * HACK: Wrong type(string) is given because of Object.entries typescript implementation
   *
   * Assert type to ColorFormat
   *
   * For more info:
   * https://stackoverflow.com/questions/55012174/why-doesnt-object-keys-return-a-keyof-type-in-typescript/55012175#55012175
   */
  return findFormat[0] as ColorFormat;
}
