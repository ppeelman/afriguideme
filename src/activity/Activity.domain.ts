import { Photo } from "../domain/Photo.domain";
import { Currency } from "../domain/Currency.domain";
import ActivityType from "./ActivityType.domain";
import Location from "../location/Location.domain";
import { Choice, SelectedOption } from "../domain/Choice.domain";
import { IActivityBooking } from "../booking/Booking.domain";
import { ActivityDayPlan } from "./ActivityDayPlan.domain";
import { Addon, AddonId } from "../domain/Addon.domain";

export interface Features {
  included: string[];
  notIncluded: string[];
}

export interface ConstructorArguments {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  recommended: boolean;
  location: Location;
  hero: Photo;
  photos: Photo[];
  type: ActivityType;
  startingPrice: Currency;
  features: Features;
  availableChoices: Choice[];
  addons: Addon[];
}

export class Activity {
  public id: string;
  readonly title: string;
  readonly shortDesc: string;
  readonly longDesc: string;
  readonly recommended: boolean;
  readonly location: Location;
  readonly hero: Photo;
  readonly photos: Photo[];
  readonly type: ActivityType;
  readonly startingPrice: Currency;
  readonly features: Features;
  readonly choices: Choice[]; // multiple choice, 1 default choice already selected
  readonly addons: Addon[]; // 'checkbox': true/false, default: not selected

  public constructor({
    id,
    title,
    shortDesc,
    longDesc,
    recommended,
    location,
    hero,
    photos,
    type,
    startingPrice,
    features,
    availableChoices,
    addons
  }: ConstructorArguments) {
    this.id = id;
    this.title = title;
    this.shortDesc = shortDesc;
    this.longDesc = longDesc;
    this.recommended = recommended;
    this.location = location;
    this.hero = hero;
    this.photos = photos;
    this.type = type;
    this.startingPrice = startingPrice;
    this.features = features;
    this.choices = availableChoices;
    this.addons = addons;
  }
}

export class ActivityBooking implements IActivityBooking {
  constructor(
    public id: string,

    public activityId: string,
    public activityPlanning: ActivityDayPlan[],

    public selectedOptions: SelectedOption<any>[],
    public addons: AddonId[]
  ) {}

  public get durationInDays() {
    return this.activityPlanning.length;
  }
}
