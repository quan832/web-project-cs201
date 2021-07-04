import React from "react";
import side3 from "../../../../assets/images/sidebar/banner/banner03.jpg";
import moment from "moment";
import { FORMAT_TIME } from "../../../../util/constant/constant";
import { Link } from "react-router-dom";

export default function Ticket({ movie }) {
  const renderTime = () => {
    return movie["showtimes_info"]?.map((item, index) => (
      <Link to={`/seatPlan/${item["showtime_id"]}`} className="item">
        {moment.utc(item["date_and_time"]).format(FORMAT_TIME)}
      </Link>
    ));
  };

  const renderTheater = () => {
    return movie["theaters_info"]?.map((item, index) => (
      <li>
        <div className="movie-name">
          <div className="icons">
            <i className="far fa-heart" />
            <i className="fas fa-heart" />
          </div>
          <a href="#0" className="name">
            {item[`theater_name`]}
          </a>
          <div className="location-icon">
            <i className="fas fa-map-marker-alt" />
          </div>
        </div>
        <div className="movie-schedule">{renderTime()}</div>
      </li>
    ));
  };

  return (
    <div className="ticket-plan-section padding-bottom padding-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-5 mb-lg-0">
            <ul className="seat-plan-wrapper bg-five">{renderTheater()}</ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-10">
            <div className="widget-1 widget-banner">
              <div className="widget-1-body">
                <a href="#0">
                  <img src={side3} alt="banner" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
