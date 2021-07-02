import axios from "axios";

const userEndPoint = "api/manageUser";
const movieEndPoint = "api/manageMovie";
const url = `http://localhost:8000/${userEndPoint}/login.php`;

axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded; charset=UTF-8'";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

function loginUser(user) {
  return axios.post(url, {
    user,
  });
}

const Api = {
  // user
  loginUser,
};

export default Api;
