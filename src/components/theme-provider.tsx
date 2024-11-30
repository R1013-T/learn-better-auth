'use client'

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps, useTheme } from 'next-themes'

import * as React from 'react'

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export { ThemeProvider, useTheme }
