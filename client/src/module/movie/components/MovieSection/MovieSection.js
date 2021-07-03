import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_MOVIE } from "../../action/movieAction";
import { Link } from "react-router-dom";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
};

export default function MovieSection() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_MOVIE });
  }, [dispatch]);

  // get movies
  const movies = useSelector((state) => state.movieReducer.movies);

  const renderMovieItem = () => {
    return movies.map((item, index) => {
      return (
        <Link to={`/movie/${item.id}`} key={index}>
          <div className="item" style={{ width: "95%" }}>
            <div className="movie-grid">
              <div
                className="movie-thumb c-thumb"
                style={{ width: "100%", height: "400px" }}
              >
                <img
                  src={item.imgURL}
                  alt="movie"
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </div>
              <div className="movie-content bg-one">
                <h5 className="title m-0">
                  <a href="#0">{item.name}</a>
                </h5>
                <ul className="movie-rating-percent">
                  <li>
                    <div className="thumb">
                      <img src="./assets/images/movie/tomato.png" alt="movie" />
                    </div>
                    <span className="content">88%</span>
                  </li>
                  <li>
                    <div className="thumb">
                      <img src="./assets/images/movie/cake.png" alt="movie" />
                    </div>
                    <span className="content">88%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <section className="movie-section padding-top padding-bottom">
      <div className="container">
        <div className="tab">
          <div className="section-header-2">
            <div className="left">
              <h2 className="title">movies</h2>
              <p>Be sure not to miss these Movies today.</p>
            </div>
            <ul className="tab-menu">
              <li className="active">now showing</li>
              <li>coming soon</li>
              <li>exclusive</li>
            </ul>
          </div>
          <div className="">
            <div className="">
              <div className="slick-slider">
                <Slider {...settings}>{renderMovieItem()}</Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
