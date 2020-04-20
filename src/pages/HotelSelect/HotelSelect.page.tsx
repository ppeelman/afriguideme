import React, { FunctionComponent, useEffect } from "react";
import { withRouter } from "react-router";

import HotelCard from "../../hotel/hotelCard/HotelCard.component";
import { Styled } from "./HotelSelect.styles";
import TopGradient from "../../ui/layouts/topGradient/TopGradient.component";
import { hotels, text } from "./mockData";
import { changeStep } from "../../stepper/CurrentStep.store";
import { StepId } from "../../stepper/Stepper.config";
import { Store } from "../../store";
import { connect } from "react-redux";

type HotelSelectPageProps = {
  match: any;
  location: any;
  history: any;
  dispatch: any;
};

const HotelSelectPage: FunctionComponent<HotelSelectPageProps> = (props: HotelSelectPageProps) => {
  const { history, dispatch } = props;

  useEffect(() => {
    dispatch(changeStep(StepId.FIRST_NIGHT));
  });

  const goToHotelDetail = () => {
    history.push("/hotel-detail");
  };

  return (
    <TopGradient subTitle={"Kigali"} title={"Eerste nacht"} text={text}>
      <Styled.Cards>
        <HotelCard hotel={hotels[0]} onClick={goToHotelDetail} selected={false} />
        <HotelCard hotel={hotels[1]} onClick={goToHotelDetail} selected={false} />
        <HotelCard hotel={hotels[2]} onClick={goToHotelDetail} selected={false} />
      </Styled.Cards>
    </TopGradient>
  );
};

const mapStateToProps = (store: Store) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HotelSelectPage));
