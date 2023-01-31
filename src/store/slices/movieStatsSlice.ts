import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { MovieCardType } from '../../components/MoviesCard';

type MovieStatsState = {
  short: boolean;
  source: MovieCardType[];
  movies: MovieCardType[];
  shortMovies: MovieCardType[];
  searchWord: string;
};

const slice = createSlice({
  name: 'movies',
  initialState: {
    short: false,
    source: [],
    movies: [],
    shortMovies: [],
    searchWord: '',
  } as MovieStatsState,
  reducers: {
    setShort: (
      state,
      { payload: short }: PayloadAction<boolean>,
    ) => ({ ...state, short }),
    setSource: (
      state,
      { payload: source }: PayloadAction<MovieCardType[]>,
    ) => ({ ...state, source }),
    setMovies: (
      state,
      { payload: movies }: PayloadAction<MovieCardType[]>,
    ) => ({ ...state, movies }),
    setShortMovies: (
      state,
      { payload: shortMovies }: PayloadAction<MovieCardType[]>,
    ) => ({ ...state, shortMovies }),
    setSearchWord: (
      state,
      { payload: searchWord }: PayloadAction<string>,
    ) => ({ ...state, searchWord }),
  },
});

export const {
  setShort,
  setMovies,
  setShortMovies,
  setSearchWord,
  setSource,
} = slice.actions;

export default slice.reducer;
