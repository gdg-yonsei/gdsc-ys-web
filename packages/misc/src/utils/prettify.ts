import { PRETTIER_OPTIONS } from '@gdsc-yonsei-misc/constants';
import prettier from 'prettier';
import type { Options as PrettierOption } from 'prettier';

/**
 * ### prettify function
 *
 * use 'prettier' to format code with given option
 *
 * @param codeBlock target code to format
 * @param prettierConfig additional config for prettier
 * @returns formatted code wrapped with promise
 */
export function prettify(codeBlock: string, prettierConfig: PrettierOption = {}): Promise<string> {
  return prettier.format(codeBlock, { ...PRETTIER_OPTIONS, ...prettierConfig });
}
