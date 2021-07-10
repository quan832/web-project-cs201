import React from "react";

export default function Title() {
  return (
    <section className="page-title bg-one">
      <div className="container">
        <div className="page-title-area">
          <div className="item md-order-1">
            <a
             
              className="custom-button back-button"
            >
              {/* <i className="flaticon-double-right-arrows-angles" /> */}
              back
            </a>
          </div>
          <div className="item date-item">
            <span className="date">MON, SEP 09 2020</span>
            <select className="select-bar" style={{ display: "none" }}>
              <option value="sc1">09:40</option>
              <option value="sc2">13:45</option>
              <option value="sc3">15:45</option>
              <option value="sc4">19:50</option>
            </select>
            <div className="nice-select select-bar" tabIndex={0}>
              <span className="current">09:40</span>
              <ul className="list">
                <li data-value="sc1" className="option selected">
                  09:40
                </li>
                <li data-value="sc2" className="option">
                  13:45
                </li>
                <li data-value="sc3" className="option">
                  15:45
                </li>
                <li data-value="sc4" className="option">
                  19:50
                </li>
              </ul>
            </div>
          </div>
          <div className="item">
            <h5 className="title">05:00</h5>
            <p>Mins Left</p>
          </div>
        </div>
      </div>
    </section>
  );
}
