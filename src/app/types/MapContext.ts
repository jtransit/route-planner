import { ReactNode } from 'react';
import L from 'leaflet';

export interface MapContextProps {
  isLoading: boolean;
  isContextMenuOpen: boolean;
  action?: string;
  containerPoint: L.Point;
  latLng: L.LatLng;
  handleLoading: (v: boolean) => void;
  handleAction: (v: string) => void;
  handleContextMenuOpen: (v: boolean) => void;
  handleContainerPoint: (v: L.Point) => void;
  handleLatLng: (v: L.LatLng) => void;
  handleAddMarker: () => void;
}

export const defaultMapContext: MapContextProps = {
  isLoading: false,
  isContextMenuOpen: false,
  containerPoint: new L.Point(0, 0),
  latLng: new L.LatLng(0, 0),
  handleLoading: () => {},
  handleAction: (v: string) => {},
  handleContextMenuOpen: () => {},
  handleContainerPoint: (v: L.Point) => {},
  handleLatLng: (v: L.LatLng) => {},
  handleAddMarker: () => {},
};

export interface MapContextProviderProps {
  children: ReactNode;
}
