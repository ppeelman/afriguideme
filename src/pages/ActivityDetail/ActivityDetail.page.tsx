import React, { FunctionComponent } from "react";
import { withRouter } from "react-router";

import mockData from "./mockData";
import SplitScreen from "../../ui/layouts/splitScreen/SplitScreen.component";
import BackButton from "../../ui/button/backButton/BackButton.component";
import Title from "../../ui/title/Title.component";
import Text from "../../ui/text/Text.component";
import Button from "../../ui/button/Button.component";
import HeadingType from "../../enums/HeadingType.enum";
import { Styled } from "./ActivityDetail.styles";
import BtnType from "../../enums/BtnType.enum";
import { fontSize } from "../../styling/font.styling";
import { Store } from "../../store";
import { connect } from "react-redux";
import Activity from "../../activity/Activity.domain";
import List from "../../ui/list/List.component";
import { included, notIncluded } from "./mockData";
import colors from "../../styling/color.styling";
import ImageGallery from "../../ui/imageGallery/ImageGallery.component";

type ActivityDetailPageProps = {
  match: any;
  location: any;
  history: any;
  dispatch: any;
};

const ActivityDetailPage: FunctionComponent<ActivityDetailPageProps> = (props: ActivityDetailPageProps) => {
  const { history, dispatch } = props;

  const activity: Activity = mockData;
  const { title, longDesc, hero, photos } = activity;

  const selectHandler = (): void => {
    history.push("/personal-data");
  };

  const left = (
    <React.Fragment>
      <BackButton />
      <Styled.Content>
        <Styled.TitleBlock>
          <Title headingType={HeadingType.H1}>{title}</Title>
          <Text fontSize={fontSize.LARGE}>{longDesc}</Text>
        </Styled.TitleBlock>
        <Styled.Details>
          <Styled.IncludedAndNotContainer>
            <Styled.Included>
              <Text fontSize={fontSize.MEDIUM} bold={true} color={colors.WHITE} uppercase={true}>
                Included
              </Text>
              <List items={included} />
            </Styled.Included>
            <Styled.NotIncluded>
              <Text fontSize={fontSize.MEDIUM} bold={true} color={colors.WHITE} uppercase={true}>
                Not included
              </Text>
              <List items={notIncluded} />
            </Styled.NotIncluded>
          </Styled.IncludedAndNotContainer>
        </Styled.Details>
        <Styled.Select>
          <Button onClick={selectHandler} btnType={BtnType.SECONDARY}>
            Selecteer
          </Button>
        </Styled.Select>
      </Styled.Content>
    </React.Fragment>
  );

  return (
    <SplitScreen
      backgroundImage={hero.url}
      contentLeft={left}
      contentRight={<ImageGallery photos={activity.photos} />}
    />
  );
};

const mapStateToProps = (store: Store) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ActivityDetailPage));
