import {
  AccommodationBookings,
  ActivityBookings,
  AddAccommodationBookingAction,
  AddActivityBookingAction
} from "./Booking.types.store";
import { combineReducers } from "redux";
import { ActivityBooking } from "../activity/Activity.domain";
import { AccommodationBooking } from "../accommodation/Accommodation.domain";

/*
 =========================================================

 The structure of this file is inspired by the "ducks" pattern:
 https://github.com/erikras/ducks-modular-redux

 RULES:
    A module...

 1) MUST export default a function called reducer()
 2) MUST export its action creators as functions
 3) MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
 4) MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library

 --------------

 The use of TypeScript with Redux is also based on the redux.js.org documentation:
 https://redux.js.org/recipes/usage-with-typescript

 =========================================================
*/

// Actions
export const ADD_ACTIVITY_BOOKING = "afriguideme/booking/ADD_ACTIVITY_BOOKING";
export const CHANGE_ORDER_ACTIVITY_BOOKING = "afriguideme/booking/CHANGE_ORDER_ACTIVITY_BOOKING";
export const ADD_ACCOMMODATION_BOOKING = "afriguideme/booking/ADD_ACCOMMODATION_BOOKING";

// Reducers
const activityBookings = (state: ActivityBookings = [], action: AddActivityBookingAction): ActivityBookings => {
  switch (action.type) {
    case ADD_ACTIVITY_BOOKING:
      const { booking }: { booking: ActivityBooking } = action as AddActivityBookingAction;
      return [...state, booking];
    default:
      return state;
  }
};

const accommodationBookings = (
  state: AccommodationBookings = [],
  action: AddAccommodationBookingAction
): AccommodationBookings => {
  switch (action.type) {
    case ADD_ACCOMMODATION_BOOKING:
      const { booking }: { booking: AccommodationBooking } = action as AddAccommodationBookingAction;
      return [...state, booking];
    default:
      return state;
  }
};

export default combineReducers({ activityBookings, accommodationBookings });

// Action creators
const addActivityBooking = (booking: ActivityBooking): AddActivityBookingAction => ({
  type: ADD_ACTIVITY_BOOKING,
  booking
});

const addAccommodationBooking = (booking: AccommodationBooking, activityBookingId: string): AddAccommodationBookingAction => ({
  type: ADD_ACCOMMODATION_BOOKING,
  activityBookingId,
  booking
});
