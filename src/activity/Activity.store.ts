// EXTERNAL
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
//
// INTERNAL
import {
  Activities,
  ActivitiesActionTypes,
  ActivityMap,
  ReceiveActivitiesAction,
  RequestActivitiesAction
} from "./Activity.types.store";
import { CombinedState } from "../accommodation/Accomodation.types.store";
import { RootState } from "../store";
import { activitiesData } from "./mockData";
import { Activity } from "./Activity.domain";

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
export const REQUEST_ACTIVITIES = "afriguideme/activities/REQUEST_ACTIVITIES";
export const RECEIVE_ACTIVITIES = "afriguideme/activities/RECEIVE_ACTIVITIES";
export const ERROR = "afriguideme/activities/ERROR";

// Reducer(s)
const reducer = (
  state: Activities = { isFetching: false, items: {} },
  action: ActivitiesActionTypes
): Activities => {
  switch (action.type) {
    case REQUEST_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_ACTIVITIES:
      const { activities, receivedAt } = action as ReceiveActivitiesAction;

      // Transform array to 'map' (object with IDs as keys)
      const activityMap: ActivityMap = {};
      for(const activity of activities) {
        activityMap[activity.id] = activity;
      }

      return Object.assign({}, state, {
        isFetching: false,
        items: activityMap,
        lastUpdated: receivedAt
      });

    default:
      return state;
  }
};

export default reducer;

// Action creators
export const requestActivities = (): RequestActivitiesAction => ({
  type: REQUEST_ACTIVITIES
});

export const receiveActivities = (activities: Activity[]): ReceiveActivitiesAction => ({
  type: RECEIVE_ACTIVITIES,
  activities,
  receivedAt: Date.now()
});

// Thunks
export const fetchActivities = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch: Dispatch) => {
    dispatch(requestActivities());

    return setTimeout(() => {
      dispatch(receiveActivities(activitiesData));
    }, 500);

    // return fetch(`/${activityId}/accommodations`)
    //   .then(
    //     (response: any) => response.json(),
    //     (error: Error) => log.error("An error occurred: ", error)
    //   )
    //   .then((json: any) => dispatch(receiveAccommodations(activityId, json)));
  };
};

const shouldFetchActivities = (state: CombinedState): boolean => !state;

export const fetchActivitiesIfNeeded = () => {
  return (dispatch: Dispatch, getState: any) => {
    if (shouldFetchActivities(getState())) {
      // @ts-ignore
      return dispatch(fetchActivities());
    } else {
      return Promise.resolve();
    }
  };
};
