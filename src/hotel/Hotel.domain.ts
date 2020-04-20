import * as R from "ramda";

import { Photo } from "../domain/Photo.domain";
import Rating from "../rating/Rating.domain";
import { InvalidCreationArguments } from "./Hotel.error";
import { Currency } from "../domain/Currency.domain";

export interface HotelConstructorProps {
  name: string;
  shortDesc: string;
  longDesc: string;
  rating: Rating;
  photos: Photo[];
  startingPrice: Currency;
}

class Hotel {
  readonly name: string;
  readonly shortDesc: string;
  readonly longDesc: string;
  readonly rating: Rating;
  readonly photos: Photo[];
  readonly startingPrice: Currency;

  private constructor({ name, shortDesc, longDesc, rating, photos, startingPrice }: HotelConstructorProps) {
    this.name = name;
    this.shortDesc = shortDesc;
    this.longDesc = longDesc;
    this.rating = rating;
    this.photos = photos;
    this.startingPrice = startingPrice;
  }

  public static build(props: HotelConstructorProps): Hotel {
    if (Hotel.arePropsValid(props)) {
      return new Hotel(props);
    }

    throw new InvalidCreationArguments(props);
  }

  public static arePropsValid = (props: HotelConstructorProps): boolean => {
    const isNameNotNull: (props: HotelConstructorProps) => boolean = R.compose(R.not, R.isNil, R.prop("name"));

    const isValid = R.allPass([isNameNotNull]);

    return isValid(props);
  };
}

export default Hotel;
