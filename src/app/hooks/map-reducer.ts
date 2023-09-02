import { MapAction, MapState } from '@app-types/map-context';
import { actions } from './actions';

export const mapReducer = (state: MapState, action: MapAction) => {
  let newState: MapState = state;

  switch (action.type) {
    case actions.handleLoading: {
      const l = action.value as boolean;
      newState = {
        ...state,
        isLoading: l,
      };
      break;
    }
    case actions.handleAction: {
      const a = action.value as string | undefined;
      newState = {
        ...state,
        action: a,
      };
      break;
    }
    case actions.handleContextMenuOpen: {
      const e = action.value as L.LeafletMouseEvent;
      newState = {
        ...state,
        isContextMenuOpen: true,
        eventHandler: e,
        containerPoint: e.containerPoint,
        latLng: e.latlng,
      };
      break;
    }
    case actions.handleContextMenuClose: {
      newState = {
        ...state,
        isContextMenuOpen: false,
      };
      break;
    }
    default: {
      throw new Error('Invalid Action');
    }
  }

  return newState;
};
