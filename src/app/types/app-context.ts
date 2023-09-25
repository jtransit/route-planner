import { ReactNode } from 'react';

export interface AppContextProps {
  isLoading: boolean;
  showDrawer: boolean;
  showNavigationMenu: boolean;
  handleLoading: (value: boolean) => void;
  handleShowDrawer: (value: boolean) => void;
  handleShowNavigationMenu: (value: boolean) => void;
}

export const defaultAppContext: AppContextProps = {
  isLoading: false,
  showDrawer: false,
  showNavigationMenu: true,
  handleLoading: () => {},
  handleShowDrawer: () => {},
  handleShowNavigationMenu: () => {},
};

export interface AppContextProviderProps {
  children: ReactNode;
}

export interface AppState {
  isLoading: boolean;
  showDrawer: boolean;
  showNavigationMenu: boolean;
}

export interface AppAction {
  type: string;
  value?: boolean;
}

export const defaultAppState = {
  isLoading: false,
  showDrawer: false,
  showNavigationMenu: true,
};
