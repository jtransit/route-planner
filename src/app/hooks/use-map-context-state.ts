import { useEffect, useMemo, useReducer } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

import useRoutingControl from '@hooks/use-routing-control';
import { MapContextProps, defaultMapState } from '@app-types/map-context';
import { mapReducer } from './map-reducer';
import { actions } from './actions';

const useMapContextState: () => MapContextProps = () => {
  const map = useMap();

  const { routingControl, waypoints, handleSpliceWaypoints } =
    useRoutingControl();

  const [state, dispatch] = useReducer(mapReducer, defaultMapState);

  const from = useMemo(() => {
    return waypoints[0].latLng;
  }, [waypoints]);

  const to = useMemo(() => {
    return waypoints[waypoints.length - 1].latLng;
  }, [waypoints]);

  const handleLoading = (v: boolean) => {
    dispatch({ type: actions.handleLoading, value: v });
  };

  const handleAction = (v?: string) => {
    dispatch({ type: actions.handleAction, value: v });
  };

  const handleContextMenuOpen = (e: L.LeafletMouseEvent) => {
    dispatch({ type: actions.handleContextMenuOpen, value: e });
  };

  const handleContextMenuClose = () => {
    dispatch({ type: actions.handleContextMenuClose });
  };

  const handleAddFrom = () => {
    handleSpliceWaypoints(0, 1, state.latLng);
    handleContextMenuClose();
  };

  const handleAddTo = () => {
    handleSpliceWaypoints(waypoints.length - 1, 1, state.latLng);
    handleContextMenuClose();
  };

  const handleRemove = () => {
    const index = parseInt(
      (state.eventHandler?.originalEvent.target as HTMLInputElement).alt
    );
    handleSpliceWaypoints(index, 1);
    handleContextMenuClose();
  };

  useEffect(() => {
    routingControl?.addTo(map);
  }, [routingControl]);

  return {
    isLoading: state.isLoading,
    isContextMenuOpen: state.isContextMenuOpen,
    action: state.action,
    containerPoint: state.containerPoint,
    latLng: state.latLng,
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
