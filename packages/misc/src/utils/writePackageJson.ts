import { PackageJson } from 'wonderful-tools';

import { prettify } from './prettify';

import { writeFileSync } from 'fs';

/**
 * ### writePackageJson function
 *
 * write & serialize package.json object from path and package.json
 *
 * @param path package.json path to write
 * @param packageJson package.json file
 */
export async function writePackageJson(path: string, packageJson: PackageJson): Promise<void> {
  const serializedPackageJson = JSON.stringify(packageJson);
  const prettifiedPackageJson = await prettify(serializedPackageJson, { parser: 'json-stringify' });

  writeFileSync(path, prettifiedPackageJson, 'utf-8');
}
