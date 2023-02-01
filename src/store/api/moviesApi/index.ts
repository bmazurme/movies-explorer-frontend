import { createApi } from '@reduxjs/toolkit/query/react';

import { getBaseQuery } from '../../baseQueryMovie';

const baseQuery = getBaseQuery('https://api.nomoreparties.co');

const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery,
  tagTypes: ['Movies'],
  keepUnusedDataFor: 5 * 60,
  refetchOnMountOrArgChange: 30 * 60,
  endpoints: () => ({}),
});

export default moviesApi;
