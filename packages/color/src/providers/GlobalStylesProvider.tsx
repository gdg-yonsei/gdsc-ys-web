import { ColorThemeProvider } from './ColorThemeProvider';
import type { GlobalStylesProviderProps } from './GlobalStylesProvider.type';

const StyleProvider = ({ theme, children }: GlobalStylesProviderProps) => {
  return <ColorThemeProvider themeConfig={theme}>{children}</ColorThemeProvider>;
};

export default StyleProvider;
