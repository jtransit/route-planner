'use client';
import { createContext, useContext } from 'react';
import useMapContextState from '@hooks/useMapContextState';
import {
  MapContextProps,
  defaultMapContext,
  MapContextProviderProps,
} from '@appTypes/MapContext';

const MapContext = createContext<MapContextProps>(defaultMapContext);

export const useMapContext = () => {
  return useContext(MapContext);
};

export const MapContextProvider = ({ children }: MapContextProviderProps) => {
  const value = useMapContextState();

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};
