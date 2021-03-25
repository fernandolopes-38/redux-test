export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export interface GlobalState {
  users: User[];
}
