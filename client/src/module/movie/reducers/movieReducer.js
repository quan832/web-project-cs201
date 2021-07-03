/* eslint-disable default-case */
import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS } from "../action/movieAction";

const initialState = {
  movieDetail: {},
  movies: [],
  isFetching: false,
};

export default function movieReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_MOVIE:
      return { ...state, isFetching: true };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movies: [...state.movies, ...payload],
      };
    default:
      return state;
  }
}
