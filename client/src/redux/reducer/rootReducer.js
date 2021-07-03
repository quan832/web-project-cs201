import { combineReducers } from "redux";

// import reducer
import configReducer from "./config";
import movieReducer from "../../module/movie/reducers/movieReducer";

const rootReducer = combineReducers({
  configReducer,
  movieReducer,
});

export default rootReducer;
