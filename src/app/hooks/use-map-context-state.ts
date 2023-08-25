import { useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

import { MapContextProps, defaultMapContext } from '@app-types/map-context';
import { routeControl, getRouteWaypoints } from '@components/routing-control';

const useMapContextState: () => MapContextProps = () => {
  const map = useMap();

  const [isLoading, setIsLoading] = useState(defaultMapContext.isLoading);

  const [isContextMenuOpen, setIsContextMenuOpen] = useState(
    defaultMapContext.isContextMenuOpen
  );

  const [containerPoint, setContainerPoint] = useState<L.Point>(
    defaultMapContext.containerPoint
  );

  const [latLng, setLatLng] = useState<L.LatLng>(defaultMapContext.latLng);

  const [action, setAction] = useState<string>();

  const handleLoading = (v: boolean) => {
    setIsLoading(v);
  };

  const handleAction = (v?: string) => {
    setAction(v);
  };

  const handleContextMenuOpen = (e: L.LeafletMouseEvent) => {
    setIsContextMenuOpen(true);
    handleContainerPoint(e.containerPoint);
    handleLatLng(e.latlng);
  };

  const handleContextMenuClose = () => {
    setIsContextMenuOpen(false);
  };

  const handleContainerPoint = (v: L.Point) => {
    setContainerPoint(v);
  };

  const handleLatLng = (v: L.LatLng) => {
    setLatLng(v);
  };

  const handleAddMarker = () => {
    const newWaypoint = L.latLng(latLng.lat, latLng.lng);
    const waypoints = getRouteWaypoints();

    waypoints.push(newWaypoint);
    routeControl.setWaypoints(waypoints).addTo(map);
    handleContextMenuClose();
  };

  return {
    isLoading,
    isContextMenuOpen,
    action,
    containerPoint,
    latLng,
    handleLoading,
    handleAction,
    handleContextMenuOpen,
    handleContextMenuClose,
    handleAddMarker,
  };
};

export default useMapContextState;
