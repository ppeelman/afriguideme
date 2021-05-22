import Plan from "../planning/Plan.domain";
import { Activity } from "../activity/Activity.domain";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const getNextActivityWithoutAccommodation = (planning: Plan[], activities: Activity[]): Activity | undefined => {
  let selectedActivity: string;

  for (const plan of planning) {
    if (!plan.hotelId) {
      selectedActivity = plan.activityId as string;
    }
  }

  return activities.find((activity: Activity) => selectedActivity && selectedActivity === activity.id);
};

export const useNextActivityWithoutAccommodation = (): Activity | undefined => {
  return useSelector(({ planning, activities }: RootState) =>
    getNextActivityWithoutAccommodation(planning, activities.items)
  );
};
