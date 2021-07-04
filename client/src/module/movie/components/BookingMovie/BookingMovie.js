import React, { useEffect, useState } from "react";
import tomato2 from "../../../../assets/images/movie/tomato2.png";
import cake from "../../../../assets/images/movie/cake2.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FETCH_MOVIE_TIME } from "../../action/movieAction";

export default function BookingMovie(props) {
  const { imgURL, content, trailerURL, rate, name, premiereDate } = props.movie;

  const { id } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({ type: FETC, payload: id });
  }, []);

  return (
    <section className="book-section bg-one">
      <div className="container">
        <div className="book-wrapper offset-lg-3">
          <div className="left-side">
            <div className="item">
              <div className="item-header">
                <div className="thumb">
                  <img src={tomato2} alt="movie" />
                </div>
                <div className="counter-area">
                  <span
                    className="counter-item odometer odometer-auto-theme"
                    data-odometer-final={88}
                  >
                    <div className="odometer-inside">
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">8</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">8</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </span>
                </div>
              </div>
              <p>tomatometer</p>
            </div>
            <div className="item">
              <div className="item-header">
                <div className="thumb">
                  <img src={cake} alt="movie" />
                </div>
                <div className="counter-area">
                  <span
                    className="counter-item odometer odometer-auto-theme"
                    data-odometer-final={88}
                  >
                    <div className="odometer-inside">
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">8</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">8</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </span>
                </div>
              </div>
              <p>audience Score</p>
            </div>
            <div className="item">
              <div className="item-header">
                <h5 className="title">4.5</h5>
                <div className="rated">
                  <i className="fas fa-heart" />
                  <i className="fas fa-heart" />
                  <i className="fas fa-heart" />
                  <i className="fas fa-heart" />
                  <i className="fas fa-heart" />
                </div>
              </div>
              <p>Users Rating</p>
            </div>
            <div className="item">
              <div className="item-header">
                <div className="rated rate-it">
                  <i className="fas fa-heart" />
                  <i className="fas fa-heart" />
                  <i className="fas fa-heart" />
                  <i className="fas fa-heart" />
                  <i className="fas fa-heart" />
                </div>
                <h5 className="title">0.0</h5>
              </div>
              <p>
                <a href="#0">Rate It</a>
              </p>
            </div>
          </div>
          <Link to={`/ticket/${id}`} className="custom-button">
            book tickets
          </Link>
        </div>
      </div>
    </section>
  );
}
