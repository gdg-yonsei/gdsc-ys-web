import { writeFileSync } from "fs";
import path from "path";

import { prettify, injectComment } from "@gdsc-yonsei/misc";
import tools, { type RecursiveObject } from 'wonderful-tools';


import { __Internal__colors } from "../src/constants";

/**
 * Build output file name
 */
const OUTPUT_FILE_NAME = 'ColorThemeProvider.generated.ts';

/**
 * Resolve file path
 */
const TARGET_DIR = path.join(__dirname, '../src/providers/ColorThemeProvider');
const TARGET_FILE_DIR = path.resolve(TARGET_DIR, OUTPUT_FILE_NAME);

/** Constant definition */
const PROP_PREFIX = '-';

/** Type definitions */
type ColorPresetName = keyof typeof __Internal__colors;
type ColorPreset = RecursiveObject<{ blue: string; green: string; red: string; yellow: string} | string>;
type ColorPresetGroup = { [key in ColorPresetName ]: ColorPreset};
type SingleColorPreset = Exclude<RecursiveObject<string>, string>;

/**
 * loads color palette from @gdsc-yonsei/color palette,
 * and generate/inject CSS to root
 */
async function main() {
  const colorPresetNameList = tools.getObjectKeys(__Internal__colors);
  const colorPreset = getColorPreset(colorPresetNameList);

  const colorBlue = getColorCode(colorPreset, 'blue');
  const colorBlueRGB = getRGBColorCode(colorPreset, 'blue');

  const colorGreen = getColorCode(colorPreset, 'green');
  const colorGreenRGB = getRGBColorCode(colorPreset, 'green');

  const colorYellow = getColorCode(colorPreset, 'yellow');
  const colorYellowRGB = getRGBColorCode(colorPreset, 'yellow');

  const colorRed = getColorCode(colorPreset, 'red');
  const colorRedRGB = getRGBColorCode(colorPreset, 'red');

  const code = await generateCSSFile(colorBlue, colorBlueRGB, colorGreen, colorGreenRGB, colorYellow, colorYellowRGB, colorRed, colorRedRGB);

  writeFileSync(TARGET_FILE_DIR, code);
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
 * Generate CSS Variables from given mode
 * 
 * @param colorPreset ColorPreset
 * @param mode theme
 * @returns CSS variables
 */
function getColorCode(colorPreset: ColorPreset, mode: 'blue' | 'green' | 'yellow' | 'red') {
  const singleModeColorPreset = getSingleModeColorPreset(colorPreset, mode);
  return flattenColorPreset(singleModeColorPreset, PROP_PREFIX);
}

/**
 * Generate CSS Variables from given mode as RGB format
 * 
 * @param colorPreset ColorPreset
 * @param mode theme
 * @returns CSS variables as RGB
 */
function getRGBColorCode(colorPreset: ColorPreset, mode: 'blue' | 'green' | 'yellow' | 'red') {
  const singleModeColorPreset = getSingleModeColorPreset(colorPreset, mode);
  return flattenRGBColorPreset(singleModeColorPreset, PROP_PREFIX);
}

/**
 * Flatten colorPreset to CSS variable form.
 * 
 * @param colorPreset ColorPreset
 * @param prefix prefix
 * @returns CSS Variables
 */
function flattenColorPreset(colorPreset: RecursiveObject<string>, prefix: string) {
  if (typeof colorPreset === 'string') return '';

  let list = '';

  tools.getObjectKeys(colorPreset).forEach((key) => {
    if (typeof colorPreset[key] !== 'object') {
      list = list + `${prefix + PROP_PREFIX + tools.formatKebab(key)}: ${colorPreset[key]};\n\t\t\t`;
    }

    list = list + `${flattenColorPreset(colorPreset[key], prefix + PROP_PREFIX + tools.formatKebab(key))}`;
  });

  return list;
}

/**
 * Select color theme from given color preset
 * 
 * @param colorPreset ColorPreset
 * @param mode theme to select
 * @returns color node
 */
function getSingleModeColorPreset(colorPreset: ColorPreset, mode: 'blue' | 'green' | 'yellow' | 'red'): SingleColorPreset | string {
  // if resolved
  if (typeof colorPreset !== 'object') return {};

  // if 'mode' key found
  if (tools.getObjectKeys(colorPreset as Exclude<ColorPreset, string>).includes(mode)) {
    return colorPreset[mode];
  }

  return tools.getObjectKeys(colorPreset).reduce((prev, key) => {
    return {
      ...prev,
      [key]: getSingleModeColorPreset(colorPreset[key], mode),
    };
  }, {});
}


/**
 * Flatten colorPreset to CSS variable form, and separate R, G, B values from color.
 * 
 * @param colorPreset ColorPreset
 * @param prefix prefix
 * @returns CSS variables
 */
function flattenRGBColorPreset(colorPreset: RecursiveObject<string>, prefix?: string) {
  if (typeof colorPreset === 'string') return '';

  let list = '';

  tools.getObjectKeys(colorPreset).forEach((key) => {
    if (typeof colorPreset[key] !== 'object') {
      list =
        list +
        `${prefix + PROP_PREFIX + tools.formatKebab(key) + PROP_PREFIX + 'rgb'}: ${extractRGB(
          colorPreset[key] as string,
        )};\n\t\t\t`;
    }

    list = list + `${flattenRGBColorPreset(colorPreset[key]!, prefix + PROP_PREFIX + tools.formatKebab(key))}`;
  });

  return list;
}

/**
 * Extract R, G, B from color string
 * @param color color string
 * @returns Extracted R, G, B
 */
function extractRGB(color: string) {
  return [color.substring(1, 3), color.substring(3, 5), color.substring(5, 7)]
    .map((item) => Number.parseInt(item, 16))
    .join(', ');
}

/**
 * ### generates CSS Provider code according to processed color strings
 * 
 * @param blueColor blue color string
 * @param blueRGBColor blue color RGB string
 * @param greenColor green color string
 * @param greenRGBColor green color RGB string
 * @param yellowColor yellow color string
 * @param yellowRGBColor yellow color RGB string
 * @param redColor red color string
 * @param redRGBColor red color RGB string
 * @returns provider codes
 */
async function generateCSSFile(
  blueColor: string,
  blueRGBColor: string,
  greenColor: string,
  greenRGBColor: string,
  yellowColor: string,
  yellowRGBColor: string,
  redColor: string,
  redRGBColor: string,
) {
  const prettifiedCode = await prettify(
    `
${injectComment(__dirname, __filename)}

import { css } from 'styled-components';

/**
 * Blue Theme CSS Provider
 */
export const blueProviderCSS = css\`
:root {
  ${blueColor}
  ${blueRGBColor}
}\`;

/**
 * Green Theme CSS Provider
 */
export const greenProviderCSS = css\`
:root {
  ${greenColor}
  ${greenRGBColor}
}\`;

/**
 * Yellow Theme CSS Provider
 */
export const yellowProviderCSS = css\`
:root {
  ${yellowColor}
  ${yellowRGBColor}
}\`;

/**
 * Red Theme CSS Provider
 */
export const redProviderCSS = css\`
:root {
  ${redColor}
  ${redRGBColor}
}\`;
    `
  );

  return prettifiedCode;
}

main();