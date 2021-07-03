import { LOGIN_USER, LOG_OUT, RETRIEVE_LOGIN } from "../action/userAction";

const initialState = {
  token: "",
  isLogin: false,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_USER: {
      return {
        ...state,
        isLogin: false,
      };
    }
    case RETRIEVE_LOGIN: {
      return {
        ...state,
        isLogin: true,
        token: { ...payload.jwt },
      };
    }

    case LOG_OUT: {
      return {
        ...state,
        isLogin: false,
        token: "",
      };
    }

    default:
      return state;
  }
}
