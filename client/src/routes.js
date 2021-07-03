// import pages
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/LoginPage";
import DetailPage from "./Pages/Detail/DetailPage";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  { path: "/login", exact: true, component: LoginPage },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/movie/:id",
    component: DetailPage,
  },
];

export { routesHome };
