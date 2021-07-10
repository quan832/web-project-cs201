/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import screenThumb from "../../../../assets/images/movie/screen-thumb.png";
import seat01 from "../../../../assets/images/movie/seat01.png";
import seatBooked from "../../../../assets/images/movie/seat01-free.png";
import makeToast from "../../../../Components/Alert/Toaster";
import { BOOK_SEAT_BY_ID } from "../../action/seatAction";

function SeatPlan(props) {
  const seat = useSelector((state) => state.seatReducer.seat);
  const dispatch = useDispatch();

  const [ids, setIds] = useState([]);
  const [money, totalMoney] = useState();

  const handleBookTicket = () => {
    makeToast("success", "Book ticket successfully");

    dispatch({ type: BOOK_SEAT_BY_ID, payload: ids });

    props.history.push("/");
  };

  const handleBookTicketError = () => {
    makeToast("error", "Ticket is not exist");
  };

  const handleTotalMoney = (itemMoney) => {
    return totalMoney(money + itemMoney);
  };

  const renderSeat = () => {
    return seat["seats_info"]?.map((item, index) => {
      if (item["seat_status"] === "0") {
        return (
          <li
            className="single-seat"
            onClick={() => {
              if (ids.includes(item["seat_id"])) {
                makeToast("error", "Ticket is booking");
                return;
              }

              handleTotalMoney(item["ticket_price"]);
              setIds([...ids, item["seat_id"]]);
            }}
          >
            <img src={seat01} alt="seat" />
            <span class="sit-num">{item["seat_id"]}</span>
          </li>
        );
      } else {
        return (
          <li className="single-seat" onClick={() => {}}>
            <img src={seatBooked} alt="seat" />
            <span class="sit-num">{item["seat_id"]}</span>
          </li>
        );
      }
    });
  };

  return (
    <div className="seat-plan-section padding-bottom padding-top">
      <div className="container">
        <div className="screen-area">
          <h4 className="screen">screen</h4>
          <div className="screen-thumb">
            <img src={screenThumb} alt="movie" />
          </div>
          <h5 className="subtitle">silver plus</h5>
          <div className="screen-wrapper">
            <ul className="seat-area">
              <li className="seat-line">
                <span>A</span>
                <ul className="seat--area">
                  <li className="front-seat">
                    <ul>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li className="front-seat">
                    <ul>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li className="front-seat">
                    <ul>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>A</span>
              </li>
              <li className="seat-line">
                <span>B</span>
                <ul className="seat--area">
                  <li className="front-seat">
                    <ul>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li className="front-seat">
                    <ul>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                    </ul>
                  </li>
                  <li className="front-seat">
                    <ul>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                      <li
                        className="single-seat"
                        onClick={handleBookTicketError}
                      >
                        <img src={seat01} alt="seat" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <span>B</span>
              </li>
            </ul>
          </div>
          <h5 className="subtitle">silver plus</h5>
          <div className="screen-wrapper">
            <ul className="seat-area">
              <li className="seat-line">
                <span></span>
                <ul className="seat--area">
                  <li className="front-seat">
                    <ul>{renderSeat()}</ul>
                  </li>
                </ul>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="proceed-book bg_img"
          data-background="./assets/images/movie/movie-bg-proceed.jpg"
          style={{
            backgroundImage:
              'url("./assets/images/movie/movie-bg-proceed.jpg")',
          }}
        >
          <div className="proceed-to-book">
            <div className="book-item">
              <span>You have Choosed Seat</span>
              <h3 className="title">
                {ids.map((item) => (
                  <span style={{ display: "inline" }}> {item},</span>
                ))}
              </h3>
            </div>
            <div className="book-item">
              <span>total price</span>
              <h3 className="title">${totalMoney}</h3>
            </div>
            <div className="book-item">
              <a onClick={handleBookTicket} className="custom-button">
                proceed
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(SeatPlan);
