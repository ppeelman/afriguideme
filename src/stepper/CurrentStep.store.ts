import { StoreAction } from "../store";
import { getIdOfFirstItem, stepperConfig } from "./Stepper.config";

const CHANGE_STEP = "CHANGE_STEP";

const INITIAL_STATE: number = getIdOfFirstItem(stepperConfig) as number;

export const CurrentStepReducer = (state = INITIAL_STATE, action: StoreAction<number>): number => {
  switch (action.type) {
    case CHANGE_STEP: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

export const changeStep = (stepId: number) => (dispatch: any) => {
  dispatch({
    type: CHANGE_STEP,
    payload: stepId
  });
};
