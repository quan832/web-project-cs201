import React from "react";

export default function TicketSearch() {
  return (
    <section className="search-ticket-section padding-top pt-lg-0">
      <div className="container">
        <div
          className="search-tab bg_img"
          data-background="./assets/images/ticket/ticket-bg01.jpg"
          style={{
            backgroundImage: 'url("./assets/images/ticket/ticket-bg01.jpg")',
          }}
        >
          <div className="row align-items-center mb--20">
            <div className="col-lg-6 mb-20">
              <div className="search-ticket-header">
                <h6 className="category">welcome to Home </h6>
                <h3 className="title">what are you looking for</h3>
              </div>
            </div>
            <div className="col-lg-6 mb-20">
              <ul className="tab-menu ticket-tab-menu">
                <li className="active">
                  <div className="tab-thumb">
                    <img
                      src="./assets/images/ticket/ticket-tab01.png"
                      alt="ticket"
                    />
                  </div>
                  <span>movie</span>
                </li>
                <li>
                  <div className="tab-thumb">
                    <img
                      src="./assets/images/ticket/ticket-tab02.png"
                      alt="ticket"
                    />
                  </div>
                  <span>events</span>
                </li>
                <li>
                  <div className="tab-thumb">
                    <img
                      src="./assets/images/ticket/ticket-tab03.png"
                      alt="ticket"
                    />
                  </div>
                  <span>sports</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-area">
            <div className="tab-item active">
              <form className="ticket-search-form">
                <div className="form-group large">
                  <input type="text" placeholder="Search fo Movies" />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
                <div className="form-group">
                  <div className="thumb">
                    <img src="./assets/images/ticket/city.png" alt="ticket" />
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
                    <img src="./assets/images/ticket/date.png" alt="ticket" />
                  </div>
                  <span className="type">date</span>
                  <select className="select-bar" style={{ display: "none" }}>
                    <option value="26-12-19">23/10/2019</option>
                    <option value="26-12-19">24/10/2019</option>
                    <option value="26-12-19">25/10/2019</option>
                    <option value="26-12-19">26/10/2019</option>
                  </select>
                  <div className="nice-select select-bar" tabIndex={0}>
                    <span className="current">23/10/2019</span>
                    <ul className="list">
                      <li data-value="26-12-19" className="option selected">
                        23/10/2019
                      </li>
                      <li data-value="26-12-19" className="option">
                        24/10/2019
                      </li>
                      <li data-value="26-12-19" className="option">
                        25/10/2019
                      </li>
                      <li data-value="26-12-19" className="option">
                        26/10/2019
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-group">
                  <div className="thumb">
                    <img src="./assets/images/ticket/cinema.png" alt="ticket" />
                  </div>
                  <span className="type">cinema</span>
                  <select className="select-bar" style={{ display: "none" }}>
                    <option value="Awaken">Awaken</option>
                    <option value="dhaka">dhaka</option>
                    <option value="rosario">rosario</option>
                    <option value="madrid">madrid</option>
                    <option value="koltaka">kolkata</option>
                    <option value="rome">rome</option>
                    <option value="khoksa">khoksa</option>
                  </select>
                  <div className="nice-select select-bar" tabIndex={0}>
                    <span className="current">Awaken</span>
                    <ul className="list">
                      <li data-value="Awaken" className="option selected">
                        Awaken
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
              </form>
            </div>
            <div className="tab-item">
              <form className="ticket-search-form">
                <div className="form-group large">
                  <input type="text" placeholder="Search fo Events" />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
                <div className="form-group">
                  <div className="thumb">
                    <img src="./assets/images/ticket/city.png" alt="ticket" />
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
                    <img src="./assets/images/ticket/date.png" alt="ticket" />
                  </div>
                  <span className="type">date</span>
                  <select className="select-bar" style={{ display: "none" }}>
                    <option value="26-12-19">23/10/2019</option>
                    <option value="26-12-19">24/10/2019</option>
                    <option value="26-12-19">25/10/2019</option>
                    <option value="26-12-19">26/10/2019</option>
                  </select>
                  <div className="nice-select select-bar" tabIndex={0}>
                    <span className="current">23/10/2019</span>
                    <ul className="list">
                      <li data-value="26-12-19" className="option selected">
                        23/10/2019
                      </li>
                      <li data-value="26-12-19" className="option">
                        24/10/2019
                      </li>
                      <li data-value="26-12-19" className="option">
                        25/10/2019
                      </li>
                      <li data-value="26-12-19" className="option">
                        26/10/2019
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-group">
                  <div className="thumb">
                    <img src="./assets/images/ticket/cinema.png" alt="ticket" />
                  </div>
                  <span className="type">event</span>
                  <select className="select-bar" style={{ display: "none" }}>
                    <option value="angular">angular</option>
                    <option value="startup">startup</option>
                    <option value="rosario">rosario</option>
                    <option value="madrid">madrid</option>
                    <option value="koltaka">kolkata</option>
                    <option value="Last-First">Last-First</option>
                    <option value="wish">wish</option>
                  </select>
                  <div className="nice-select select-bar" tabIndex={0}>
                    <span className="current">angular</span>
                    <ul className="list">
                      <li data-value="angular" className="option selected">
                        angular
                      </li>
                      <li data-value="startup" className="option">
                        startup
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
                      <li data-value="Last-First" className="option">
                        Last-First
                      </li>
                      <li data-value="wish" className="option">
                        wish
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div className="tab-item">
              <form className="ticket-search-form">
                <div className="form-group large">
                  <input type="text" placeholder="Search fo Sports" />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
                <div className="form-group">
                  <div className="thumb">
                    <img src="./assets/images/ticket/city.png" alt="ticket" />
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
                    <img src="./assets/images/ticket/date.png" alt="ticket" />
                  </div>
                  <span className="type">date</span>
                  <select className="select-bar" style={{ display: "none" }}>
                    <option value="26-12-19">23/10/2019</option>
                    <option value="26-12-19">24/10/2019</option>
                    <option value="26-12-19">25/10/2019</option>
                    <option value="26-12-19">26/10/2019</option>
                  </select>
                  <div className="nice-select select-bar" tabIndex={0}>
                    <span className="current">23/10/2019</span>
                    <ul className="list">
                      <li data-value="26-12-19" className="option selected">
                        23/10/2019
                      </li>
                      <li data-value="26-12-19" className="option">
                        24/10/2019
                      </li>
                      <li data-value="26-12-19" className="option">
                        25/10/2019
                      </li>
                      <li data-value="26-12-19" className="option">
                        26/10/2019
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-group">
                  <div className="thumb">
                    <img src="./assets/images/ticket/cinema.png" alt="ticket" />
                  </div>
                  <span className="type">sports</span>
                  <select className="select-bar" style={{ display: "none" }}>
                    <option value="football">football</option>
                    <option value="cricket">cricket</option>
                    <option value="cabadi">cabadi</option>
                    <option value="madrid">madrid</option>
                    <option value="gadon">gadon</option>
                    <option value="rome">rome</option>
                    <option value="khoksa">khoksa</option>
                  </select>
                  <div className="nice-select select-bar" tabIndex={0}>
                    <span className="current">football</span>
                    <ul className="list">
                      <li data-value="football" className="option selected">
                        football
                      </li>
                      <li data-value="cricket" className="option">
                        cricket
                      </li>
                      <li data-value="cabadi" className="option">
                        cabadi
                      </li>
                      <li data-value="madrid" className="option">
                        madrid
                      </li>
                      <li data-value="gadon" className="option">
                        gadon
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
