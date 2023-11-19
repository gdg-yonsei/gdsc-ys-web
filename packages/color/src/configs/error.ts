/**
 * 
 */
export const ERRORS = {
  /** [ColorThemeProvider] No ThemeConfig Setter Configured */
  CONTEXT_THEME_CONFIG_SETTER_CONTEXT_NO_THEME_CONFIG_SETTER:
  '[@gdsc-yonsei/color] - [ColorThemeProvider]: ThemeConfigSetter not set. Make sure the function is in "ThemeProviderBase" context.',

  /** [ColorThemeProvider] Theme already set by using other */
  CONTEXT_THEME_CONFIG_SETTER_CONTEXT_THEME_CONFIG_ALREADY_SET:
    '[@gdsc-yonsei/color] - [ColorThemeProvider]: Theme already set by themeConfig. ThemeProvider prioritizes themeConfig value than configured theme which is set by useSetTheme() hooks.',
} satisfies Record<string, string>;