import * as R from "ramda";

export enum StepId {
  FIRST_NIGHT,
  ACTIVITIES,
  HOTELS,
  PERSONAL_DATA,
  OVERVIEW
}

export interface StepConfig {
  id: number;
  translation: string;
  route: string;
}

export const stepperConfig: StepConfig[] = [
  {
    id: StepId.FIRST_NIGHT,
    translation: "stepper.firstNight",
    route: "/first-night"
  },
  {
    id: StepId.ACTIVITIES,
    translation: "stepper.activities",
    route: "/activities"
  },
  {
    id: StepId.HOTELS,
    translation: "stepper.hotels",
    route: "/hotels"
  },
  {
    id: StepId.PERSONAL_DATA,
    translation: "stepper.personalData",
    route: "/personal-data"
  },
  {
    id: StepId.OVERVIEW,
    translation: "stepper.overview",
    route: "/overview"
  }
];

export const getIdOfFirstItem: (stepsConfig: StepConfig[]) => number | unknown = R.compose(R.prop("id"), R.head);
export const getTranslationOfStepById = (stepsConfig: StepConfig[], stepId: number) => {
  // @ts-ignore
  return R.compose(R.prop("translation"), R.find<StepConfig>(R.propEq<string, number>("id", stepId)))(stepsConfig);
};
