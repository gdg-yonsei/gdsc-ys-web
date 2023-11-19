import { ColorFormat, RGBA } from '@gdsc-yonsei-color/types';
import { clamp } from './clamp';

/**
 * ### rgba converter
 *
 * Converts RGBA data type to 'rgba(r, g, b, a)'
 *
 * @param targetColor RGBA data to convery
 * @returns rgba-formatted color
 */
export function rgba(targetColor: RGBA): string {
  return `rgba(${clamp(0, targetColor.r, 255)}, ${clamp(0, targetColor.g, 255)}, ${clamp(
    0,
    targetColor.b,
    255
  )}, ${clamp(0, targetColor.a, 1)})`;
}
