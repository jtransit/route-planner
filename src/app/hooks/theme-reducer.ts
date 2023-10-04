import { ThemeAction, ThemeContextProps, themeName, themeTypes } from '@app-types/theme-context';
import { actions } from './actions';
import { Theme } from "@mui/material";

export const themeReducer = (state: ThemeContextProps, action: ThemeAction) => {
  let newState;

  switch (action.type) {
    case actions.toggleTheme: {
      newState = {
        ...state,
        theme: action.value.palette.mode === themeName.DARK
          ? themeTypes[themeName.LIGHT] 
          : themeTypes[themeName.DARK],
      };
      break;
    }
    default: {
      throw new Error('Invalid Action');
    }
  }

  return newState;
};

export default themeReducer;
