const WHITE_LIST = [
  'http://localhost:1234',
  'http://localhost:3001',
  'http://localhost:3000',
  'https://api.nomoreparties.co',
  'https://api.nomoreparties.co/beatfilm-movies',
  // 'https://joinus.nomoredomains.xyz',
  // 'https://api.joinus.nomoredomains.xyz',
];

const METHODS = [
  'GET',
  'HEAD',
  'PUT',
  'PATCH',
  'POST',
  'DELETE',
];

const ALLOWED_HEADERS = [
  'Content-Type',
  'origin',
  'x-access-token',
];

export {
  METHODS,
  ALLOWED_HEADERS,
  WHITE_LIST,
};
