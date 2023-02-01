type Action<T> = {
  type: string;
  payload: T;
};

type Reducer<T> = (state: T, action: Action<T>) => T;

type User = {
  id: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  email: string;
  avatar?: string;
  password?: string;
};
