import { useReducer } from 'react';

import { AppContextProps, defaultAppState } from '@app-types/app-context';
import appReducer from './app-reducer';
import { actions } from './actions';

const useAppContextState: () => AppContextProps = () => {
  const [state, dispatch] = useReducer(appReducer, defaultAppState);

  const handleLoading = (v: boolean) => {
    dispatch({ type: actions.handleLoading, value: v });
  };

  const handleShowDrawer = (v: boolean) => {
    dispatch({ type: actions.handleShowDrawer, value: v });
  };

  const handleShowNavigationMenu = (v: boolean) => {
    dispatch({ type: actions.handleShowNavigationMenu, value: v });
  };

  return {
    isLoading: state.isLoading,
    showDrawer: state.showDrawer,
    showNavigationMenu: state.showNavigationMenu,
    handleLoading,
    handleShowDrawer,
    handleShowNavigationMenu,
  };
};

export default useAppContextState;
