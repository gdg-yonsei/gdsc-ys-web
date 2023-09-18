import { ColorFormat } from '@gdsc-ys-color/types';

/**
 * ### Color format regex object
 *
 * Color regular regular expressions for validation
 */
export const COLOR_REGEX = {
  /**
   * ### RGB regex
   *
   * RGB regex for valiation
   */
  [ColorFormat.RGB]: /^#[0-9a-f]{3}$/,

  /**
   * ### RGBA regex
   *
   * RGBA regex for validation
   */
  [ColorFormat.RGBA]: /^#[0-9a-f]{4}$/,

  /**
   * ### RRGGBB regex
   *
   * RRGGBB regex for validation
   */
  [ColorFormat.RRGGBB]: /^#[0-9a-f]{6}$/,

  /**
   * ### RRGGBBAA regex
   *
   * RRGGBBAA regex for valigation
   */
  [ColorFormat.RRGGBBAA]: /^#[0-9a-f]{8}$/,

  /**
   * ### rgb(r, g, b) regex
   *
   * rgb(r, g, b) regex for valigation
   */
  [ColorFormat.rgb]: /^rgb\(([1-9][0-9]*|0)(\.[0-9]+)?,([1-9][0-9]*|0)(\.[0-9]+)?,([1-9][0-9]*|0)(\.[0-9]+)?\)$/,

  /**
   * ### rgb(r, g, b, a) regex
   *
   * rgb(r, g, b, a) regex for validation
   */
  [ColorFormat.rgba]:
    /^rgba\(([1-9][0-9]*|0)(\.[0-9]+)?,([1-9][0-9]*|0)(\.[0-9]+)?,([1-9][0-9]*|0)(\.[0-9]+)?,([1-9][0-9]*|0)(\.[0-9]+)?\)$/,
} satisfies Record<ColorFormat, RegExp>;
