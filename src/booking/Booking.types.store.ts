import { ActivityBooking } from "../activity/Activity.domain";
import { AccommodationBooking } from "../accommodation/Accommodation.domain";
import { ADD_ACCOMMODATION_BOOKING, ADD_ACTIVITY_BOOKING } from "./Booking.store";

// State
export type ActivityBookings = ActivityBooking[];
export type AccommodationBookings = AccommodationBooking[];

// Action creators
export interface AddActivityBookingAction {
  type: typeof ADD_ACTIVITY_BOOKING,
  booking: ActivityBooking
}

export interface AddAccommodationBookingAction {
  type: typeof ADD_ACCOMMODATION_BOOKING,
  activityBookingId: string,
  booking: AccommodationBooking
}
