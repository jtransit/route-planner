'use client';
import { createContext, useContext } from 'react';

import useAppContextState from '@hooks/use-app-context';
import {
  AppContextProps,
  defaultAppContext,
  AppContextProviderProps,
} from '@app-types/app-context';

const AppContext = createContext<AppContextProps>(defaultAppContext);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const value = useAppContextState();

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
