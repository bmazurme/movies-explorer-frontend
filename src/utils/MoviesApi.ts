import { MOVIE_URL } from './constants';

export class Api {
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

  getMovies() {
    return fetch(`${this.options.baseUrl}/beatfilm-movies`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this.checkResponse);
  }
}

const api = new Api({
  baseUrl: MOVIE_URL,
});

export default api;
