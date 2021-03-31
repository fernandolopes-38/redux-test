import { Reducer } from 'redux';
import { GlobalState } from './types';
import { INITIAL_STATE } from './initialState';

export const usersReducer: Reducer<GlobalState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case 'ADD_CANDIDATE':
      const { candidate } = action.payload;

      localStorage.setItem(
        '@users',
        JSON.stringify({
          ...state,
          candidates: [...state.candidates, candidate],
        })
      );

      return { ...state, candidates: [...state.candidates, candidate] };

    case 'REMOVE_CANDIDATE':
      const { id: candidateId } = action.payload;
      const newCandidates = state.candidates.filter(
        (candidate) => candidate.id !== candidateId
      );

      localStorage.setItem(
        '@users',
        JSON.stringify({
          ...state,
          candidates: newCandidates,
        })
      );

      return { ...state, candidates: newCandidates };

    case 'ADD_STUDENT':
      const { student } = action.payload;

      localStorage.setItem(
        '@users',
        JSON.stringify({
          ...state,
          students: [...state.students, student],
        })
      );

      return { ...state, students: [...state.students, student] };

    case 'REMOVE_STUDENT':
      const { id: studentId } = action.payload;
      const newStudents = state.students.filter(
        (student) => student.id !== studentId
      );

      localStorage.setItem(
        '@users',
        JSON.stringify({
          ...state,
          students: newStudents,
        })
      );

      return { ...state, students: newStudents };
    default:
      return { ...state };
  }
};
