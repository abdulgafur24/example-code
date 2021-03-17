import { combineReducers } from "redux";
import reservationReducer from "./reservation.reducer";

const appReducer = combineReducers({
  reservations: reservationReducer,
  // ...other reducers
});

export default appReducer;
