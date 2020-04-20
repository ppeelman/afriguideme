import React, { FunctionComponent } from "react";
import { withRouter } from "react-router";

import { hotel, listItems } from "./mockData";
import SplitScreen from "../../ui/layouts/splitScreen/SplitScreen.component";
import Rating from "../../rating/Rating.component";
import BackButton from "../../ui/button/backButton/BackButton.component";
import Title from "../../ui/title/Title.component";
import Text from "../../ui/text/Text.component";
import List from "../../ui/list/List.component";
import Button from "../../ui/button/Button.component";
import HeadingType from "../../enums/HeadingType.enum";
import images from "../../utils/images";
import { IconSize } from "../../styling/icon.styling";
import { Styled } from "./HotelDetail.styles";
import BtnType from "../../enums/BtnType.enum";
import { fontSize } from "../../styling/font.styling";
import { Store } from "../../store";
import { connect } from "react-redux";

type HotelDetailPageProps = {
  match: any;
  location: any;
  history: any;
  dispatch: any;
};

const HotelDetailPage: FunctionComponent<HotelDetailPageProps> = (props: HotelDetailPageProps) => {
  const { history, dispatch } = props;

  const goToActivityOverview = () => {
    history.push("/activity-overview");
  };

  const hotelDetails = (
    <React.Fragment>
      <BackButton />
      <Styled.Content>
        <Styled.TitleBlock>
          <Rating size={IconSize.MEDIUM}>{hotel.rating.stars}</Rating>
          <Title headingType={HeadingType.H1}>{hotel.name}</Title>
          <Text fontSize={fontSize.LARGE}>{hotel.longDesc}</Text>
        </Styled.TitleBlock>
        <Styled.Details>
          <List items={listItems} />
        </Styled.Details>
        <Styled.Select>
          <Button onClick={goToActivityOverview} btnType={BtnType.SECONDARY}>
            Selecteer
          </Button>
        </Styled.Select>
      </Styled.Content>
    </React.Fragment>
  );

  return <SplitScreen backgroundImage={images.hotel2} contentLeft={hotelDetails} contentRight={<div></div>} />;
};

const mapStateToProps = (store: Store) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HotelDetailPage));
