import ActivityCategory from "../../activity/Activity.enum";
import { Photo } from "../../domain/Photo.domain";
import ActivitySummary from "../../activity/Activity.domain";
import { Currency } from "../../domain/Currency.domain";

export default [
  ActivitySummary.build({
    id: "a1",
    title: "Akagera National Park",
    shortDesc: "A national park with zebras, giraffes, elephants, lions...",
    longDesc:
      "Akagera National Park lies in eastern Rwanda, hugging the border with Tanzania. It's characterized by woodland, swamps, low mountains and savannah. The varied terrain shelters wildlife including zebras, giraffes, elephants, lions and hundreds of bird species, such as the rare shoebill stork. In the southern part of the park, vast Lake Ihema is home to hippos and crocodiles.",
    recommended: true,
    region: "Rwanda",
    category: ActivityCategory.NATURE,
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
        url: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg",
        previewUrl: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg"
      }),
      new Photo({
        url: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg",
        previewUrl: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg"
      })
    ],
    startingPrice: new Currency(500, "EUR")
  }),
  ActivitySummary.build({
    id: "a2",
    title: "Lake Kivu",
    shortDesc: "Eiland hopping with stunning views",
    longDesc: "Eiland hopping with stunning views",
    recommended: true,
    region: "Rwanda",
    category: ActivityCategory.HIKING,
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
    startingPrice: new Currency(150, "EUR")
  }),
  ActivitySummary.build({
    id: "a3",
    title: "Congo Nile Trail",
    shortDesc: "Get ready for an epic hike",
    longDesc: "Get ready for an epic hike",
    recommended: false,
    region: "Rwanda",
    category: ActivityCategory.HIKING,
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
        url: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg",
        previewUrl: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg"
      }),
      new Photo({
        url: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg",
        previewUrl: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg"
      })
    ],
    startingPrice: new Currency(200, "EUR")
  }),
  ActivitySummary.build({
    id: "a4",
    title: "Visit to Kigali",
    shortDesc: "Visiting the capital of Rwanda",
    longDesc: "Visiting the capital of Rwanda",
    recommended: false,
    region: "Rwanda",
    category: ActivityCategory.CITY,
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
    startingPrice: new Currency(300, "EUR")
  }),
  ActivitySummary.build({
    id: "a5",
    title: "Lake Kivu",
    shortDesc: "Eiland hopping with stunning views",
    longDesc: "Eiland hopping with stunning views",
    recommended: true,
    region: "Rwanda",
    category: ActivityCategory.HIKING,
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
    startingPrice: new Currency(150, "EUR")
  }),
  ActivitySummary.build({
    id: "a6",
    title: "Congo Nile Trail",
    shortDesc: "Get ready for an epic hike",
    longDesc: "Get ready for an epic hike",
    recommended: false,
    region: "Rwanda",
    category: ActivityCategory.HIKING,
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
        url: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg",
        previewUrl: "https://www.sundowner.nl/wp-content/uploads/Lake-Kivu-14-1024x482.jpg"
      }),
      new Photo({
        url: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg",
        previewUrl: "https://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/7y/6m/p07y6m73.jpg"
      })
    ],
    startingPrice: new Currency(200, "EUR")
  }),
  ActivitySummary.build({
    id: "a7",
    title: "Visit to Kigali",
    shortDesc: "Visiting the capital of Rwanda",
    longDesc: "Visiting the capital of Rwanda",
    recommended: false,
    region: "Rwanda",
    category: ActivityCategory.CITY,
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
    startingPrice: new Currency(300, "EUR")
  })
];
