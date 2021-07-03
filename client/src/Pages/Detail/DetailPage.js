import React, { Fragment } from "react";
import MovieDetail from "../../module/movie/components/Detail/MovieDetail";
import BannerDetail from "../../module/movie/components/BannerDetail/BannerDetail";
import BookingMovie from "../../module/movie/components/BookingMovie/BookingMovie";

import { useDispatch } from "react-redux";

export default function DetailPage(props) {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <BannerDetail />
      <BookingMovie />
      <MovieDetail />
    </Fragment>
  );
}
