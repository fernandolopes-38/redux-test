import { createStore } from 'redux';
import { usersReducer } from './modules/user';

export const store = createStore(usersReducer);
