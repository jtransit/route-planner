import { useState } from "react";
import { AppContextProps } from "@appTypes/AppContext";

const useAppContextState = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (v: boolean) => {
    setIsLoading(v);
  };

  const ret: AppContextProps = {
    isLoading: isLoading,
    handleLoading: handleLoading
  } 

  return {
    isLoading,
    handleLoading,
  };
};

export default useAppContextState