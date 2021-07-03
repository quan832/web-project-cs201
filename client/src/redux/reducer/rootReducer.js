import { combineReducers } from "redux";

// import reducer
import configReducer from "./config";
import movieReducer from "../../module/movie/reducers/movieReducer";
import userReducer from "../../module/user/reducer/userReducer";

const rootReducer = combineReducers({
  configReducer,
  movieReducer,
  userReducer,
});

export default rootReducer;
