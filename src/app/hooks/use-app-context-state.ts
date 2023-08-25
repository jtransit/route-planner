import { useState } from 'react';
import { AppContextProps } from '@app-types/app-context';

const useAppContextState: () => AppContextProps = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (v: boolean) => {
    setIsLoading(v);
  };

  return {
    isLoading,
    handleLoading,
  };
};

export default useAppContextState;
