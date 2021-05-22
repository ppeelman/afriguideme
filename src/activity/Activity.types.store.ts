import { Activity } from "./Activity.domain";
import { RECEIVE_ACTIVITIES, REQUEST_ACTIVITIES } from "./Activity.store";

// TypeScript usage with Redux is inspired by:
// https://redux.js.org/recipes/usage-with-typescript

// State
export type ActivityMap = {
  [activityId: string]: Activity
}

export interface Activities {
  isFetching: boolean;
  items: ActivityMap;
}

// Action creators
export interface RequestActivitiesAction {
  type: typeof REQUEST_ACTIVITIES;
}

export interface ReceiveActivitiesAction {
  type: typeof RECEIVE_ACTIVITIES;
  activities: Activity[];
  receivedAt: number;
}

export type ActivitiesActionTypes = RequestActivitiesAction | ReceiveActivitiesAction; // use TypeScript's Union Type to express all possible actions
