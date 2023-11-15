import { writeFileSync } from "fs";
import path from "path";

import { prettify, injectComment } from "@gdsc-ys/misc";
import tools, { type RecursiveObject } from 'wonderful-tools';


import { __Internal__colors } from "../src/constants";

/**
 * Build output file name
 */
const OUTPUT_FILE_NAME = 'color.generated.ts';

/**
 * Resolve file path
 */
const TARGET_DIR = path.join(__dirname, '../src/styles/colors');
const TARGET_FILE_DIR = path.resolve(TARGET_DIR, OUTPUT_FILE_NAME);

/**
 * Marker for replacement
 */
const MARKER = '-_-_-';

type ColorPresetName = keyof typeof __Internal__colors;
type ColorPreset = RecursiveObject<{ blue: string; green: string; red: string; yellow: string} | string>;
type ColorPresetGroup = { [key in ColorPresetName ]: ColorPreset};
type SingleColorPreset = Exclude<RecursiveObject<string>, string>;

/**
 * ### main function
 * 
 * loads color set from colors(content, semantics)
 * and processes data for useSemanticColor() hooks.
 */
async function main() {
  // loads colorset list from source
  const colorPresetNameList = tools.getObjectKeys(__Internal__colors);
  const colorPreset = getColorPreset(colorPresetNameList);

  const colorCode = await getColorCode(
    getSingleModeColorPreset(colorPreset, 'blue') as SingleColorPreset,
    getSingleModeColorPreset(colorPreset, 'green') as SingleColorPreset,
    getSingleModeColorPreset(colorPreset, 'yellow') as SingleColorPreset,
    getSingleModeColorPreset(colorPreset, 'red') as SingleColorPreset,
  );

  writeFileSync(TARGET_FILE_DIR, colorCode);
}

/**
 * ### getColorPreset function
 * 
 * loads matched color with given color type
 * 
 * @param colorPresetNameList Color preset names array
 * @returns Color preset group
 */
function getColorPreset(colorPresetNameList: ColorPresetName[]): ColorPresetGroup {
  return colorPresetNameList.reduce(
    (prev, colorTypeName) => ({
      ...prev,
      [colorTypeName]: __Internal__colors[colorTypeName],
    }),
    {} as ColorPresetGroup,
  );
}

/**
 * ### getSingleModeColorPreset
 * 
 * generates single theme color preset object from color preset
 * 
 * @param colorPreset color preset object
 * @param mode theme
 * @param prefix prefix string from generated color string key
 * @returns Single color preset or string
 */
function getSingleModeColorPreset(
  colorPreset: ColorPreset,
  mode: 'blue' | 'green' | 'yellow' | 'red',
  prefix?: string
): SingleColorPreset | string {
  // if all resolved,
  if (typeof colorPreset !== 'object') return {};

  // if 'mode' key found
  if (tools.getObjectKeys(colorPreset as Exclude<ColorPreset, string>).includes(mode)) {
    return MARKER + [prefix, mode].join('.') + MARKER;
  }

  return tools.getObjectKeys(colorPreset).reduce((prev, key) => {
    const colorValue = (prefix ? prefix + '.' : '') + key;

    return {
      ...prev,
      [key]: getSingleModeColorPreset(colorPreset[key], mode, colorValue)
    }
  }, {});
}

/**
 * ### getColorCode function
 * 
 * returns merged code according from each parsed single presets 
 *
 * @param blueColorPreset Colorset for blue theme
 * @param greenColorPreset Colorset for green theme
 * @param yellowColorPreset Colorset for yellow theme
 * @param redColorPreset Colorset for red theme
 * 
 * @returns generated code
 */
async function getColorCode(blueColorPreset: SingleColorPreset, greenColorPreset: SingleColorPreset, yellowColorPreset: SingleColorPreset, redColorPreset: SingleColorPreset): Promise<string> {
  const parsedBlueColorPreset = tools.replaceAll(
    tools.replaceAll(JSON.stringify(blueColorPreset), MARKER + '"', ''),
    '"' + MARKER,
    '',
  );

  const parsedGreenColorPreset = tools.replaceAll(
    tools.replaceAll(JSON.stringify(greenColorPreset), MARKER + '"', ''),
    '"' + MARKER,
    '',
  );

  const parsedYellowColorPreset = tools.replaceAll(
    tools.replaceAll(JSON.stringify(yellowColorPreset), MARKER + '"', ''),
    '"' + MARKER,
    '',
  );


  const parsedRedColorPreset = tools.replaceAll(
    tools.replaceAll(JSON.stringify(redColorPreset), MARKER + '"', ''),
    '"' + MARKER,
    '',
  );

  const prettifiedParsedComment = await prettify(
    `
  ${injectComment(__dirname, __filename)}

  import { ${tools.getObjectKeys(blueColorPreset).join(', ')} } from '../../constants';

  /**
   * ### Color object
   * 
   * Colors for each color theme
   */
  export const color = {
    blue: ${parsedBlueColorPreset},
    green: ${parsedGreenColorPreset},
    yellow: ${parsedYellowColorPreset},
    red: ${parsedRedColorPreset}
  };`
);


  return prettifiedParsedComment;
}

main();