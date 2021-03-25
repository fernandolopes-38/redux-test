import { Reducer } from 'redux';
import { GlobalState } from './types';

const INITIAL_STATE: GlobalState = {
  users: [],
};

export const AllUser: Reducer<GlobalState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case 'ADD_USER':
      const { user } = action.payload;
      return { ...state, users: [...state.users, user] };
    default:
      return { ...state };
  }
};
