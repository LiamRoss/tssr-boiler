import { WorldAction } from '../actions/WorldActions';
import { Store } from '../store';

// Declare the default state if no state is passed.
const defaultState: Store.World = {
  name: ''
};

// Sub reducer for the World component.
export const worldReducer = (state: Store.World = defaultState,
                             action: WorldAction) => {
  switch (action.type) {
    case 'CHANGE_WORLD':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};