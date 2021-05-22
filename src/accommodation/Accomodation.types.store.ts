import { Accommodation } from "./Accommodation.domain";
import reducer, { RECEIVE_ACCOMMODATIONS, REQUEST_ACCOMMODATIONS } from "./Accommodation.store";

// State
export type AccommodationMap = {
  [accommodationId: string]: Accommodation;
};

export interface Accommodations {
  isFetching: boolean;
  items: AccommodationMap;
}

export type AccommodationsByActivity = {
  [activityId: string]: string[];
};

export type CombinedState = ReturnType<typeof reducer>;

// Action creators
export interface RequestAccommodationsAction {
  type: typeof REQUEST_ACCOMMODATIONS;
  activityId: string;
}

export interface ReceiveAccommodationsAction {
  type: typeof RECEIVE_ACCOMMODATIONS;
  activityId: string;
  accommodations: Accommodation[];
  receivedAt: number;
}

export type AccommodationsActionTypes = ReceiveAccommodationsAction | RequestAccommodationsAction; // use TypeScript's Union Type to express all possible actions
