import { ColorFormat, RGBA } from '@gdsc-ys-color/types';
import { parseColorFormat } from './parseColorFormat';
import { clamp } from './clamp';

/**
 * Converts given color to RGBA color data type
 *
 * @param color color value
 * @returns color data with RGBA type
 */
export function parseColor(color: string): RGBA {
  const formattedColor = color.replaceAll(' ', '').toLowerCase();

  const colorFormat = parseColorFormat(formattedColor);

  switch (colorFormat) {
    case ColorFormat.RGB:
      return new RGBA(
        clamp(0, parseInt(formattedColor.substring(1, 2), 16), 255),
        clamp(0, parseInt(formattedColor.substring(2, 3), 16), 255),
        clamp(0, parseInt(formattedColor.substring(3, 4), 16), 255),
        1
      );

    case ColorFormat.RGBA:
      return new RGBA(
        clamp(0, parseInt(formattedColor.substring(1, 2), 16), 255),
        clamp(0, parseInt(formattedColor.substring(2, 3), 16), 255),
        clamp(0, parseInt(formattedColor.substring(3, 4), 16), 255),
        clamp(0, parseInt(formattedColor.substring(4, 5), 16) / 255, 1)
      );

    case ColorFormat.RRGGBB:
      return new RGBA(
        clamp(0, parseInt(formattedColor.substring(1, 3), 16), 255),
        clamp(0, parseInt(formattedColor.substring(3, 5), 16), 255),
        clamp(0, parseInt(formattedColor.substring(5, 7), 16), 255),
        1
      );

    case ColorFormat.RRGGBBAA:
      return new RGBA(
        clamp(0, parseInt(formattedColor.substring(1, 3), 16), 255),
        clamp(0, parseInt(formattedColor.substring(3, 5), 16), 255),
        clamp(0, parseInt(formattedColor.substring(5, 7), 16), 255),
        clamp(0, parseInt(formattedColor.substring(7, 9), 16) / 255, 1)
      );

    case ColorFormat.rgb:
      const [r, g, b] = formattedColor.substring(4, formattedColor.length - 1).split(',');
      if (!r || !g || !b) {
        throw new Error(`@gdsc-ys/color] - parseColor: r, g, b value not found! {${formattedColor}}`);
      }

      return new RGBA(clamp(0, parseInt(r), 255), clamp(0, parseInt(g), 255), clamp(0, parseInt(b), 255), 1);

    case ColorFormat.rgba:
      const [rr, gg, bb, aa] = formattedColor.substring(4, formattedColor.length - 1).split(',');
      if (!rr || !gg || !bb || !aa) {
        throw new Error(`@gdsc-ys/color] - parseColor: r, g, b, a value not found! {${formattedColor}}`);
      }

      return new RGBA(
        clamp(0, parseInt(rr), 255),
        clamp(0, parseInt(gg), 255),
        clamp(0, parseInt(bb), 255),
        clamp(0, parseInt(aa), 1)
      );

    default:
      throw new Error(`@gdsc-ys/color] - parseColor: undefined color format`);
  }
}
