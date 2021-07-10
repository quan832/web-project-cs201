import axios from "axios";

const userEndPoint = "api/manageUser";
const movieEndPoint = "api/manageMovie";
const showtimeEndPoint = "api/manageShowtime";
const seatEndPoint = 'api/manageSeat'

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
    GET_BY_MOVIE: `${url}${showtimeEndPoint}/read_seat_by_showtime.php`,
  };

  // seat module
  static SEAT_URL ={
    BOOK_TICKET : `${url}${seatEndPoint}/seat_reservation.php`,
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

function fetchSeatByTimeByID(id) {
  return axios.get(
    URL.TICKET_URL.GET_BY_MOVIE,
    {
      params: { showtime_id: id },
    },
    { headers }
  );
}

function bookSeatByIds(ids) {
  return axios.post(
    URL.SEAT_URL.BOOK_TICKET,
    {
      params: { seat_id: ids },
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

  // Seat
  fetchSeatByTimeByID,
  bookSeatByIds,
};

export default Api;
