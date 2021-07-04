/* eslint-disable default-case */
import {
  FETCH_MOVIE,
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_TIME_SUCCESS,
} from "../action/movieAction";

const initialState = {
  movieDetail: {
    isFetching: false,
  },
  movieTime: {},
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
        movies: [...payload],
      };
    case FETCH_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          isFetching: true,
        },
      };

    case FETCH_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        movieDetail: {
          ...state.movieDetail,
          isFetching: true,
          ...payload,
        },
      };

    case FETCH_MOVIE_TIME_SUCCESS:
      return {
        ...state,
        movieTime: {
          ...state.movieTime,
          isFetching: true,
          ...payload,
        },
      };

    default:
      return state;
  }
}
