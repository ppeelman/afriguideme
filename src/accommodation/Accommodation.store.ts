// EXTERNAL
import { Action, combineReducers, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
//
// INTERNAL
import {
  AccommodationMap,
  Accommodations,
  AccommodationsActionTypes,
  AccommodationsByActivity,
  CombinedState,
  ReceiveAccommodationsAction,
  RequestAccommodationsAction
} from "./Accomodation.types.store";
import { accommodationsData } from "./mockData";
import { RootState } from "../store";
import { Accommodation } from "./Accommodation.domain";

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

 The use of asynchronicity with Redux flow is based on the redux.js.org documentation
 https://redux.js.org/advanced/async-actions

 The use of TypeScript with Redux is also based on the redux.js.org documentation:
 https://redux.js.org/recipes/usage-with-typescript

 =========================================================
*/

// Actions
export const REQUEST_ACCOMMODATIONS = "afriguideme/accommodations/REQUEST_ACCOMMODATIONS";
export const RECEIVE_ACCOMMODATIONS = "afriguideme/accommodations/RECEIVE_ACCOMMODATIONS";
export const ERROR = "afriguideme/accommodations/ERROR";

// Reducer(s)
const accommodations = (
  state: Accommodations = { isFetching: false, items: {} },
  action: AccommodationsActionTypes
): Accommodations => {
  switch (action.type) {
    case REQUEST_ACCOMMODATIONS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_ACCOMMODATIONS:
      const { accommodations, receivedAt } = action as ReceiveAccommodationsAction;

      const accommodationMap: AccommodationMap = {};
      for (const accommodation of accommodations) {
        accommodationMap[accommodation.id] = accommodation;
      }

      return Object.assign({}, state, {
        isFetching: false,
        items: accommodationMap,
        lastUpdated: receivedAt
      });

    default:
      return state;
  }
};

const accommodationsByActivity = (
  state: AccommodationsByActivity = {},
  action: ReceiveAccommodationsAction
): AccommodationsByActivity => {
  switch (action.type) {
    case RECEIVE_ACCOMMODATIONS:
      const { accommodations, activityId } = action as ReceiveAccommodationsAction;
      return {
        ...state,
        [activityId]: accommodations.map(({ id }: Accommodation) => id)
      };
  }
};

export default combineReducers({ accommodations, accommodationsByActivity });

// Actions creators
export const requestAccommodations = (activityId: string): RequestAccommodationsAction => ({
  type: REQUEST_ACCOMMODATIONS,
  activityId
});

export const receiveAccommodations = (
  activityId: string,
  accommodations: Accommodation[]
): ReceiveAccommodationsAction => ({
  type: RECEIVE_ACCOMMODATIONS,
  activityId,
  accommodations,
  receivedAt: Date.now()
});

// Thunks
export const fetchAccommodations = (activityId: string): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch: Dispatch) => {
    dispatch(requestAccommodations(activityId));

    return setTimeout(() => {
      dispatch(receiveAccommodations(activityId, accommodationsData));
    }, 500);

    // return fetch(`/${activityId}/accommodations`)
    //   .then(
    //     (response: any) => response.json(),
    //     (error: Error) => log.error("An error occurred: ", error)
    //   )
    //   .then((json: any) => dispatch(receiveAccommodations(activityId, json)));
  };
};

const shouldFetchAccommodations = (activityId: string, state: CombinedState): boolean => {
  return Boolean(state.accommodationsByActivity[activityId]);
};

export const fetchAccommodationsIfNeeded = (activityId: string) => {
  return (dispatch: Dispatch, getState: any) => {
    if (shouldFetchAccommodations(activityId, getState())) {
      // @ts-ignore
      return dispatch(fetchAccommodations(activityId));
    } else {
      return Promise.resolve();
    }
  };
};
