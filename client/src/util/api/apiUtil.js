import axios from "axios";

const userEndPoint = "api/manageUser";
const movieEndPoint = "api/manageMovie";

const url = `http://localhost:8000/`;

// URL
class URL {
  // movie module
  static MOVIE_URL = {
    GET: `${url}${movieEndPoint}/read.php`,
    GET_SINGLE: `${url}${movieEndPoint}/read_single_movie.php`,
    GET_TIME_BY_MOVIE: `${url}${movieEndPoint}/read_showtime_theater_by_movie.php`,
  };

  // user module
  static LOGIN_URL = {
    LOGIN: `${url}${userEndPoint}/login.php`,
    REGISTER: `${url}${userEndPoint}/register.php`,
  };

  // ticket module
  static TICKET_URL = {
    GET_BY_MOVIE: `${url}${movieEndPoint}/read.php`,
  };
}

// handle CORS in axios
// axios.defaults.headers.common["Content-Type"] =
//   "application/x-www-form-urlencoded; charset=UTF-8'";
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.common["Content-Type"] = "text/plain";

const headers = {
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
};

// api
function loginUser({ email, password }) {
  return axios.post(
    URL.LOGIN_URL.LOGIN,
    {
      email,
      password,
    },
    { headers }
  );
}

function registerUser({ email, password, username }) {
  return axios.post(
    URL.LOGIN_URL.REGISTER,
    {
      username,
      email,
      pwd1: password,
      pwd2: password,
    },
    { headers }
  );
}

function fetchMovie() {
  return axios.get(URL.MOVIE_URL.GET);
}

function fetchMovieDetail(id) {
  return axios.get(
    URL.MOVIE_URL.GET_SINGLE,
    {
      params: { id },
    },
    { headers }
  );
}

function fetchMovieTime(id) {
  return axios.get(
    URL.MOVIE_URL.GET_TIME_BY_MOVIE,
    {
      params: { movie_id: id },
    },
    { headers }
  );
}

const Api = {
  // user
  loginUser,
  registerUser,

  // movie
  fetchMovie,
  fetchMovieDetail,
  fetchMovieTime,

  // ticket
};

export default Api;
