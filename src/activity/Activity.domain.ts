import { allPass, compose, isNil, not, prop } from "ramda";

import ActivityCategory from "./Activity.enum";
import { Photo } from "../domain/Photo.domain";
import { InvalidCreationArguments } from "./Activity.error";
import { Currency } from "../domain/Currency.domain";

export interface IProps {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  recommended: boolean;
  region: string;
  hero: Photo;
  photos: Photo[];
  category: ActivityCategory;
  startingPrice: Currency;
}

class Activity {
  readonly id: string;
  readonly title: string;
  readonly shortDesc: string;
  readonly longDesc: string;
  readonly recommended: boolean;
  readonly region: string;
  readonly hero: Photo;
  readonly photos: Photo[];
  readonly category: ActivityCategory;
  readonly startingPrice: Currency;

  private constructor({ id, title, shortDesc, longDesc, recommended, region, hero, photos, category, startingPrice }: IProps) {
    this.id = id;
    this.title = title;
    this.shortDesc = shortDesc;
    this.longDesc = longDesc;
    this.recommended = recommended;
    this.region = region;
    this.hero = hero;
    this.photos = photos;
    this.category = category;
    this.startingPrice = startingPrice;
  }

  public static build(props: IProps): Activity {
    if (Activity.arePropsValid(props)) {
      return new Activity(props);
    }

    throw new InvalidCreationArguments(props);
  }

  public static arePropsValid = (props: IProps): boolean => {
    const isIdNotNull: (props: IProps) => boolean = compose(not, isNil, prop("id"));
    const isTitleNotNull: (props: IProps) => boolean = compose(not, isNil, prop("title"));
    const isCategoryNotNull: (props: IProps) => boolean = compose(not, isNil, prop("category"));

    const isValid = allPass([isIdNotNull, isTitleNotNull, isCategoryNotNull]);

    return isValid(props);
  };
}

export default Activity;
