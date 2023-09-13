'use client';
import { createContext, useContext } from "react";
import {
  ThemeContextProps,
  ThemeContextProviderProps,
  defaultThemeContext,
} from "@app-types/theme-context";

const ThemeContext = createContext<ThemeContextProps>(defaultThemeContext);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const value = useThemeContext();

  return (
    <ThemeContext.Provider value={value}>
      <div className={value.theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;