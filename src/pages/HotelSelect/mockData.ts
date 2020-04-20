import Hotel from "../../hotel/Hotel.domain";
import Rating from "../../rating/Rating.domain";
import { Photo } from "../../domain/Photo.domain";
import images from "../../utils/images";
import { Currency } from "../../domain/Currency.domain";

export const text =
  "Jullie starten jullie avontuur in Kigali, de bruisende hoofdstad van het land. Wij stellen drie hotels voor uit eenlopende prijsklasses. Het geselecteerde hotel zal jullie uitvalsbasis zijn gedurende jullie verblijf in Kigali.";

export const hotels: Hotel[] = [
  Hotel.build({
    name: "Rubangura",
    shortDesc: "Your very own place to relax in Kigali.",
    longDesc:
      "All rooms offer a comfortable work space, complimentary broadband wi-fi access, electronic lap top sized safes, separate shower and toilet, flat screen TV and a wide choice of DSTV and Canal+ channels to choose from.",
    rating: new Rating(4),
    photos: [
      new Photo({
        url: images.hotel,
        label: "Rubanguray hotel"
      })
    ],
    startingPrice: new Currency(200)
  }),
  Hotel.build({
    name: "Onomo Hotel",
    shortDesc: "Your very own place to relax in Kigali.",
    longDesc:
      "All rooms offer a comfortable work space, complimentary broadband wi-fi access, electronic lap top sized safes, separate shower and toilet, flat screen TV and a wide choice of DSTV and Canal+ channels to choose from.",
    rating: new Rating(3),
    photos: [
      new Photo({
        url: "https://q-cf.bstatic.com/images/hotel/max1024x768/173/173239978.jpg",
        label: "Onomo hotel"
      })
    ],
    startingPrice: new Currency(150)
  }),
  Hotel.build({
    name: "Lebanon Hotel",
    shortDesc: "Your very own place to relax in Kigali.",
    longDesc:
      "All rooms offer a comfortable work space, complimentary broadband wi-fi access, electronic lap top sized safes, separate shower and toilet, flat screen TV and a wide choice of DSTV and Canal+ channels to choose from.",
    rating: new Rating(2),
    photos: [
      new Photo({
        url: "https://pix10.agoda.net/hotelImages/548/5484886/5484886_18072404370067077199.jpg?s=1024x768",
        label: "Lebanon hotel"
      })
    ],
    startingPrice: new Currency(300)
  })
];
