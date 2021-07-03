import React from "react";

export default function BannerTicket(props) {
  const { imgURL, content, trailerURL, rate, name, premiereDate } = props.movie;

  return (
    <section
      className="details-banner hero-area bg_img"
      data-background="./assets/images/banner/banner03.jpg"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="container">
        <div className="details-banner-wrapper">
          <div className="details-banner-content">
            <h3 className="title">{name}</h3>
            <div className="tags">
              <a href="#0">English</a>
              <a href="#0">Hindi</a>
              <a href="#0">Telegu</a>
              <a href="#0">Tamil</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
