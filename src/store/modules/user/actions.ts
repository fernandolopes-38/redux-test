import { User } from './types';

export const addNewUser = (user: User) => {
  return {
    type: 'ADD_USER',
    payload: {
      user,
    },
  };
};
