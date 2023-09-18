"use client";

import type { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { ThemeProvider as NextThemeProvider_ } from "next-themes";

import { GlobalStyle, theme } from "@/styles";
import medias from "@/styles/media";

const NextThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <NextThemeProvider_ enableColorScheme enableSystem>
      <ThemeProvider theme={{ ...theme, ...medias }}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </NextThemeProvider_>
  );
};

export default NextThemeProvider;
