// import pages
import Home from "./Pages/Home/Home";

import LoginPage from "./Pages/Login/LoginPage";
import DetailPage from "./Pages/Detail/DetailPage";
import TicketPage from "./Pages/Ticket/TicketPage";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  { path: "/login", exact: true, component: LoginPage },
  {
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    exact: true,
    path: "/movie/:id",
    component: DetailPage,
  },
  {
    exact: true,
    path: "/ticket/:id",
    component: TicketPage,
  },
];

export { routesHome };
