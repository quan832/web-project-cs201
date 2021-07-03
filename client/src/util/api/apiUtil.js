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
  };

  // user module
  static LOGIN_URL = {
    LOGIN: `${url}${userEndPoint}/login.php`,
  };

  // ticket module
  static TICKET_URL = {

  }
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

function fetchMovie() {
  return axios.get(URL.MOVIE_URL.GET);
}

function fetchMovieDetail(ID) {
  return axios.get(
    URL.MOVIE_URL.GET_SINGLE,
    {
      params: { ID },
    },
    { headers }
  );
}



const Api = {
  // user
  loginUser,

  // movie
  fetchMovie,
  fetchMovieDetail,

  // ticket
};

export default Api;
