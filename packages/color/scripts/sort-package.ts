import path from 'path';

import { packageJson } from '@gdsc-ys/misc';

/**
 * ### sortPackage function
 *
 * sort package.json file according to order
 */
function sortPackage(): void {
  const packageJsonPath = path.resolve(__dirname, '../package.json');

  packageJson(packageJsonPath);
}

sortPackage();
