import React from "react";

import offer1 from "../../../../assets/images/sidebar/offer01.png";
import offer2 from "../../../../assets/images/sidebar/offer02.png";
import offer3 from "../../../../assets/images/sidebar/offer03.png";

export default function MovieDetail() {
  return (
    <section className="movie-details-section padding-top padding-bottom">
      <div className="container">
        <div className="row justify-content-center flex-wrap-reverse mb--50">
          <div className="col-lg-3 col-sm-10 col-md-6 mb-50">
            <div className="widget-1 widget-tags">
              <ul>
                <li>
                  <a href="#0">2D</a>
                </li>
                <li>
                  <a href="#0">imax 2D</a>
                </li>
                <li>
                  <a href="#0">4DX</a>
                </li>
              </ul>
            </div>
            <div className="widget-1 widget-offer">
              <h3 className="title">Applicable offer</h3>
              <div className="offer-body">
                <div className="offer-item">
                  <div className="thumb">
                    <img src={offer1} alt="sidebar" />
                  </div>
                  <div className="content">
                    <h6>
                      <a href="#0">Amazon Pay Cashback Offer</a>
                    </h6>
                    <p>Win Cashback Upto Rs 300*</p>
                  </div>
                </div>
                <div className="offer-item">
                  <div className="thumb">
                    <img src={offer2} alt="sidebar" />
                  </div>
                  <div className="content">
                    <h6>
                      <a href="#0">PayPal Offer</a>
                    </h6>
                    <p>
                      Transact first time with Paypal and get 100% cashback up
                      to Rs. 500
                    </p>
                  </div>
                </div>
                <div className="offer-item">
                  <div className="thumb">
                    <img src={offer3} alt="sidebar" />
                  </div>
                  <div className="content">
                    <h6>
                      <a href="#0">HDFC Bank Offer</a>
                    </h6>
                    <p>
                      Get 15% discount up to INR 100* and INR 50* off on F&amp;B
                      T&amp;C apply
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 mb-50">
            <div className="movie-details">
              <h3 className="title">photos</h3>
              <div className="details-photos owl-carousel">
                <div className="thumb">
                  <a
                    href="./assets/images/movie/movie-details01.jpg"
                    className="img-pop"
                  >
                    <img
                      src="./assets/images/movie/movie-details01.jpg"
                      alt="movie"
                    />
                  </a>
                </div>
                <div className="thumb">
                  <a
                    href="./assets/images/movie/movie-details02.jpg"
                    className="img-pop"
                  >
                    <img
                      src="./assets/images/movie/movie-details02.jpg"
                      alt="movie"
                    />
                  </a>
                </div>
                <div className="thumb">
                  <a
                    href="./assets/images/movie/movie-details03.jpg"
                    className="img-pop"
                  >
                    <img
                      src="./assets/images/movie/movie-details03.jpg"
                      alt="movie"
                    />
                  </a>
                </div>
                <div className="thumb">
                  <a
                    href="./assets/images/movie/movie-details01.jpg"
                    className="img-pop"
                  >
                    <img
                      src="./assets/images/movie/movie-details01.jpg"
                      alt="movie"
                    />
                  </a>
                </div>
                <div className="thumb">
                  <a
                    href="./assets/images/movie/movie-details02.jpg"
                    className="img-pop"
                  >
                    <img
                      src="./assets/images/movie/movie-details02.jpg"
                      alt="movie"
                    />
                  </a>
                </div>
                <div className="thumb">
                  <a
                    href="./assets/images/movie/movie-details03.jpg"
                    className="img-pop"
                  >
                    <img
                      src="./assets/images/movie/movie-details03.jpg"
                      alt="movie"
                    />
                  </a>
                </div>
              </div>
              <div className="tab summery-review">
                <ul className="tab-menu">
                  <li className="active">summery</li>
                  <li>
                    user review <span>147</span>
                  </li>
                </ul>
                <div className="tab-area">
                  <div className="tab-item active">
                    <div className="item">
                      <h5 className="sub-title">Synopsis</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin vehicula eros sit amet est tincidunt aliquet.
                        Fusce laoreet ligula ac ultrices eleifend. Donec
                        hendrerit fringilla odio, ut feugiat mi convallis nec.
                        Fusce elit ex, blandit vitae mattis sit amet, iaculis ac
                        elit. Ut diam mauris, viverra sit amet dictum vel,
                        aliquam ac quam. Ut mi nisl, fringilla sit amet erat et,
                        convallis porttitor ligula. Sed auctor, orci id luctus
                        venenatis, dui dolor euismod risus, et pharetra orci
                        lectus quis sapien. Duis blandit ipsum ac consectetur
                        scelerisque.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="tab-item">
                    <div className="movie-review-item">
                      <div className="author">
                        <div className="thumb">
                          <a href="#0">
                            <img
                              src="./assets/images/cast/cast02.jpg"
                              alt="cast"
                            />
                          </a>
                        </div>
                        <div className="movie-review-info">
                          <span className="reply-date">13 Days Ago</span>
                          <h6 className="subtitle">
                            <a href="#0">minkuk seo</a>
                          </h6>
                          <span>
                            <i className="fas fa-check" /> verified review
                          </span>
                        </div>
                      </div>
                      <div className="movie-review-content">
                        <div className="review">
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                        </div>
                        <h6 className="cont-title">Awesome Movie</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer volutpat enim non ante egestas vehicula.
                          Suspendisse potenti. Fusce malesuada fringilla lectus
                          venenatis porttitor.{" "}
                        </p>
                        <div className="review-meta">
                          <a href="#0">
                            <i className="flaticon-hand" />
                            <span>8</span>
                          </a>
                          <a href="#0" className="dislike">
                            <i className="flaticon-dont-like-symbol" />
                            <span>0</span>
                          </a>
                          <a href="#0">Report Abuse</a>
                        </div>
                      </div>
                    </div>
                    <div className="movie-review-item">
                      <div className="author">
                        <div className="thumb">
                          <a href="#0">
                            <img
                              src="./assets/images/cast/cast04.jpg"
                              alt="cast"
                            />
                          </a>
                        </div>
                        <div className="movie-review-info">
                          <span className="reply-date">13 Days Ago</span>
                          <h6 className="subtitle">
                            <a href="#0">rudra rai</a>
                          </h6>
                          <span>
                            <i className="fas fa-check" /> verified review
                          </span>
                        </div>
                      </div>
                      <div className="movie-review-content">
                        <div className="review">
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                        </div>
                        <h6 className="cont-title">Awesome Movie</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer volutpat enim non ante egestas vehicula.
                          Suspendisse potenti. Fusce malesuada fringilla lectus
                          venenatis porttitor.{" "}
                        </p>
                        <div className="review-meta">
                          <a href="#0">
                            <i className="flaticon-hand" />
                            <span>8</span>
                          </a>
                          <a href="#0" className="dislike">
                            <i className="flaticon-dont-like-symbol" />
                            <span>0</span>
                          </a>
                          <a href="#0">Report Abuse</a>
                        </div>
                      </div>
                    </div>
                    <div className="movie-review-item">
                      <div className="author">
                        <div className="thumb">
                          <a href="#0">
                            <img
                              src="./assets/images/cast/cast01.jpg"
                              alt="cast"
                            />
                          </a>
                        </div>
                        <div className="movie-review-info">
                          <span className="reply-date">13 Days Ago</span>
                          <h6 className="subtitle">
                            <a href="#0">rafuj</a>
                          </h6>
                          <span>
                            <i className="fas fa-check" /> verified review
                          </span>
                        </div>
                      </div>
                      <div className="movie-review-content">
                        <div className="review">
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                        </div>
                        <h6 className="cont-title">Awesome Movie</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer volutpat enim non ante egestas vehicula.
                          Suspendisse potenti. Fusce malesuada fringilla lectus
                          venenatis porttitor.{" "}
                        </p>
                        <div className="review-meta">
                          <a href="#0">
                            <i className="flaticon-hand" />
                            <span>8</span>
                          </a>
                          <a href="#0" className="dislike">
                            <i className="flaticon-dont-like-symbol" />
                            <span>0</span>
                          </a>
                          <a href="#0">Report Abuse</a>
                        </div>
                      </div>
                    </div>
                    <div className="movie-review-item">
                      <div className="author">
                        <div className="thumb">
                          <a href="#0">
                            <img
                              src="./assets/images/cast/cast03.jpg"
                              alt="cast"
                            />
                          </a>
                        </div>
                        <div className="movie-review-info">
                          <span className="reply-date">13 Days Ago</span>
                          <h6 className="subtitle">
                            <a href="#0">bela bose</a>
                          </h6>
                          <span>
                            <i className="fas fa-check" /> verified review
                          </span>
                        </div>
                      </div>
                      <div className="movie-review-content">
                        <div className="review">
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                          <i className="flaticon-favorite-heart-button" />
                        </div>
                        <h6 className="cont-title">Awesome Movie</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer volutpat enim non ante egestas vehicula.
                          Suspendisse potenti. Fusce malesuada fringilla lectus
                          venenatis porttitor.{" "}
                        </p>
                        <div className="review-meta">
                          <a href="#0">
                            <i className="flaticon-hand" />
                            <span>8</span>
                          </a>
                          <a href="#0" className="dislike">
                            <i className="flaticon-dont-like-symbol" />
                            <span>0</span>
                          </a>
                          <a href="#0">Report Abuse</a>
                        </div>
                      </div>
                    </div>
                    <div className="load-more text-center">
                      <a href="#0" className="custom-button transparent">
                        load more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
