import axios from "axios";

const userEndPoint = "api/manageUser";
const movieEndPoint = "api/manageMovie";

const url = `http://localhost:8000/`;

// URL
class URL {
  static MOVIE_URL = {
    GET: `${url}${movieEndPoint}/read.php`,
    GET_SINGLE: `${url}${movieEndPoint}/read_single.php`,
  };

  static LOGIN_URL = {
    LOGIN: `${url}${userEndPoint}/login.php`,
  };
}

// handle CORS in axios
axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded; charset=UTF-8'";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

// api
function loginUser({ email, password }) {
  return axios.post(URL.LOGIN_URL.LOGIN, {
    email,
    password,
  });
}

function fetchMovie() {
  return axios.get(URL.MOVIE_URL.GET);
}

const Api = {
  // user
  loginUser,

  // movie
  fetchMovie,
};

export default Api;
