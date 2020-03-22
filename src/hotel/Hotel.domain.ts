import * as R from "ramda";
import { Either, left, right } from "ts.data.either";

import { Photo } from "../domain/Photo.domain";
import Rating from "../domain/Rating.domain";
import { isInstanceOf, isNullOrUndefined } from "../validation/general.validation";
import { InvalidCreationArguments } from "./Hotel.error";

export interface HotelConstructorProps {
  name: string;
  rating: Rating;
  photos: Photo[];
}

class Hotel {
  readonly name: string;
  readonly rating: Rating;
  readonly photos: Photo[];

  private constructor(props: HotelConstructorProps) {
    this.name = props.name;
    this.rating = props.rating;
    this.photos = props.photos;
  }

  public static build(props : HotelConstructorProps): Either<Hotel> {
    return Hotel.arePropsValid(props) ? right(new Hotel(props)) : left(new InvalidCreationArguments(props));
  }

  public static arePropsValid = (props : HotelConstructorProps): boolean => {
    const isNameNotNull: (props: HotelConstructorProps) => boolean = R.compose(R.not, isNullOrUndefined, R.prop('name'));
    const isRatingInstanceOfRating: (props: HotelConstructorProps) => boolean = R.compose(isInstanceOf(Rating), R.prop('rating'));
    const arePhotosArrayOfPhotoInstances: (props: HotelConstructorProps) => boolean = R.compose(R.all(isInstanceOf(Photo)) ,R.prop('photos'));

    const isValid = R.allPass([isNameNotNull, isRatingInstanceOfRating, arePhotosArrayOfPhotoInstances]);

    return isValid(props);
  }


}

export default Hotel;
