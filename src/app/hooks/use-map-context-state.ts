import { useEffect, useMemo, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

import useRoutingControl from '@hooks/use-routing-control';
import { MapContextProps, defaultMapContext } from '@app-types/map-context';

const useMapContextState: () => MapContextProps = () => {
  const map = useMap();
  const { routingControl, waypoints, handleSpliceWaypoints } =
    useRoutingControl();

  const [isLoading, setIsLoading] = useState(defaultMapContext.isLoading);

  const [isContextMenuOpen, setIsContextMenuOpen] = useState(
    defaultMapContext.isContextMenuOpen
  );

  const [containerPoint, setContainerPoint] = useState<L.Point>(
    defaultMapContext.containerPoint
  );

  const [eventHandler, setEventHandler] = useState<
    L.LeafletMouseEvent | undefined
  >();

  const [latLng, setLatLng] = useState<L.LatLng>(defaultMapContext.latLng);

  const from = useMemo(() => {
    return waypoints[0].latLng;
  }, [waypoints]);

  const to = useMemo(() => {
    return waypoints[waypoints.length - 1].latLng;
  }, [waypoints]);

  const [action, setAction] = useState<string>();

  const handleLoading = (v: boolean) => {
    setIsLoading(v);
  };

  const handleAction = (v?: string) => {
    setAction(v);
  };

  const handleContextMenuOpen = (e: L.LeafletMouseEvent) => {
    setIsContextMenuOpen(true);
    setEventHandler(e);
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

  const handleAddFrom = () => {
    handleSpliceWaypoints(0, 1, latLng);
    handleContextMenuClose();
  };

  const handleAddTo = () => {
    handleSpliceWaypoints(waypoints.length - 1, 1, latLng);
    handleContextMenuClose();
  };

  const handleRemove = () => {
    const index = parseInt(
      (eventHandler?.originalEvent.target as HTMLInputElement).alt
    );
    // console.log(eventHandler?.originalEvent.target.);
    console.log((eventHandler?.originalEvent.target as HTMLInputElement).alt);
    handleSpliceWaypoints(index, 1);
    handleContextMenuClose();
  };

  useEffect(() => {
    routingControl.addTo(map);
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
    handleAddFrom,
    handleAddTo,
    handleRemove,
  };
};

export default useMapContextState;
