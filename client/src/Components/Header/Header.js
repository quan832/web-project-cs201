import React, { Fragment, useEffect, useState } from "react";

// import route
import { Link, withRouter } from "react-router-dom";

// import logo
import logo from "../../assets/images/logo/logo.png";
import { APP_TOKEN } from "../../util/constant/constant";

//import lodash
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT } from "../../module/user/action/userAction";

import makeToast from "../Alert/Toaster";

function Header(props) {
  const token = useSelector((state) => state.userReducer.token);

  const dispatch = useDispatch();

  const logout = _.debounce(function () {
    //clear storage
    localStorage.clear();

    // logout
    dispatch({ type: LOG_OUT });

    makeToast("success", "Logout successfully");
  }, 400);

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
            {_.isEmpty(token) ? (
              <Fragment>
                {" "}
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li className="header-button pr-0">
                  <Link to="/register">join us</Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link>Profile</Link>
                </li>
                <li onClick={logout}>
                  <Link>Logout</Link>
                </li>
              </Fragment>
            )}
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

export default withRouter(Header);
