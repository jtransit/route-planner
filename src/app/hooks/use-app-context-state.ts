import { useState } from 'react';
import { AppContextProps } from '@app-types/app-context';

const useAppContextState: () => AppContextProps = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [showDrawer, setShowDrawer] = useState(false);

  const handleLoading = (v: boolean) => {
    setIsLoading(v);
  };

  const handleShowDrawer = (v: boolean) => {
    setShowDrawer(v);
  };

  return {
    isLoading,
    showDrawer,
    handleLoading,
    handleShowDrawer,
  };
};

export default useAppContextState;
