import * as R from "ramda";

import Step from "./Step.domain";
import { getTranslationOfStepById, stepperConfig } from "./Stepper.config";

export const buildStepper = (currentStepId: number): Step[] => {
  const isCompleted = (stepId: number, currStepId: number) => stepId < currStepId;
  const isCurrent = (stepId: number, currStepId: number) => stepId === currStepId;

  const createStep = R.curry(
    (currStepId: number, stepId: number): Step => {
      return new Step(
        getTranslationOfStepById(stepperConfig, stepId),
        isCompleted(stepId, currStepId),
        isCurrent(stepId, currStepId)
      );
    }
  );

  return R.map(R.compose(createStep(currentStepId), R.prop("id")), stepperConfig);
};
