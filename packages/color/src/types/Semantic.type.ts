import type { ColorTheme } from './ColorTheme.type';

/**
 * ### Semantic Type
 *
 * Exports colors type according to color theme
 */
export type Semantic<T> = Record<ColorTheme, T>;
