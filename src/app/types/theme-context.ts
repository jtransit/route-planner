import { Theme } from "@mui/material";
import { ReactNode } from "react";
import darkTheme from "@config/themes/dark";
import defaultTheme from "@config/themes/default";

export interface ThemeContextProviderProps {
  children: ReactNode;
}

export interface ThemePalette {
  [label: string]: Theme
}

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const themeName = {
  DARK: 'dark',
  LIGHT: 'light',
}

export const themeTypes: ThemePalette = {
  [themeName.LIGHT]: defaultTheme,
  [themeName.DARK]: darkTheme,
}

export const defaultThemeContext: ThemeContextProps = {
  theme: themeTypes.dark,
  toggleTheme: () => {},
}

export interface ThemeAction {
  type: string;
  value: Theme;
}