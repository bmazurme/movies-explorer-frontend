type Action<T> = {
  type: string;
  payload: T;
};

type Reducer<T> = (state: T, action: Action<T>) => T;

type User = {
  id: string;
  login: string;
  firstName: string;
  secondName: string;
  displayName: string;
  email: string;
  avatar?: string;
  password?: string;
};
