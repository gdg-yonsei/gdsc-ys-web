import * as content from './content';
import * as semantics from "./semantics";

/**
 * ### Internal Colors
 * 
 * Color collection for automated scripts
 * 
 * @deprecated This variable is for interal use only
 */
export const __Internal__colors = {...content, ...semantics }

export * from "./content";
export * from "./semantics";
export * from './regex';