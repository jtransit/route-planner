import { MapAction, MapState } from '@app-types/map-context';
import { actions } from './actions';

export const mapReducer = (state: MapState, action: MapAction) => {
  let newState;

  switch (action.type) {
    case actions.handleLoading: {
      newState = {
        ...state,
        isLoading: action.value as boolean,
      };
      break;
    }
    case actions.handleAction: {
      newState = {
        ...state,
        action: action.value as string | undefined,
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
    case actions.handleChangeFrom: {
      newState = {
        ...state,
        from: {
          ...state.from,
          address: action.value as string,
        },
      };
      break;
    }
    case actions.handleChangeTo: {
      newState = {
        ...state,
        to: {
          ...state.to,
          address: action.value as string,
        },
      };
      break;
    }
    default: {
      throw new Error('Invalid Action');
    }
  }

  return newState;
};

export default mapReducer;
