import { RGBA } from '@gdsc-ys-color/types';
import { clamp } from './clamp';

/**
 * Converts RGBA to '#RRGGBBAA' format
 *
 * @param code RGBA color code to change
 * @returns '#RRGGBBAA' color code
 */
export function hexcode(code: RGBA): string {
  const colorArray = [
    ('00' + clamp(0, Math.round(code.r), 255).toString(16)).slice(-2),
    ('00' + clamp(0, Math.round(code.g), 255).toString(16)).slice(-2),
    ('00' + clamp(0, Math.round(code.b), 255).toString(16)).slice(-2),
    ('00' + clamp(0, Math.round(code.a * 255), 255).toString(16)).slice(-2),
  ];

  return `#${colorArray.join('')}`.toUpperCase();
}
