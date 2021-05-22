import { Photo } from "../domain/Photo.domain";
import Rating from "../rating/Rating.domain";
import { Currency } from "../domain/Currency.domain";
import { IAccommodationBooking } from "../booking/Booking.domain";
import { SelectedOption } from "../domain/Choice.domain";
import Location from "../location/Location.domain";



export interface ConstructorArguments {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  location: Location;
  rating: Rating;
  photos: Photo[];
  startingPrice: Currency;
  features: string[];
}

export class Accommodation {
  readonly id: string;
  readonly name: string;
  readonly shortDesc: string;
  readonly longDesc: string;
  readonly location: Location;
  readonly rating: Rating;
  readonly photos: Photo[];
  readonly startingPrice: Currency;
  readonly features: string[];

  constructor({
    id,
    name,
    shortDesc,
    longDesc,
    location,
    rating,
    photos,
    startingPrice,
    features
  }: ConstructorArguments) {
    this.id = id;
    this.name = name;
    this.shortDesc = shortDesc;
    this.longDesc = longDesc;
    this.location = location;
    this.rating = rating;
    this.photos = photos;
    this.startingPrice = startingPrice;
    this.features = features;
  }
}

export class AccommodationBooking implements IAccommodationBooking {
  constructor(
    public id: string,
    public accommodationId: string,
    public durationInDays: number,
    public selectedOptions: SelectedOption<any>[]
  ) {}
}
