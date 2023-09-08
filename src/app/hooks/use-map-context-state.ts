import { useEffect, useMemo, useReducer } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

import useRoutingControl from '@hooks/use-routing-control';
import { MapContextProps, defaultMapState } from '@app-types/map-context';
import mapReducer from './map-reducer';
import { actions } from './actions';

const FIRST_INDEX = 0;
const ITEMS_TO_REMOVE = 1;

const useMapContextState: () => MapContextProps = () => {
  const map = useMap();

  const { routingControl, waypoints, handleSpliceWaypoints } =
    useRoutingControl();

  const [state, dispatch] = useReducer(mapReducer, defaultMapState);

  const lastWaypointIndex = waypoints.length - 1;

  const from = useMemo(() => {
    return waypoints[FIRST_INDEX].latLng;
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
    handleSpliceWaypoints(FIRST_INDEX, ITEMS_TO_REMOVE, state.latLng);
    handleContextMenuClose();
  };

  const handleAddTo = () => {
    handleSpliceWaypoints(lastWaypointIndex, ITEMS_TO_REMOVE, state.latLng);
    handleContextMenuClose();
  };

  const handleRemove = () => {
    const index = parseInt(
      (state.eventHandler?.originalEvent.target as HTMLInputElement).alt
    );
    handleSpliceWaypoints(index, ITEMS_TO_REMOVE);
    handleContextMenuClose();
  };

  useEffect(() => {
    routingControl?.addTo(map);
  }, [routingControl]);

  const defaults = {
    isLoading: state.isLoading,
    action: state.action,
    handleLoading,
    handleAction,
  };

  const directions = {
    from,
    to,
    handleAddFrom,
    handleAddTo,
    handleRemove,
  };

  const contextMenu = {
    isContextMenuOpen: state.isContextMenuOpen,
    containerPoint: state.containerPoint,
    latLng: state.latLng,
    handleContextMenuOpen,
    handleContextMenuClose,
  };

  return {
    ...defaults,
    ...directions,
    ...contextMenu,
  };
};

export default useMapContextState;
