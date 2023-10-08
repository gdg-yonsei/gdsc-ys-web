import { readFileSync } from 'fs';
import type { PackageJson } from 'wonderful-tools';

/**
 * ### readPackageJson function
 *
 * read & deserialize package.json object from path
 *
 * @param path package.json path
 * @returns package.json object
 */
export function readPackageJson(path: string): PackageJson {
  const deserPackageJson = readFileSync(path, 'utf-8');
  return JSON.parse(deserPackageJson);
}
