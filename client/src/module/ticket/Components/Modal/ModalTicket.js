import React from "react";

export default function ModalTicket() {
  return (
    <section className="window-warning inActive">
      <div className="lay" />
      <div className="warning-item">
        <h6 className="subtitle">Welcome! </h6>
        <h4 className="title">Select Your Seats</h4>
        <div className="thumb">
          <img src="./assets/images/movie/seat-plan.png" alt="movie" />
        </div>
        <a href="movie-seat-plan.html" className="custom-button seatPlanButton">
          Seat Plans
          <i className="fas fa-angle-right" />
        </a>
      </div>
    </section>
  );
}
