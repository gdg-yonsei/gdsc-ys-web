/**
 * ### RGBA value
 *
 * Each red, green, blue value has number between 0 to 255,
 *
 * transparency value has number between 0 to 1
 */
export interface RGBA {
  /**
   * ### Red color value
   */
  r: number;

  /**
   * ### Green color value
   */
  g: number;

  /**
   * ### Blue color value
   */
  b: number;

  /**
   * ### Transparency value
   */
  a: number;
}

export class RGBA implements RGBA {
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}
