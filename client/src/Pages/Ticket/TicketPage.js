import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_MOVIE_DETAIL } from "../../module/movie/action/movieAction";
import BannerTicket from "../../module/ticket/Components/BannerTicket/BannerTicket";
import BookTicket from "../../module/ticket/Components/BookTicket/BookTicket";
import Ticket from "../../module/ticket/Components/Ticket/Ticket";

export default function TicketPage(props) {
  const dispatch = useDispatch();

  const [id, setid] = useState(-1);

  useEffect(() => {
    setid(props.match.params);

    // action
    dispatch({ type: FETCH_MOVIE_DETAIL, payload: id });
  }, [dispatch, id, props.match.params]);

  const movieDetail = useSelector((state) => state.movieReducer.movieDetail);

  return (
    <Fragment>
      <BannerTicket movie={movieDetail} />
      <BookTicket />
      <Ticket />
    </Fragment>
  );
}
