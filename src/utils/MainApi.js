import { AUTH_URL } from "./constants";

export class Auth {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  signUp({email, password, name}) {
    return fetch(`${this._options.baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name
      }),
    })
    .then(this._checkResponse)
  };
  
  signIn({email, password}) {
    return fetch(`${this._options.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(this._checkResponse)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return data;
        }
      });
  };
  
  getUser() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers
      })
      .then(this._checkResponse);
  }

  patchUser(user) {
    console.log(user)
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify(user)
      })
      .then(this._checkResponse);
  }
  
  checkToken(token) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'GET',
      headers: this._options.headers
    })
    .then(this._checkResponse);
  };

  getMovies() {
    return fetch(`${this._options.baseUrl}/movies`, {
      method: 'GET',
      headers: this._options.headers
    })
    .then(this._checkResponse);
  }

  postMovie(movie) {
    return fetch(`${this._options.baseUrl}/movies`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify(movie)
    })
    .then(res => this._checkResponse(res));
  }

  deleteMovie(id) {
    return fetch(`${this._options.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._options.headers,
    })
    .then(res => this._checkResponse(res));
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
