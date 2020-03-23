import ActivityCategory from './Activity.enum';

class Activity {
  public title: string;
  public category: ActivityCategory;

  constructor(activity: any) {
    this.title = activity.title;
    this.category = activity.category;
  }
}

export default Activity;
