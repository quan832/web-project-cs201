import { combineReducers } from "redux";

// import reducer
import configReducer from "./config";
import movieReducer from "../../module/movie/reducers/movieReducer";
import userReducer from "../../module/user/reducer/userReducer";
import seatReducer from "../../module/seat/reudcer/seatReducer";

const rootReducer = combineReducers({
  configReducer,
  movieReducer,
  userReducer,
  seatReducer,
});

export default rootReducer;
