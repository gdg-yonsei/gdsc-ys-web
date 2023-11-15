import { useContext, useMemo, useState } from 'react';

import { createGlobalStyle } from 'styled-components';

import { blueProviderCSS, greenProviderCSS, redProviderCSS, yellowProviderCSS } from './ColorThemeProvider.generated';
import type { ColorThemeProviderProps, ThemeProviderCSSProps } from './ColorThemeProvider.type';
import { ERRORS } from '../../configs';
import { ThemeConfigSetterContext, ThemeConfigValidateContext, ThemeContext } from '../../contexts';
import { ColorTheme } from '../../types';

const ColorProvider = ({ children, themeConfig }: ColorThemeProviderProps) => {
  // NOTE: default theme is blue (ColorTheme.Blue)
  const [config, setConfig] = useState<ColorTheme>(ColorTheme.Blue);

  // determined color theme config
  const theme = useMemo(() => themeConfig ?? config, [themeConfig, config]);
  const isChecked = useContext(ThemeConfigValidateContext);
  const upperSetThemeConfig = useContext(ThemeConfigSetterContext);

  /**
   * ### setThemeConfig function
   * 
   * sets to other theme
   * 
   * @param newTheme 
   */
  function setThemeConfig(newTheme: ColorTheme): void {
    if (themeConfig) {
      console.log(ERRORS.CONTEXT_THEME_CONFIG_SETTER_CONTEXT_THEME_CONFIG_ALREADY_SET);
    }

    setConfig(newTheme);
  }

  return (
    <ThemeConfigValidateContext.Provider value={true}>
      <ThemeConfigSetterContext.Provider value={isChecked ? upperSetThemeConfig : setThemeConfig}>
        <ThemeContext.Provider value={theme}>
          <ThemeProviderCSS themeConfig={theme} />
          {children}
        </ThemeContext.Provider>
      </ThemeConfigSetterContext.Provider>
    </ThemeConfigValidateContext.Provider>
  )
}

export default ColorProvider;

const ThemeProviderCSS = createGlobalStyle<ThemeProviderCSSProps>`
  ${({ themeConfig }) => {
    switch(themeConfig) {
      case ColorTheme.Blue:
        return blueProviderCSS;

      case ColorTheme.Green:
        return greenProviderCSS;

      case ColorTheme.Yellow:
        return yellowProviderCSS;
      
      case ColorTheme.Red:
        return redProviderCSS;
    }
  }}
`