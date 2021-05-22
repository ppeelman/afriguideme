import { Filter, Sorter } from "../../card/cardsWithFilter/CardsWithFilter.component";
import { Activity } from "../../activity/Activity.domain";

export const filters: Filter<Activity>[] = [
  {
    filterLabel: "Category",
    getter: (item: Activity) => item.type.mainType
  },
  {
    filterLabel: "Region",
    getter: (item: Activity) => item.location.country
  }
];

export const sorters: Sorter<Activity>[] = [
  {
    sorterLabel: "Price",
    sortFunction: (itemA: Activity, itemB: Activity) => itemA.startingPrice.amount - itemB.startingPrice.amount
  }
];

export const isSelected = (selectedActivities: Activity[], { id }: Activity) =>
  selectedActivities.some((activity: Activity) => activity.id === id);
