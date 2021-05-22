import { SelectedOption } from "../domain/Choice.domain";
import { ActivityDayPlan } from "../activity/ActivityDayPlan.domain";

interface Booking {
  id: string;
  selectedOptions: SelectedOption<any>[];
}

export interface IActivityBooking extends Booking {
  activityId: string;
  activityPlanning: ActivityDayPlan[];
}

export interface IAccommodationBooking extends Booking {
  accommodationId: string;
}
