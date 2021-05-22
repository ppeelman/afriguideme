// EXTERNAL
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
//
// INTERNAL
import { Styled } from "./AccommodationCard.styles";
import { Accommodation } from "../Accommodation.domain";
import Rating from "../../rating/Rating.component";
import Card from "../../card/Card.component";
import { IconSize } from "../../ui/icon/Icon.config";
import { RootState } from "../../store";

type Props = {
  hotel: Accommodation;
  selected: boolean;
  onClick: () => void;
};

const AccommodationCard: FunctionComponent<Props> = (props: Props) => {
  const { hotel, selected, onClick } = props;
  const { name, rating, photos, startingPrice } = hotel || {};

  // Redux
  const locale: string = useSelector((state: RootState) => state.locale);

  return (
    <Card onClick={onClick} media={photos[0].url} disabled={!selected} selected={selected}>
      <Styled.Body>
        <div>
          <Rating size={IconSize.SMALL}>{rating.stars}</Rating>
          <Styled.HotelName>{name}</Styled.HotelName>
        </div>
        <Styled.PricePerPerson>{startingPrice.format(locale)} p.p.</Styled.PricePerPerson>
      </Styled.Body>
    </Card>
  );
};

export default AccommodationCard;
