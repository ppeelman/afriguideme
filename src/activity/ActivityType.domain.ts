import { ActivityMainType, ActivitySubType } from "./Activity.enum";

interface IProps {
  mainType: ActivityMainType;
  subType: ActivitySubType;
}

export default class ActivityType {
  public mainType: ActivityMainType;
  public subType: ActivitySubType;

  constructor({mainType, subType}: IProps) {
    this.mainType = mainType;
    this.subType = subType;
  }
}
