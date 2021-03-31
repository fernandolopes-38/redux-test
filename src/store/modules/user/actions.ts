import { User } from './types';

export const addNewCandidate = (candidate: User) => {
  return {
    type: 'ADD_CANDIDATE',
    payload: {
      candidate,
    },
  };
};
export const removeCandidate = (id: number) => {
  return {
    type: 'REMOVE_CANDIDATE',
    payload: {
      id,
    },
  };
};
export const addNewStudent = (student: User) => {
  return {
    type: 'ADD_STUDENT',
    payload: {
      student,
    },
  };
};
export const removeStudent = (id: number) => {
  return {
    type: 'REMOVE_STUDENT',
    payload: {
      id,
    },
  };
};
