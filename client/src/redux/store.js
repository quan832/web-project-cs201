import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

// import reducer
import rootReducer from "./reducer/rootReducer";

// Logger with default options
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);
let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };
