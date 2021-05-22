import React, { FunctionComponent, useEffect } from "react";
import { withRouter } from "react-router";

import HotelCard from "../../accommodation/accommodationCard/HotelCard.component";
import { Styled } from "./FirstNight.styles";
import TopGradient from "../../ui/layouts/topGradient/TopGradient.component";
import { hotels, text } from "./mockData";
import { changeStep } from "../../stepper/CurrentStep.store";
import { StepId } from "../../stepper/Stepper.config";
import { Store } from "../../store";
import { connect } from "react-redux";
import Hotel from "../../accommodation/Hotel.domain";

type Props = {
  match: any;
  location: any;
  history: any;
  dispatch: any;
};

const FirstNightPage: FunctionComponent<Props> = (props: Props) => {
  const { history, dispatch } = props;

  useEffect(() => {
    dispatch(changeStep(StepId.FIRST_NIGHT));
  });

  const goToHotelDetail = (id: string) => {
    history.push(`/hotel/${id}`);
  };

  return (
    <TopGradient subTitle={"Kigali"} title={"Eerste nacht"} text={text}>
      <Styled.Cards>
        {hotels.map((hotel: Hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onClick={() => goToHotelDetail(hotel.id)} selected={false} />
        ))}
      </Styled.Cards>
    </TopGradient>
  );
};

const mapStateToProps = (store: Store) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FirstNightPage));
