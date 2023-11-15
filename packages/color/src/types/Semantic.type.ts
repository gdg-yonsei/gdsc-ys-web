import { color } from '@gdsc-ys-color/styles';

import type { ColorTheme } from './ColorTheme.type';

/**
 * ### Semantic Type
 *
 * Exports colors type according to color theme
 */
export type Semantic<T> = Record<ColorTheme, T>;

export type SemanticColors = (typeof color)[keyof typeof color]