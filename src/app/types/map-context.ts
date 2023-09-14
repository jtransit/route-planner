import { ReactNode } from 'react';
import L from 'leaflet';

import { Suggestions, defaultSuggestions } from '@app-types/map-service';

export interface MapContextProps {
  isLoading: boolean;
  isContextMenuOpen: boolean;
  action?: string;
  containerPoint: L.Point;
  latLng: L.LatLng;
  from?: Location;
  to?: Location;
  isLoadingSearch: boolean;
  search: Suggestions['features'];
  handleLoading: (v: boolean) => void;
  handleAction: (v?: string) => void;
  handleContextMenuOpen: (e: L.LeafletMouseEvent) => void;
  handleContextMenuClose: () => void;
  handleChangeFrom: (v?: string, latLng?: number[]) => void;
  handleChangeTo: (v?: string, latLng?: number[]) => void;
  handleRemove: () => void;
}

export const defaultMapContext: MapContextProps = {
  isLoading: false,
  isContextMenuOpen: false,
  containerPoint: new L.Point(0, 0),
  latLng: new L.LatLng(0, 0),
  isLoadingSearch: false,
  search: defaultSuggestions.features,
  handleLoading: () => {},
  handleAction: (v?: string) => {},
  handleContextMenuOpen: (e: L.LeafletMouseEvent) => {},
  handleContextMenuClose: () => {},
  handleChangeFrom: (v?: string, latLng?: number[]) => {},
  handleChangeTo: (v?: string, latLng?: number[]) => {},
  handleRemove: () => {},
};

export interface MapContextProviderProps {
  children: ReactNode;
}

interface Location {
  address?: string;
  latLng?: L.LatLng;
}

export interface MapState {
  isLoading: boolean;
  action?: string;
  isContextMenuOpen: boolean;
  containerPoint: L.Point;
  eventHandler?: L.LeafletMouseEvent;
  latLng: L.LatLng;
  from?: Location;
  to?: Location;
}

export interface MapAction {
  type: string;
  value?: string | boolean | L.LeafletMouseEvent;
}

export const defaultMapState: MapState = {
  isLoading: false,
  isContextMenuOpen: false,
  containerPoint: defaultMapContext.containerPoint,
  latLng: defaultMapContext.latLng,
};
