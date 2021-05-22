import Location from "../location/Location.domain";

interface Plan {
  location: Location | Location[];
  description?: string;
}

export interface Morning extends Plan {
  isBreakfastIncluded: boolean;
}

export interface Afternoon extends Plan {
  isLunchIncluded: boolean;
}

export interface Evening extends Plan {
  isDinnerIncluded: boolean;
}

export interface Night extends Plan {
  isAccommodationIncluded: boolean;
}

export class ActivityDayPlan {
  constructor(private morning: Morning, private afternoon: Afternoon, private evening: Evening, private night: Night) {}
}
