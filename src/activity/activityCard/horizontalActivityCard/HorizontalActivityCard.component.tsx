import React, { FunctionComponent } from "react";

import { Styled } from "./HorizontalActivityCard.styles";
import { Activity } from "../../Activity.domain";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import Icon from "../../../ui/icon/Icon.component";
import { IconSize, IconType } from "../../../ui/icon/Icon.config";
import colors from "../../../styling/color.styling";
import { withRouter } from "react-router";

type Props = {
  match: any;
  location: any;
  history: any;
  order: number;
  activity: Activity;
  height: number;
  onSelectActivity: (activityId: string) => void;
};

const HorizontalActivityCard: FunctionComponent<Props> = (props: Props) => {
  const { activity, height, onSelectActivity, history } = props;
  const { id, title, hero, type, startingPrice } = activity || {};
  const { mainType, subType } = type || {};

  // Redux
  const locale: string = useSelector(({ locale }: RootState) => locale);

  const activityClickHandler = (): void => {
    history.push(`/activity/${id}`);
  };

  return (
    <Styled.Card height={height}>
      <Styled.Image imageSrc={hero.url} />
      <Styled.ActivityDetails>
        <Styled.ActivityTitle>{title}</Styled.ActivityTitle>
        <Styled.ActivityCategory>
          {mainType} > {subType}
        </Styled.ActivityCategory>
      </Styled.ActivityDetails>
      <Styled.ActivityActions>
        <Styled.Action onClick={() => onSelectActivity(activity.id)}>
          <Icon type={IconType.MAP} size={IconSize.SMALL} fillColor={colors.WHITE} />
          <Styled.ActionText>Show on map</Styled.ActionText>
        </Styled.Action>
        <Styled.Action onClick={activityClickHandler}>
          <Icon type={IconType.MORE_DETAILS} size={IconSize.SMALL} fillColor={colors.WHITE} />
          <Styled.ActionText>More details</Styled.ActionText>
        </Styled.Action>
      </Styled.ActivityActions>
    </Styled.Card>
  );
};

export default withRouter(HorizontalActivityCard);
