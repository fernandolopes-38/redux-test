export interface User {
  id: number;
  name: string;
  email: string;
  age: string;
}

export interface GlobalState {
  candidates: User[];
  students: User[];
}
