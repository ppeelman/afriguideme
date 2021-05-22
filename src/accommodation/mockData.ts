import Rating from "../rating/Rating.domain";
import { Photo } from "../domain/Photo.domain";
import images from "../utils/images";
import { Currency } from "../domain/Currency.domain";
import { Accommodation } from "./Accommodation.domain";
import Location from "../location/Location.domain";
import Coordinate from "../location/Coordinate.domain";

export const accommodationsData: Accommodation[] = [
  new Accommodation({
    id: "h1",
    name: "Lebanon Hotel",
    shortDesc: "Your very own place to relax in Kigali.",
    longDesc:
      "All rooms offer a comfortable work space, complimentary broadband wi-fi access, electronic lap top sized safes, separate shower and toilet, flat screen TV and a wide choice of DSTV and Canal+ channels to choose from.",
    rating: new Rating(2),
    location: new Location({
      country: "Rwanda",
      city: "Akagera",
      coordinate: new Coordinate({ longitude: 30.7044, latitude: -1.87771 })
    }),
    photos: [
      new Photo({
        url: "https://pix10.agoda.net/hotelImages/548/5484886/5484886_18072404370067077199.jpg?s=1024x768",
        label: "Lebanon hotel"
      })
    ],
    startingPrice: new Currency(300),
    features: ["Outdoor swimming pool", "Airport pickup", "Sexy girls", "Breakfast included", "Air conditioning"]
  }),
  new Accommodation({
    id: "h2",
    name: "Onomo Hotel",
    shortDesc: "Your very own place to relax in Kigali.",
    longDesc:
      "All rooms offer a comfortable work space, complimentary broadband wi-fi access, electronic lap top sized safes, separate shower and toilet, flat screen TV and a wide choice of DSTV and Canal+ channels to choose from.",
    rating: new Rating(3),
    location: new Location({
      country: "Rwanda",
      city: "Akagera",
      coordinate: new Coordinate({ longitude: 30.7044, latitude: -1.87771 })
    }),
    photos: [
      new Photo({
        url: "https://q-cf.bstatic.com/images/hotel/max1024x768/173/173239978.jpg",
        label: "Onomo hotel"
      })
    ],
    startingPrice: new Currency(150),
    features: ["Outdoor swimming pool", "Airport pickup", "Sexy girls", "Breakfast included", "Air conditioning"]
  }),
  new Accommodation({
    id: "h3",
    name: "Rubangura",
    shortDesc: "Your very own place to relax in Kigali.",
    longDesc:
      "All rooms offer a comfortable work space, complimentary broadband wi-fi access, electronic lap top sized safes, separate shower and toilet, flat screen TV and a wide choice of DSTV and Canal+ channels to choose from.",
    rating: new Rating(4),
    location: new Location({
      country: "Rwanda",
      city: "Akagera",
      coordinate: new Coordinate({ longitude: 30.7044, latitude: -1.87771 })
    }),
    photos: [
      new Photo({
        url: images.hotel,
        label: "Rubanguray hotel"
      })
    ],
    startingPrice: new Currency(200),
    features: ["Outdoor swimming pool", "Airport pickup", "Sexy girls", "Breakfast included", "Air conditioning"]
  })
];
