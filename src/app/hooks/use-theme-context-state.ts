import { ThemeContextProps, defaultThemeContext } from "@app-types/theme-context"
import { Theme } from "@mui/material";
import themeReducer from "@hooks/theme-reducer"
import { useReducer } from "react";
import { actions } from "./actions";

const useThemeContextState: () => ThemeContextProps = () => {

  const [state, dispatch] = useReducer(themeReducer, defaultThemeContext);

  const toggleTheme = () => {
    dispatch({type: actions.toggleTheme, value: state.theme});
  }

  return {
    theme: state.theme,
    toggleTheme
  }
}

export default useThemeContextState;