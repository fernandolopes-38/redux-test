const getInitialState = () => {
  const localUsers = localStorage.getItem('@users');

  if (!localUsers)
    return {
      candidates: [],
      students: [],
    };

  const users = JSON.parse(localUsers);
  return {
    candidates: users.candidates,
    students: users.students,
  };
};

export const INITIAL_STATE = getInitialState();
