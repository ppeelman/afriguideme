import React, { FunctionComponent } from "react";
import { useParams, withRouter } from "react-router";

import SplitScreen from "../../ui/layouts/splitScreen/SplitScreen.component";
import Rating from "../../rating/Rating.component";
import BackButton from "../../ui/button/backButton/BackButton.component";
import Title from "../../ui/title/Title.component";
import Text from "../../ui/text/Text.component";
import List from "../../ui/list/List.component";
import HeadingType from "../../enums/HeadingType.enum";
import { IconSize, IconType } from "../../ui/icon/Icon.config";
import { Styled } from "./HotelDetail.styles";
import BtnType from "../../enums/BtnType.enum";
import { fontSize } from "../../styling/font.styling";
import { Store } from "../../store";
import { connect } from "react-redux";
import colors from "../../styling/color.styling";
import Hotel from "../../accommodation/Hotel.domain";
import { getHotelById } from "../FirstNight/mockData";
import ButtonWithIcon from "../../ui/button/buttonWithIcon/ButtonWithIcon.component";

type HotelDetailPageProps = {
  match: any;
  location: any;
  history: any;
  dispatch: any;
};

const HotelDetailPage: FunctionComponent<HotelDetailPageProps> = (props: HotelDetailPageProps) => {
  const { history, dispatch } = props;

  // Get hotel by ID
  const { id } = useParams();
  const hotel: Hotel | undefined = getHotelById(id);
  if (!hotel) return null;

  const {
    rating: { stars },
    name,
    longDesc,
    features,
    photos
  } = hotel;

  const goToActivityOverview = () => {
    history.push("/activity-overview");
  };

  const hotelDetails = (
    <>
      <Styled.Select>
        <BackButton />
        <ButtonWithIcon
          btnType={BtnType.PRIMARY_GRADIENT}
          iconType={IconType.HEART}
          iconColor={colors.WHITE}
          borderColor={colors.WHITE}
          onClick={goToActivityOverview}
        >
          Let's do it!
        </ButtonWithIcon>
      </Styled.Select>
      <Styled.Content>
        <Styled.TitleBlock>
          <Rating size={IconSize.MEDIUM}>{stars}</Rating>
          <Title headingType={HeadingType.H1}>{name}</Title>
          <Text fontSize={fontSize.LARGE}>{longDesc}</Text>
        </Styled.TitleBlock>
        <Styled.Details>
          <List items={features} color={colors.LIGHTEST_GREY} />
        </Styled.Details>
      </Styled.Content>
    </>
  );

  return <SplitScreen backgroundImage={photos[0].url} contentLeft={hotelDetails} />;
};

const mapStateToProps = (store: Store) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HotelDetailPage));
