import Coordinate from "./Coordinate.domain";

interface ConstructorArguments {
  number?: string; // eg. '1A'
  street?: string; // eg. 'Eedverbondkaai'
  city: string; // eg. 'Gent'
  country: string; // eg. 'Rwanda'
  coordinate: Coordinate; // [longitude, latitude]
}

export default class Location {
  public number?: string;
  public street?: string;
  public city: string;
  public country: string;
  public coordinate: Coordinate;

  constructor({ number, street, city, country, coordinate }: ConstructorArguments) {
    this.number = number;
    this.street = street;
    this.city = city;
    this.country = country;
    this.coordinate = coordinate;
  }
}
