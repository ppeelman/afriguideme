// EXTERNAL
import { RootState } from "../store";
import { useSelector } from "react-redux";
import log from "loglevel";
//
// INTERNAL
import Plan from "../planning/Plan.domain";
import { Activity } from "./Activity.domain";

const getSelectedActivities = (activities: Activity[], planning: Plan[]): Activity[] => {
  const selectedActivityIDs: string[] = planning.map(({ activityId }: Plan) => activityId).filter(Boolean) as string[];

  // Iterate over 'selectedActivityIDs' to preserve the activity order as present in 'planning'
  return selectedActivityIDs
    .map((activityId: string) => activities.find(({ id }: Activity) => activityId === id))
    .filter(Boolean) as Activity[];
};

const isActivitySelected = (activityId: string | undefined, planning: Plan[]): boolean => {
  return planning.some(({ activityId: id }: Plan) => activityId && id === activityId);
};

export const useSelectedActivities = (): Activity[] => {
  log.info("Hook: [useSelectedActivities]");
  return useSelector(({ activities, planning }: RootState): Activity[] => getSelectedActivities(activities, planning));
};

export const useIsActivitySelected = (activityId: string | undefined): boolean => {
  log.info("Hook: [useIsActivitySelected]");
  return useSelector(({ planning }: RootState): boolean => isActivitySelected(activityId, planning));
};
