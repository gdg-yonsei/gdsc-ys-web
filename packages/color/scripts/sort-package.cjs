/* eslint-disable */

const path = require('path');

const { packageJson } = require('@gdsc-ys/misc');

/**
 * ### sortPackage function
 *
 * sort package.json file according to order
 */
function sortPackage() {
  const packageJsonPath = path.resolve(__dirname, '../package.json');

  packageJson(packageJsonPath);
}

sortPackage();
