import React, { Fragment, useEffect, useState } from "react";
import MovieDetail from "../../module/movie/components/Detail/MovieDetail";
import BannerDetail from "../../module/movie/components/BannerDetail/BannerDetail";
import BookingMovie from "../../module/movie/components/BookingMovie/BookingMovie";

import { useDispatch, useSelector } from "react-redux";
import { FETCH_MOVIE_DETAIL } from "../../module/movie/action/movieAction";

export default function DetailPage(props) {
  const dispatch = useDispatch();

  const [id, setid] = useState(-1);

  // setid(props.match.params.id);

  useEffect(() => {
    const param = props.match.params.id;

    setid(param);
    // action
    dispatch({ type: FETCH_MOVIE_DETAIL, payload: param });
  }, []);

  const movieDetail = useSelector((state) => state.movieReducer.movieDetail);

  return (
    <Fragment>
      <BannerDetail movie={movieDetail} />
      <BookingMovie movie={movieDetail} id={id} />
      <MovieDetail movie={movieDetail} />
    </Fragment>
  );
}
