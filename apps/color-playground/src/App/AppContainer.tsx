import { GlobalStylesProvider, ColorTheme } from '@gdsc-ys/color';

import App from "./App"
import { GlobalStyles } from "../styles"

const AppContainer = () => {
  return (
    <GlobalStylesProvider theme={ColorTheme.Green}>
      <GlobalStyles />
      <App />
    </GlobalStylesProvider>
  )
}

export default AppContainer;