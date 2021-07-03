import React, { Fragment, useEffect } from "react";
import MovieDetail from "../../module/movie/components/Detail/MovieDetail";
import BannerDetail from "../../module/movie/components/BannerDetail/BannerDetail";
import BookingMovie from "../../module/movie/components/BookingMovie/BookingMovie";

import { useDispatch, useSelector } from "react-redux";
import { FETCH_MOVIE_DETAIL } from "../../module/movie/action/movieAction";

export default function DetailPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;

    // action
    dispatch({ type: FETCH_MOVIE_DETAIL, payload: id });
  }, [dispatch, props.match.params]);

  const movieDetail = useSelector((state) => state.movieReducer.movieDetail);

  return (
    <Fragment>
      <BannerDetail movie={movieDetail} />
      <BookingMovie movie={movieDetail} />
      <MovieDetail movie={movieDetail} />
    </Fragment>
  );
}
