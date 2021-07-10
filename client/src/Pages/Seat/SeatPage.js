import React, { Fragment, useEffect } from "react";
import SeatBanner from "../../module/seat/components/Banner/SeatBanner";
import Title from "../../module/seat/components/Title/Title";
import SeatPlan from "../../module/seat/components/SeatPlan/SeatPlan";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_SEAT_BY_SHOWTIME_ID } from "../../module/seat/action/seatAction";

export default function SeatPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const param = props.match.params.id;

    // action
    dispatch({ type: FETCH_SEAT_BY_SHOWTIME_ID, payload: param });
  });
  
  return (
    <Fragment>
      <SeatBanner />
      <Title />
      <SeatPlan />
    </Fragment>
  );
}
