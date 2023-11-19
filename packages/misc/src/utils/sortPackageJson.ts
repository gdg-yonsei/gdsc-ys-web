import { PACKAGE_JSON_ORDERING } from '@gdsc-yonsei-misc/constants';

import type { PackageJson } from 'wonderful-tools';

// target key for sort function
const SORT_KEY_LIST: Array<keyof PackageJson | string> = [
  'scripts',
  'dependencies',
  'devDependencies',
  'peerDependencies',
];

/**
 * sort package.json file
 *
 * @param packageJson target package.json object file
 * @returns sorted package.json
 */
export function sortPacakgeJson(packageJson: PackageJson): PackageJson {
  const sortedPackageJsonEntries = Object.entries(packageJson).sort(sortPackageByKey).map(sortDependencies);

  return Object.fromEntries(sortedPackageJsonEntries);
}

function sortPackageByKey([aKey]: [string, unknown], [bKey]: [string, unknown]): number {
  function getIndex(key: string): number {
    const idx = PACKAGE_JSON_ORDERING.indexOf(key);

    return idx === -1 ? 999999 : idx;
  }

  const a = getIndex(aKey);
  const b = getIndex(bKey);

  return a - b;
}

function sortDependencies([key, data]: [string, unknown]): [string, unknown] {
  // if key is not in sort key list
  if (!SORT_KEY_LIST.includes(key)) {
    return [key, data];
  }

  // if data is not type of object
  if (data === null || typeof data !== 'object') {
    return [key, data];
  }

  // sort function according to key
  function sortDependenciesByKey([aKey]: [string, unknown], [bKey]: [string, unknown]): number {
    const indexList = [aKey, bKey].sort();

    return indexList.indexOf(aKey) - indexList.indexOf(bKey);
  }

  return [key, Object.fromEntries(Object.entries(data).sort(sortDependenciesByKey))];
}
