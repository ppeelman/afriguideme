import { LatLngLiteral } from "leaflet";

interface IProps {
  longitude: number;
  latitude: number;
}

export default class Coordinate {
  public longitude: number;
  public latitude: number;

  constructor({ longitude, latitude }: IProps) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  public toLatLng(): LatLngLiteral {
    return {
      lat: this.latitude,
      lng: this.longitude
    };
  }
}
