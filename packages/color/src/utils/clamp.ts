/**
 * ### clamp util function
 *
 * Maps the target value to given min, max number
 *
 * @param min minimum value
 * @param target value to map
 * @param max maximum value
 *
 * @returns mapping value
 */
export function clamp(min: number, target: number, max: number): number {
  return Math.max(min, Math.min(target, max));
}
