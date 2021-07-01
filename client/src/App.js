import "./App.css";

// import route
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

// import components

// import template
import HomeTemplate from "./template/HomeTemplate";

// routes
import { createBrowserHistory } from "history";
import { routesHome } from "./routes";

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
      <Switch>{showItemHome(routesHome)}</Switch>
    </Router>
  );
}

export default App;
