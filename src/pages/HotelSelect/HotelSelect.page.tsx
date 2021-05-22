import React, { FunctionComponent, useEffect } from "react";
import { withRouter } from "react-router";

import HotelCard from "../../accommodation/accommodationCard/HotelCard.component";
import { Styled } from "./HotelSelect.styles";
import TopGradient from "../../ui/layouts/topGradient/TopGradient.component";
import { changeStep } from "../../stepper/CurrentStep.store";
import { StepId } from "../../stepper/Stepper.config";
import { useDispatch } from "react-redux";
import { hotels } from "../FirstNight/mockData";
import Hotel from "../../accommodation/Hotel.domain";
import { Activity } from "../../activity/Activity.domain";
import { useNextActivityWithoutHotel } from "../../accommodation/Hotel.hooks";

type Props = {
  match: any;
  location: any;
  history: any;
};

const HotelSelectPage: FunctionComponent<Props> = ({ history }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeStep(StepId.HOTELS));
  }, []);

  const activity: Activity | undefined = useNextActivityWithoutHotel();

  if(!activity) return null;

  const {
    title
  } = activity;

  return (
    <TopGradient
      subTitle={"Day 1"}
      title={title}
      text={"During your first night at Kigali, you can stay in one of 3 hotels:"}
    >
      <Styled.Cards>
        {hotels.map((hotel: Hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onClick={() => {}} selected={false} />
        ))}
      </Styled.Cards>
    </TopGradient>
  );
};

export default withRouter(HotelSelectPage);
