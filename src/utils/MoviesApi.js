import { MOVIE_URL } from "./constants";

export class Api {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._options.baseUrl}/beatfilm-movies`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: MOVIE_URL,
});

export default api;
