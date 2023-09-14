'use client';
import { createContext, useContext } from "react";
import useThemeContextState from "@hooks/use-theme-context-state";
import {
  ThemeContextProps,
  ThemeContextProviderProps,
  defaultThemeContext,
} from "@app-types/theme-context";
import { ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext<ThemeContextProps>(defaultThemeContext);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {

  const value = useThemeContextState();

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={value.theme}>
        <div className={value.theme.palette.mode}>
          {children}
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
    
  );
};

export default ThemeContextProvider;