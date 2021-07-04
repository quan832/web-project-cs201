import React from "react";
import cinema from "../../../../assets/images/ticket/cinema.png";
import date from "../../../../assets/images/ticket/date.png";
import city from "../../../../assets/images/ticket/city.png";
import exp from "../../../../assets/images/ticket/exp.png";

export default function BookTicket() {


  return (
    <section className="book-section bg-one">
      <div className="container">
        <form className="ticket-search-form two">
          <div className="form-group">
            <div className="thumb">
              <img src={city} alt="ticket" />
            </div>
            <span className="type">city</span>
            <select className="select-bar" style={{ display: "none" }}>
              <option value="london">London</option>
              <option value="dhaka">dhaka</option>
              <option value="rosario">rosario</option>
              <option value="madrid">madrid</option>
              <option value="koltaka">kolkata</option>
              <option value="rome">rome</option>
              <option value="khoksa">khoksa</option>
            </select>
            <div className="nice-select select-bar" tabIndex={0}>
              <span className="current">London</span>
              <ul className="list">
                <li data-value="london" className="option selected">
                  London
                </li>
                <li data-value="dhaka" className="option">
                  dhaka
                </li>
                <li data-value="rosario" className="option">
                  rosario
                </li>
                <li data-value="madrid" className="option">
                  madrid
                </li>
                <li data-value="koltaka" className="option">
                  kolkata
                </li>
                <li data-value="rome" className="option">
                  rome
                </li>
                <li data-value="khoksa" className="option">
                  khoksa
                </li>
              </ul>
            </div>
          </div>
          <div className="form-group">
            <div className="thumb">
              <img src={date} alt="ticket" />
            </div>
            <span className="type">date</span>
            <select className="select-bar" style={{ display: "none" }}>
              <option value="26-12-19">23/10/2020</option>
              <option value="26-12-19">24/10/2020</option>
              <option value="26-12-19">25/10/2020</option>
              <option value="26-12-19">26/10/2020</option>
            </select>
            <div className="nice-select select-bar" tabIndex={0}>
              <span className="current">23/10/2020</span>
              <ul className="list">
                <li data-value="26-12-19" className="option selected">
                  23/10/2020
                </li>
                <li data-value="26-12-19" className="option">
                  24/10/2020
                </li>
                <li data-value="26-12-19" className="option">
                  25/10/2020
                </li>
                <li data-value="26-12-19" className="option">
                  26/10/2020
                </li>
              </ul>
            </div>
          </div>
          <div className="form-group">
            <div className="thumb">
              <img src={cinema} alt="ticket" />
            </div>
            <span className="type">cinema</span>
            <select className="select-bar" style={{ display: "none" }}>
              <option value="Awaken">Awaken</option>
              <option value="Venus">Venus</option>
              <option value="wanted">wanted</option>
              <option value="joker">joker</option>
              <option value="fid">fid</option>
              <option value="kidio">kidio</option>
              <option value="mottus">mottus</option>
            </select>
            <div className="nice-select select-bar" tabIndex={0}>
              <span className="current">Awaken</span>
              <ul className="list">
                <li data-value="Awaken" className="option selected">
                  Awaken
                </li>
                <li data-value="Venus" className="option">
                  Venus
                </li>
                <li data-value="wanted" className="option">
                  wanted
                </li>
                <li data-value="joker" className="option">
                  joker
                </li>
                <li data-value="fid" className="option">
                  fid
                </li>
                <li data-value="kidio" className="option">
                  kidio
                </li>
                <li data-value="mottus" className="option">
                  mottus
                </li>
              </ul>
            </div>
          </div>
          <div className="form-group">
            <div className="thumb">
              <img src={exp} alt="ticket" />
            </div>
            <span className="type">Experience</span>
            <select className="select-bar" style={{ display: "none" }}>
              <option value="English-2D">English-2D</option>
              <option value="English-3D">English-3D</option>
              <option value="Hindi-2D">Hindi-2D</option>
              <option value="Hindi-3D">Hindi-3D</option>
              <option value="Telegu-2D">Telegu-2D</option>
              <option value="Telegu-3D">Telegu-3D</option>
            </select>
            <div className="nice-select select-bar" tabIndex={0}>
              <span className="current">English-2D</span>
              <ul className="list">
                <li data-value="English-2D" className="option selected">
                  English-2D
                </li>
                <li data-value="English-3D" className="option">
                  English-3D
                </li>
                <li data-value="Hindi-2D" className="option">
                  Hindi-2D
                </li>
                <li data-value="Hindi-3D" className="option">
                  Hindi-3D
                </li>
                <li data-value="Telegu-2D" className="option">
                  Telegu-2D
                </li>
                <li data-value="Telegu-3D" className="option">
                  Telegu-3D
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
