import React, { FunctionComponent, useEffect } from "react";

import Text from "../../ui/text/Text.component";
import { Styled } from "./ActivityOverview.styles";
import { activities } from "./mockData";
import TopGradient from "../../ui/layouts/topGradient/TopGradient.component";
import CardsWithFilter from "../../card/cardsWithFilter/CardsWithFilter.component";
import { Activity } from "../../activity/Activity.domain";
import ActivitySummaryCard from "../../activity/activityCard/verticalActivityCard/VerticalActivityCard.component";
import BtnType from "../../enums/BtnType.enum";
import Button from "../../ui/button/Button.component";
import { fontSize } from "../../styling/font.styling";
import colors from "../../styling/color.styling";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { changeStep } from "../../stepper/CurrentStep.store";
import { StepId } from "../../stepper/Stepper.config";
import { setActivities } from "../../activity/Activity.store";
import { useSelectedActivities } from "../../activity/Activity.hooks";
import { filters, isSelected, sorters } from "./ActivityOverview.helper.page";

type IconProps = {
  match: any;
  location: any;
  history: any;
};

const ActivityOverviewPage: FunctionComponent<IconProps> = (props: IconProps) => {
  const { history } = props;

  // Hooks
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeStep(StepId.ACTIVITIES));
    dispatch(setActivities(activities));
  }, []);

  const selectedActivities: Activity[] = useSelectedActivities();

  // Functions
  const activityClickHandler = (activity: Activity): void => {
    history.push(`/activity/${activity.id}`);
  };

  const continueClickHandler = () => {
    history.push("/activity-order");
  };

  const renderCard = (item: Activity) => (
    <ActivitySummaryCard
      activity={item}
      selected={isSelected(selectedActivities, item)}
      onClick={() => activityClickHandler(item)}
    />
  );

  const numSelected: string = `${selectedActivities.length} selected`;

  return (
    <>
      <TopGradient title={"Activiteiten"}>
        <CardsWithFilter<Activity>
          itemIdAccessor={(activity: Activity) => activity.id}
          items={activities}
          filters={filters}
          sorters={sorters}
          renderItemAsCard={renderCard}
        />
      </TopGradient>
      {Boolean(selectedActivities.length) && (
        <Styled.BottomBar>
          <Styled.Content>
            <Text fontSize={fontSize.LARGE} color={colors.BLACK}>
              {numSelected}
            </Text>
            <Button btnType={BtnType.PRIMARY} onClick={continueClickHandler}>
              Continue
            </Button>
          </Styled.Content>
        </Styled.BottomBar>
      )}
    </>
  );
};

export default withRouter(ActivityOverviewPage);
