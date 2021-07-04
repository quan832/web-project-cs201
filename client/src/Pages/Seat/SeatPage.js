import React, { Fragment } from "react";
import SeatBanner from "../../module/seat/components/Banner/SeatBanner";
import Title from "../../module/seat/components/Title/Title";
import SeatPlan from "../../module/seat/components/SeatPlan/SeatPlan";

export default function SeatPage() {
  return (
    <Fragment>
      <SeatBanner />
      <Title />
      <SeatPlan />
    </Fragment>
  );
}
