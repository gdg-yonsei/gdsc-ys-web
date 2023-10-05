import { clamp } from './clamp';
import { parseColor } from './parseColor';
import { hexcode } from './hexcode';

/**
 * Converts color string to '#RRGGBBAA' color format
 *
 * @param color color string to convery
 * @param opacity transparency to inject
 */
export function getHexcode(color: string, transparency?: number): string {
  const parsedCode = parseColor(color);

  return hexcode({ ...parsedCode, a: clamp(0, transparency ?? parsedCode.a, 1) });
}
