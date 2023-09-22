import { useEffect, useMemo, useReducer } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { debounce } from 'lodash';

import useRoutingControl from '@hooks/use-routing-control';
import useMapService from '@hooks/services/map-service';
import { MapContextProps, defaultMapState } from '@app-types/map-context';
import mapReducer from './map-reducer';
import { actions } from './actions';

const FIRST_INDEX = 0;
const ITEMS_TO_REMOVE = 1;

const useMapContextState: () => MapContextProps = () => {
  const map = useMap();

  const { routingControl, waypoints, handleSpliceWaypoints } =
    useRoutingControl();

  const { isLoading: isLoadingSearch, list, search } = useMapService();

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

  const handleUpdatePlaceName = (action: string) => {
    const index =
      action === actions.handleChangeFrom ? FIRST_INDEX : lastWaypointIndex;

    const waypoint: L.LatLng | undefined = waypoints[index].latLng;

    if (waypoint) {
      search(`${waypoint.lng},${waypoint.lat}`).then((v) => {
        dispatch({
          type: action,
          value: v.features[0]?.place_name ?? '',
        });
      });
    }
  };

  const handleChangeDirection = (
    action: string,
    address?: string,
    latLng?: number[]
  ) => {
    const index =
      action === actions.handleChangeFrom ? FIRST_INDEX : lastWaypointIndex;

    if (address !== undefined) {
      dispatch({
        type: action,
        value: address,
      });
      debouncedSearch(address);
      if (latLng) {
        handleSpliceWaypoints(
          index,
          ITEMS_TO_REMOVE,
          new L.LatLng(latLng[1], latLng[0])
        );
      }
    } else {
      handleSpliceWaypoints(index, ITEMS_TO_REMOVE, state.latLng);
      handleContextMenuClose();
      search(`${state.latLng.lng},${state.latLng.lat}`).then((v) => {
        dispatch({
          type: action,
          value: v.features[0]?.place_name ?? '',
        });
      });
    }
  };

  const handleChangeFrom = (address?: string, latLng?: number[]) => {
    handleChangeDirection(actions.handleChangeFrom, address, latLng);
  };

  const handleChangeTo = (address?: string, latLng?: number[]) => {
    handleChangeDirection(actions.handleChangeTo, address, latLng);
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

  useEffect(() => {
    handleUpdatePlaceName(actions.handleChangeFrom);
  }, [waypoints[FIRST_INDEX].latLng]);

  useEffect(() => {
    handleUpdatePlaceName(actions.handleChangeTo);
  }, [waypoints[lastWaypointIndex].latLng]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return {
    defaults: {
      isLoading: state.isLoading,
      action: state.action,
      handleLoading,
      handleAction,
    },
    directions: {
      location: {
        from: state.from,
        to: state.to,
      },
      search: {
        isLoading: isLoadingSearch,
        list: list.features,
      },
      handleChangeFrom,
      handleChangeTo,
      handleRemove,
    },
    contextMenu: {
      isContextMenuOpen: state.isContextMenuOpen,
      containerPoint: state.containerPoint,
      latLng: state.latLng,
      handleContextMenuOpen,
      handleContextMenuClose,
    },
  };
};

export default useMapContextState;
