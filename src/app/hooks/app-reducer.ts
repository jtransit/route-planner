import { AppAction, AppState } from '@app-types/app-context';
import { actions } from './actions';

export const appReducer = (state: AppState, action: AppAction) => {
  let newState;

  switch (action.type) {
    case actions.handleLoading: {
      newState = {
        ...state,
        isLoading: action.value as boolean,
      };
      break;
    }
    case actions.handleShowDrawer: {
      newState = {
        ...state,
        showDrawer: action.value as boolean,
      };
      break;
    }
    default: {
      throw new Error('Invalid Action');
    }
  }

  return newState;
};

export default appReducer;
