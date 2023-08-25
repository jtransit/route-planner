import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

import { MapContextProps, defaultMapContext } from '@app-types/map-context';
import { routeControl } from '@components/routing-control';

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

  const [from, setFrom] = useState<L.LatLng | undefined>();
  const [to, setTo] = useState<L.LatLng | undefined>();

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
    const waypoints = routeControl.getWaypoints();
    const waypoint = new L.Routing.Waypoint(latLng, '', {});

    if (!from) {
      setFrom(latLng);
      routeControl.spliceWaypoints(0, 1, waypoint);
    } else if (!to) {
      setTo(latLng);
      routeControl.spliceWaypoints(waypoints.length - 1, 1, waypoint);
    }

    handleContextMenuClose();
  };

  useEffect(() => {
    routeControl.addTo(map);
  }, []);

  return {
    isLoading,
    isContextMenuOpen,
    action,
    containerPoint,
    latLng,
    from,
    to,
    handleLoading,
    handleAction,
    handleContextMenuOpen,
    handleContextMenuClose,
    handleAddMarker,
  };
};

export default useMapContextState;
