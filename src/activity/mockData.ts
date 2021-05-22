import { ActivityMainType, ActivitySubType } from "./Activity.enum";
import { Photo } from "../domain/Photo.domain";
import { Activity } from "./Activity.domain";
import { Currency } from "../domain/Currency.domain";
import Coordinate from "../location/Coordinate.domain";
import ActivityType from "../activity/ActivityType.domain";
import Location from "../location/Location.domain";
import { DurationChoice } from "../domain/Choice.domain";

export const activitiesData: Activity[] = [
  new Activity({
    id: "a1",
    title: "Akagera National Park",
    shortDesc: "A national park with zebras, giraffes, elephants, lions...",
    longDesc:
      "Akagera National Park lies in eastern Rwanda, hugging the border with Tanzania. It's characterized by woodland, swamps, low mountains and savannah. The varied terrain shelters wildlife including zebras, giraffes, elephants, lions and hundreds of bird species, such as the rare shoebill stork. In the southern part of the park, vast Lake Ihema is home to hippos and crocodiles.",
    recommended: true,
    location: new Location({
      country: "Rwanda",
      city: "Akagera",
      coordinate: new Coordinate({ longitude: 30.7044, latitude: -1.87771 })
    }),
    type: new ActivityType({ mainType: ActivityMainType.NATURE, subType: ActivitySubType.SAFARI }),
    hero: new Photo({
      url: "https://safarisrwandasafari.com/wp-content/uploads/2019/08/Webp.net-compress-image-59-750x450.jpg",
      previewUrl: "https://safarisrwandasafari.com/wp-content/uploads/2019/08/Webp.net-compress-image-59-750x450.jpg"
    }),
    photos: [
      new Photo({
        url: "https://safarisrwandasafari.com/wp-content/uploads/2019/08/Webp.net-compress-image-59-750x450.jpg",
        previewUrl: "https://safarisrwandasafari.com/wp-content/uploads/2019/08/Webp.net-compress-image-59-750x450.jpg"
      }),
      new Photo({
        url: "https://www.afriguideme.com/wp-content/uploads/2018/06/Elephant-On-Road-e1545755636703.jpg",
        previewUrl: "https://www.afriguideme.com/wp-content/uploads/2018/06/Elephant-On-Road-e1545755636703.jpg"
      }),
      new Photo({
        url: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_0947.jpg",
        previewUrl: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_0947.jpg"
      }),
      new Photo({
        url: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_0860.jpg",
        previewUrl: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_0860.jpg"
      })
    ],
    startingPrice: new Currency(500, "EUR"),
    features: {
      included: ["Lake Mihindi Boattrip", "Tents, food and drinks", "Safari car with pop-up roof"],
      notIncluded: ["Right to shoot elephants", "Sexy time with the guide"]
    },
    availableChoices: [
      new DurationChoice("numOfDays", "Duration", [
        { id: "day2", label: "2 days", value: 2, default: true },
        { id: "day3", label: "3 days", value: 3 }
      ])
    ]
  }),
  new Activity({
    id: "a2",
    title: "Lake Kivu",
    shortDesc: "Eiland hopping with stunning views",
    longDesc:
      "Island hopping on Lake Kivu by boat. On the way, we pass monkey island (with the famous blue balls monkeys) and Napoleon Island (with an amazing view over Lake Kivu). Enjoy the raw beauty of Rwanda's largest lake.",
    recommended: true,
    location: new Location({
      country: "Rwanda",
      city: "Lake Kivu",
      coordinate: new Coordinate({ longitude: 29.186581, latitude: -2.013719 })
    }),
    type: new ActivityType({ mainType: ActivityMainType.HIKING, subType: ActivitySubType.SAFARI }),
    hero: new Photo({
      url: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg",
      previewUrl: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg"
    }),
    photos: [
      new Photo({
        url: "https://safarisrwandasafari.com/wp-content/uploads/2019/08/Webp.net-compress-image-59-750x450.jpg",
        previewUrl: "https://safarisrwandasafari.com/wp-content/uploads/2019/08/Webp.net-compress-image-59-750x450.jpg"
      }),
      new Photo({
        url: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg",
        previewUrl: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg"
      }),
      new Photo({
        url: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg",
        previewUrl: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg"
      })
    ],
    startingPrice: new Currency(150, "EUR"),
    features: {
      included: ["Boat", "Guide", "Sandwich lunch"],
      notIncluded: ["Swimsuits", "Peddles"]
    },
    availableChoices: [
      new DurationChoice("numOfDays", "Duration", [
        { id: "day2", label: "2 days", value: 2, default: true },
        { id: "day3", label: "3 days", value: 3 }
      ])
    ]
  }),
  new Activity({
    id: "a3",
    title: "Congo Nile Trail",
    shortDesc: "Get ready for an epic hike",
    longDesc:
      "Hike from Gisenyi to Kibuye (or the other way around) via the Congo Nile Trail. On the trail you will be enjoying agricultural activities, beautiful landscapes and scenery around Lake Kivu. Stay 3 nights in guesthouses along the road.",
    recommended: false,
    location: new Location({
      country: "Rwanda",
      city: "Congo City",
      coordinate: new Coordinate({ longitude: 29.487584, latitude: -2.360218 })
    }),
    type: new ActivityType({ mainType: ActivityMainType.HIKING, subType: ActivitySubType.SAFARI }),
    hero: new Photo({
      url: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_20170926_141905273_BURST000_COVER_TOP.jpg",
      previewUrl: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_20170926_141905273_BURST000_COVER_TOP.jpg"
    }),
    photos: [
      new Photo({
        url: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_1298.jpg",
        previewUrl: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_1298.jpg"
      }),
      new Photo({
        url: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_20170925_151714378.jpg",
        previewUrl: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_20170925_151714378.jpg"
      }),
      new Photo({
        url: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_1323.jpg",
        previewUrl: "https://www.afriguideme.com/wp-content/uploads/2019/01/IMG_1323.jpg"
      })
    ],
    startingPrice: new Currency(200, "EUR"),
    features: {
      included: ["English/French Guide", "Accomodation (guesthouses)", "Meals (excl. lunch)", "Bicycle"],
      notIncluded: ["Lunch", "Sunscreen"]
    },
    availableChoices: [
      new DurationChoice("numOfDays", "Duration", [
        { id: "day2", label: "2 days", value: 2, default: true },
        { id: "day3", label: "3 days", value: 3 }
      ])
    ]
  }),
  new Activity({
    id: "a4",
    title: "Visit to Kigali",
    shortDesc: "Visiting the capital of Rwanda",
    longDesc:
      "Start or end your journey in the lively capital of Rwanda. Visit the Genocide Museum in Kigali and the Kimironko market. Walk around in the safest city in Africa.",
    recommended: false,
    location: new Location({
      country: "Rwanda",
      city: "Kigali",
      coordinate: new Coordinate({ longitude: 30.062354, latitude: -1.946582 })
    }),
    type: new ActivityType({ mainType: ActivityMainType.CITY, subType: ActivitySubType.SAFARI }),
    hero: new Photo({
      url: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg",
      previewUrl: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg"
    }),
    photos: [
      new Photo({
        url: "https://safarisrwandasafari.com/wp-content/uploads/2019/08/Webp.net-compress-image-59-750x450.jpg",
        previewUrl: "https://safarisrwandasafari.com/wp-content/uploads/2019/08/Webp.net-compress-image-59-750x450.jpg"
      }),
      new Photo({
        url: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg",
        previewUrl: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg"
      }),
      new Photo({
        url: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg",
        previewUrl: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg"
      })
    ],
    startingPrice: new Currency(300, "EUR"),
    features: {
      included: [],
      notIncluded: ["Guide"]
    },
    availableChoices: [
      new DurationChoice("numOfDays", "Duration", [
        { id: "day2", label: "2 days", value: 2, default: true },
        { id: "day3", label: "3 days", value: 3 }
      ])
    ]
  })
];
