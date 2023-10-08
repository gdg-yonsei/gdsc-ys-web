import { readPackageJson } from './readPackageJson';
import { sortPacakgeJson } from './sortPackageJson';
import { writePackageJson } from './writePackageJson';

/**
 * ### packageJson function
 *
 * read, sort and write back package.json file
 *
 * @param path given package.json path
 */
export function packageJson(path: string): void {
  const serializedpackageJson = readPackageJson(path);
  const sortedPackageJson = sortPacakgeJson(serializedpackageJson);
  writePackageJson(path, sortedPackageJson);
}
