type HotelPhotos = {
  hero_small: string;
  hero_large: string;
};

class Hotel {
  public name: string;
  public rating: number;
  public photos: HotelPhotos;

  constructor(hotel: any) {
    this._checkValid(hotel);
    this.name = hotel.name;
    this.rating = hotel.rating;
    this.photos = hotel.photos;
  }

  private _checkValid(hotel: any) {
    const hasNoName = !hotel.name;

    if (hasNoName) {
      throw Error(
        `[Hotel.domain] - _checkValid: Invalid name property: ${hotel.name}.\
         Name is required`
      );
    }
  }
}

export default Hotel;
