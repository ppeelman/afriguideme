// EXTERNAL
import React, { FunctionComponent } from "react";
import { withRouter } from "react-router";
//
// INTERNAL
// Components
import HotelCard from "../../hotel/hotelCard/HotelCard.component";
//
// Domains
import Hotel from "../../hotel/Hotel.domain";
//
// Enums
//
//
// Styles
import { Styled } from "./HotelSelect.styles";

import images from "../../utils/images";
import TopGradient from "../../ui/layouts/topGradient/TopGradient.component";
import Rating from "../../domain/Rating.domain";
import { Photo } from "../../domain/Photo.domain";
import { Either, withDefault } from "ts.data.either";

type HotelSelectPageProps = {
  match: any,
  location: any,
  history: any
};

const HotelSelectPage: FunctionComponent<HotelSelectPageProps> = (
  props: HotelSelectPageProps
) => {
  const { history } = props;

  const hotel: Either<Hotel> = Hotel.build({
    name: "Rubangura",
    rating: new Rating(3),
    photos: [
      new Photo({
        url: images.hotel,
        label: "Rubanguray hotel"
      })
    ]
  });

  const hotelResult: Hotel | null = withDefault(hotel, null);

  const text =
    "Jullie starten jullie avontuur in Kigali, de bruisende hoofdstad van het land. Wij stellen drie hotels voor uit eenlopende prijsklasses. Het geselecteerde hotel zal jullie uitvalsbasis zijn gedurende jullie verblijf in Kigali.";

  const clickHandler = () => {
    history.push("/hotel-detail");
  };

  if (!hotelResult) {
    return null;
  }

  return (
    <TopGradient
      subTitle={"Kigali"}
      title={"Eerste nacht"}
      text={text}
    >
      <Styled.Cards>
        <HotelCard
          hotel={hotelResult}
          onClick={clickHandler}
          selected={false}
        />
        <HotelCard
          hotel={hotelResult}
          onClick={clickHandler}
          selected={false}
        />
        <HotelCard hotel={hotelResult} onClick={clickHandler} selected={true} />
      </Styled.Cards>
    </TopGradient>
  );
};

export default withRouter(HotelSelectPage);
