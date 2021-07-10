import { FETCH_SEAT_BY_SHOWTIME_ID_SUCCESS } from "../action/seatAction";

const initialState = {
  seat: {},
};
export default function seatReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_SEAT_BY_SHOWTIME_ID_SUCCESS:
      return {
        ...state,
        seat: {
          ...state.seat,
          ...payload,
        },
      };
    default:
      return state;
  }
}
