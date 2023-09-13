import { ReactNode } from "react";

export interface ThemeContextProviderProps {
  children: ReactNode;
}

export interface ThemePalette {
  [label: string]: string
}

export interface ThemeContextProps {
  theme: string;
  handleChangeTheme: (v: boolean) => void;
}

export const themeTypes: ThemePalette = {
  light: 'light',
  dark: 'dark'
}

export const defaultThemeContext: ThemeContextProps = {
  theme: themeTypes.dark,
  handleChangeTheme: (v: boolean) => {},
}
