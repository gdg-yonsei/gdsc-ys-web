import type { Options as PrettierOption } from 'prettier';

/**
 * ### prettier config
 */
export const PRETTIER_OPTIONS: PrettierOption = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  trailingComma: 'all',
  parser: 'babel-ts',
};
