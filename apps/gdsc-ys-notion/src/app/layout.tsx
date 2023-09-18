import React from 'react';

import { Header } from "@/components";
import { rootMetadata } from "@/constants";
import { NextThemeProvider } from "@/providers";
import "@/styles/reset.css";

import StyledComponentsRegistry from "./registry";

import type { Metadata } from "next";

export const metadata: Metadata = {
  ...rootMetadata,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <NextThemeProvider>
            <Header />
            {children}
          </NextThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
