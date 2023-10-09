import React from 'react';

import { ColorProvider } from "./ColorProvider";

import type { StyleProviderProps } from "./StyleProvider.type";

const StyleProvider = ({ theme, children }: StyleProviderProps) => {
  //TODO: FILL ME!
  return (
    <ColorProvider>
      {/* <CSSProvider> */}
      {children}
      {/* </CSSProvider> */}
    </ColorProvider>
  )
}

export default StyleProvider;