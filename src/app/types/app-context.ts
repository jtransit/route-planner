import { ReactNode } from 'react';

export interface AppContextProps {
  isLoading: boolean;
  handleLoading: (value: boolean) => void;
}

export const defaultAppContext: AppContextProps = {
  isLoading: false,
  handleLoading: () => {},
};

export interface AppContextProviderProps {
  children: ReactNode;
}
