import ActivityCategory from '../enums/ActivityCategory.enum';

class Activity {
  public title: string;
  public category: ActivityCategory;

  constructor(activity: any) {
    this.title = activity.title;
    this.category = activity.category;
  }
}

export default Activity;
