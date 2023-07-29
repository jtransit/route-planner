"use client"
import { createContext, useContext } from "react";
import useAppContextState from "@hooks/useAppContextState";
import { AppContextProps, defaultAppContext, AppContextProviderProps } from "@appTypes/AppContext";

const AppContext = createContext<AppContextProps>(defaultAppContext);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const value = useAppContextState();

  return <AppContext.Provider value={value} >
    {children}
  </AppContext.Provider>;
};
