// import pages
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/LoginPage";

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
];

export { routesHome };
