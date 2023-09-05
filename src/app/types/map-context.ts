import { ReactNode } from 'react';
import L from 'leaflet';

export interface MapContextProps {
  isLoading: boolean;
  isContextMenuOpen: boolean;
  action?: string;
  containerPoint: L.Point;
  latLng: L.LatLng;
  from: L.LatLng;
  to: L.LatLng;
  handleLoading: (v: boolean) => void;
  handleAction: (v?: string) => void;
  handleContextMenuOpen: (e: L.LeafletMouseEvent) => void;
  handleContextMenuClose: () => void;
  handleAddFrom: () => void;
  handleAddTo: () => void;
  handleRemove: () => void;
}

export const defaultMapContext: MapContextProps = {
  isLoading: false,
  isContextMenuOpen: false,
  containerPoint: new L.Point(0, 0),
  latLng: new L.LatLng(0, 0),
  from: new L.LatLng(0, 0),
  to: new L.LatLng(0, 0),
  handleLoading: () => {},
  handleAction: (v?: string) => {},
  handleContextMenuOpen: (e: L.LeafletMouseEvent) => {},
  handleContextMenuClose: () => {},
  handleAddFrom: () => {},
  handleAddTo: () => {},
  handleRemove: () => {},
};

export interface MapContextProviderProps {
  children: ReactNode;
}

export interface MapState {
  isLoading: boolean;
  action?: string;
  isContextMenuOpen: boolean;
  containerPoint: L.Point;
  eventHandler?: L.LeafletMouseEvent;
  latLng: L.LatLng;
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
