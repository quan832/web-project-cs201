import React from "react";

// import route
import { Link } from "react-router-dom";

// import logo
import logo from "../../assets/images/logo/logo.png";

export default function Header() {
  return (
    <header className="header-section" style={{ background: "#0a1e5e" }}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/home">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/home" className="active">
                Home
              </Link>
            </li>
            <li>
              <a href="#0">movies</a>
              <ul className="submenu">
                <li>
                  <a>Movie List</a>
                </li>
                <li>
                  <a>Cinema Movie</a>
                </li>
                <li>
                  <a>Popular Movie</a>
                </li>
                <li>
                  <a>Upcoming Movie</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li className="header-button pr-0">
              <a href="sign-up.html">join us</a>
            </li>
          </ul>
          <div className="header-bar d-lg-none">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
}
