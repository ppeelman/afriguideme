import { Photo } from "./Photo.domain";
import Rating from "./Rating.domain";
import { Either, right } from "../utils/either.util";
import { HotelError } from "../errors/Hotel.error";

interface HotelConstructorProps {
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


  public static build({name, rating, photos} : HotelConstructorProps): Either<HotelError.InvalidCreationArguments, Hotel> {
    return right(new Hotel({name, rating, photos}));
  }


}

export default Hotel;
