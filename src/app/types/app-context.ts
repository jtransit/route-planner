import { ReactNode } from 'react';

export interface AppContextProps {
  isLoading: boolean;
  showDrawer: boolean;
  handleLoading: (value: boolean) => void;
  handleShowDrawer: (value: boolean) => void;
}

export const defaultAppContext: AppContextProps = {
  isLoading: false,
  showDrawer: false,
  handleLoading: () => {},
  handleShowDrawer: () => {},
};

export interface AppContextProviderProps {
  children: ReactNode;
}
