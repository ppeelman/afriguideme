// EXTERNAL
import React, { FunctionComponent } from "react";
import { withRouter } from "react-router";
//
// INTERNAL
// Components
import SplitScreen from "../../components/layouts/splitScreen/SplitScreen.component";
import Rating from "../../components/rating/Rating.component";
import BackButton from "../../components/backButton/BackButton.component";
import Title from "../../components/title/Title.component";
import Text from "../../components/text/Text.component";
import List from "../../components/list/List.component";
import Button from "../../components/button/Button.component";
//
import HeadingType from "../../enums/HeadingType.enum";
import images from "../../utils/images";
import { IconSize } from "../../styling/icon.styling";
import { Styled } from "./HotelDetail.styles";

import BtnType from "../../enums/BtnType.enum";
import { fontSize } from "../../styling/font.styling";

type HotelDetailPageProps = {
  match: any,
  location: any,
  history: any
};

const HotelDetailPage: FunctionComponent<HotelDetailPageProps> = (
  props: HotelDetailPageProps
) => {
  // const { match, location, history } = props;

  const items = [
    "Outdoor swimming pool",
    "Airport pickup",
    "Sexy girls",
    "Breakfast included",
    "Air conditioning"
  ];

  const hotelDetails = (
    <React.Fragment>
      <BackButton />
      <Styled.Content>
        <Styled.TitleBlock>
          <Rating size={IconSize.MEDIUM}>{3}</Rating>
          <Title headingType={HeadingType.H1}>Rubangura</Title>
          <Text fontSize={fontSize.LARGE}>
            Ribangura Luxury apartments is a luxury hotel situated in the city
            centre of Kigali, Rwanda.
          </Text>
        </Styled.TitleBlock>
        <Styled.Details>
          <List items={items} />
        </Styled.Details>
        <Styled.Select>
          <Button onClick={() => {}} btnType={BtnType.SECONDARY}>
            Selecteer
          </Button>
        </Styled.Select>
      </Styled.Content>
    </React.Fragment>
  );

  return (
    <SplitScreen
      backgroundImage={images.hotel2}
      contentLeft={hotelDetails}
      contentRight={<div></div>}
    />
  );
};

export default withRouter(HotelDetailPage);
