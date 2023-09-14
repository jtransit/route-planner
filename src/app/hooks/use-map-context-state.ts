import { useEffect, useMemo, useReducer } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { debounce } from 'lodash';

import useRoutingControl from '@hooks/use-routing-control';
import { MapContextProps, defaultMapState } from '@app-types/map-context';
import mapReducer from './map-reducer';
import { actions } from './actions';
import useMapService from './services/map-service';

const FIRST_INDEX = 0;
const ITEMS_TO_REMOVE = 1;

const useMapContextState: () => MapContextProps = () => {
  const map = useMap();

  const { routingControl, waypoints, handleSpliceWaypoints } =
    useRoutingControl();

  const {
    isLoading: isLoadingSearch,
    searchSuggestions,
    search,
  } = useMapService();

  const [state, dispatch] = useReducer(mapReducer, defaultMapState);

  const lastWaypointIndex = waypoints.length - 1;

  const debouncedSearch = useMemo(
    () => debounce((v: string) => search(v), 1000),
    []
  );

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

  // TODO: refactor to follow DRY principle
  const handleChangeFrom = (address?: string, latLng?: number[]) => {
    if (address !== undefined) {
      dispatch({
        type: actions.handleChangeFrom,
        value: address,
      });
      debouncedSearch(address);
      if (latLng) {
        handleSpliceWaypoints(
          FIRST_INDEX,
          ITEMS_TO_REMOVE,
          new L.LatLng(latLng[1], latLng[0])
        );
      }
    } else {
      handleSpliceWaypoints(FIRST_INDEX, ITEMS_TO_REMOVE, state.latLng);
      handleContextMenuClose();
      search(`${state.latLng.lng},${state.latLng.lat}`).then((v) => {
        dispatch({
          type: actions.handleChangeFrom,
          value: v?.data?.features[0]?.place_name ?? '',
        });
      });
    }
  };

  // TODO: refactor to follow DRY principle
  const handleChangeTo = (address?: string, latLng?: number[]) => {
    if (address !== undefined) {
      dispatch({
        type: actions.handleChangeTo,
        value: address,
      });
      debouncedSearch(address);
      if (latLng) {
        handleSpliceWaypoints(
          lastWaypointIndex,
          ITEMS_TO_REMOVE,
          new L.LatLng(latLng[1], latLng[0])
        );
      }
    } else {
      handleSpliceWaypoints(lastWaypointIndex, ITEMS_TO_REMOVE, state.latLng);
      handleContextMenuClose();
      search(`${state.latLng.lng},${state.latLng.lat}`).then((v) => {
        dispatch({
          type: actions.handleChangeTo,
          value: v?.data?.features[0]?.place_name ?? '',
        });
      });
    }
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

  // TODO: refactor to follow DRY principle
  useEffect(() => {
    const from = waypoints[FIRST_INDEX].latLng;
    search(`${from.lng},${from.lat}`).then((v) => {
      dispatch({
        type: actions.handleChangeFrom,
        value: v?.data?.features[0]?.place_name ?? '',
      });
    });
  }, [waypoints[FIRST_INDEX].latLng]);

  // TODO: refactor to follow DRY principle
  useEffect(() => {
    const to = waypoints[lastWaypointIndex].latLng;
    if (to) {
      search(`${to.lng},${to.lat}`).then((v) => {
        dispatch({
          type: actions.handleChangeTo,
          value: v?.data?.features[0]?.place_name ?? '',
        });
      });
    }
  }, [waypoints[lastWaypointIndex].latLng]);

  const defaults = {
    isLoading: state.isLoading,
    action: state.action,
    handleLoading,
    handleAction,
  };

  const directions = {
    from: state?.from,
    to: state?.to,
    isLoadingSearch,
    search: searchSuggestions.features,
    handleChangeFrom,
    handleChangeTo,
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
