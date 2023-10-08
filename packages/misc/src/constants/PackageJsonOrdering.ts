import type { PackageJson } from 'wonderful-tools';

/**
 * ### package.json order prioirty
 */
export const PACKAGE_JSON_ORDERING: Array<keyof PackageJson | string> = [
  'name',
  'description',
  'version',
  'packageManager',
  'workspaces', // yarn workspace
  'main',
  'files',
  'types',
  'author',
  'contributors',
  'license',
  'funding',
  'repository',
  'homepage',
  'bugs',
  'keywords',
  'private',
  'scripts',
  'dependencies',
  'devDependencies',
  'peerDependencies',
  'gitHead',
  'browser',
  'resolutions',
];
