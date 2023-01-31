import { AUTH_URL } from './constants';

export class Auth {
  options: any;

  constructor(options: any) {
    this.options = options;
  }

  // eslint-disable-next-line class-methods-use-this
  checkResponse(res: any) {
    if (res.ok) {
      return res.json();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка ${res.status}`);
  }

  signUp({ email, password, name }: any) {
    return fetch(`${this.options.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    })
      .then(this.checkResponse);
  }

  signIn({ email, password }: any) {
    return fetch(`${this.options.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(this.checkResponse)
      // eslint-disable-next-line consistent-return
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      });
  }

  getUser() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then(this.checkResponse);
  }

  patchUser(user: any) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(user),
    })
      .then(this.checkResponse);
  }

  checkToken(token: string) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this.checkResponse);
  }

  getMovies() {
    return fetch(`${this.options.baseUrl}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then(this.checkResponse);
  }

  postMovie(movie: any) {
    return fetch(`${this.options.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(movie),
    })
      .then((res) => this.checkResponse(res));
  }

  deleteMovie(id: any) {
    return fetch(`${this.options.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => this.checkResponse(res));
  }
}

const auth = new Auth({
  baseUrl: AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
});

export default auth;
