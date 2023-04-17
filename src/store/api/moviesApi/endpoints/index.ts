/* eslint-disable import/prefer-default-export */
import moviesApi from '..';

const moviesApiEndpoints = moviesApi
  .enhanceEndpoints({
    addTagTypes: ['Movies'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getMovies: builder.mutation({
        query: (id) => ({
          url: '/beatfilm-movies',
          method: 'GET',
        }),
        invalidatesTags: ['Movies'],
      }),
    }),
  });

export const { useGetMoviesMutation } = moviesApiEndpoints;
