import { useState } from "react";

const useAppContextState = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (v: boolean) => {
    setIsLoading(v);
  };

  return {
    isLoading,
    handleLoading,
  };
};
