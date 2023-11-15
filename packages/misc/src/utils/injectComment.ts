/**
 * ### injectComment function
 * 
 * Injects top comment for auto-generated file.
 *
 * @param dirname target file directory
 * @param filename target filename
 * @returns auto-generated comment
 */
export function injectComment(dirname: string, filename: string) {
  const sourceFile = filename.replace(dirname, '');

  return `/*
  This file is auto-generated.
  All changes in this file will be lost with consequent builds.
  If you want to makes changes, consider modifying 'scripts${sourceFile}'.
*/`;
}
