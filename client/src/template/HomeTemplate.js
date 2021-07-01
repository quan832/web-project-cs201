import React, { Fragment } from "react";

import { Route } from "react-router";

// import Component
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function HomeTemplate(props) {
  // es6
  let { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            {/* Header */}
            <Header></Header>

            <Component {...propsRoute} />

            <Footer></Footer>
          </Fragment>
        );
      }}
    />
  );
}
