import { createContext, useContext } from "react";

import { useAppContextState } from "@hooks";
import { AppContext, defaultAppContext } from "@types/AppContext";

const AppContext = createContext<AppContext>(defaultAppContext);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = () => {
  const value = useAppContextState();

  return <AppContext.Provider value={value} />;
};
