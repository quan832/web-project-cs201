import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

// import route
import { Router, Switch } from "react-router-dom";

// import components

// import template
import HomeTemplate from "./template/HomeTemplate";

// routes
import { createBrowserHistory } from "history";
import { routesHome } from "./routes";

// scroll to top
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

export const history = createBrowserHistory();

const showItemHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        ></HomeTemplate>
      );
    });
  }
};

function App() {
  return (
    <Router history={history}>
      <ScrollToTop>
        <Switch>{showItemHome(routesHome)}</Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
