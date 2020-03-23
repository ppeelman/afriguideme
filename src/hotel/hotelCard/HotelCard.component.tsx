import React, { FunctionComponent } from "react";
import { Styled } from "./HotelCard.styles";
import Hotel from "../../hotel/Hotel.domain";
import Rating from "../../ui/rating/Rating.component";
import Card from "../../ui/card/Card.component";
import { IconSize } from "../../styling/icon.styling";

type HotelCardProps = {
  hotel: Hotel,
  selected: boolean,
  onClick: () => void
};

const HotelCard: FunctionComponent<HotelCardProps> = (
  props: HotelCardProps
) => {
  const { hotel, selected, onClick } = props;
  const { name, rating, photos } = hotel || {};

  return (
    <Card
      onClick={onClick}
      media={photos[0].url}
      disabled={!selected}
      selected={selected}
    >
      <Styled.Body>
        <div>
          <Rating size={IconSize.SMALL}>{rating.stars}</Rating>
          <Styled.HotelName>{name}</Styled.HotelName>
        </div>
        <Styled.PricePerPerson>€ 100 p.p.</Styled.PricePerPerson>
      </Styled.Body>
    </Card>
  );
};

export default HotelCard;
