import React, { FunctionComponent } from "react";
import { Styled } from "./HotelCard.styles";
import Hotel from "../../hotel/Hotel.domain";
import Rating from "../../rating/Rating.component";
import Card from "../../card/Card.component";
import { IconSize } from "../../styling/icon.styling";
import { Store } from "../../store";
import { connect } from "react-redux";

type HotelCardProps = {
  hotel: Hotel;
  selected: boolean;
  onClick: () => void;
  locale: string;
  dispatch: any;
};

const HotelCard: FunctionComponent<HotelCardProps> = (props: HotelCardProps) => {
  const { hotel, selected, onClick, locale } = props;
  const { name, rating, photos, startingPrice } = hotel || {};

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

const mapStateToProps = (store: Store) => ({
  locale: store.locale
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelCard);
