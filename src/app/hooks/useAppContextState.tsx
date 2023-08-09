import { useState } from 'react';
import { AppContextProps } from '@appTypes/AppContext';

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
