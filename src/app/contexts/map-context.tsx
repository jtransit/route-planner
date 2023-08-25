'use client';
import { createContext, useContext } from 'react';

import useMapContextState from '@/app/hooks/use-map-context-state';
import {
  MapContextProps,
  defaultMapContext,
  MapContextProviderProps,
} from '@app-types/map-context';

const MapContext = createContext<MapContextProps>(defaultMapContext);

export const useMapContext = () => {
  return useContext(MapContext);
};

export const MapContextProvider = ({ children }: MapContextProviderProps) => {
  const value = useMapContextState();

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
