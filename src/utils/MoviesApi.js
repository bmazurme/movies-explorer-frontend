//

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
        // authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
    })
    .then(this._checkResponse);
  }

  // deleteCard(cardId) {
  //   return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
  //     method: 'DELETE',  
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   .then(this._checkResponse);
  // }

  // postCard({name, link}) {
  //   return fetch(`${this._options.baseUrl}/cards`, {
  //     method: 'POST',  
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       link: link
  //     })
  //   })
  //   .then(this._checkResponse);
  // }

  // changeLike(cardId, value) {
  //   return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
  //     method: value ? 'PUT' : 'DELETE',  
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   .then(this._checkResponse);
  // }
}

const api = new Api({
  baseUrl: 'https://api.nomoreparties.co',
});

export default api;