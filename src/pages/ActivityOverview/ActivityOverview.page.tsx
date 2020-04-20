import React, { FunctionComponent, useEffect, useState } from "react";

import Text from "../../ui/text/Text.component";
import { Styled } from "./ActivityOverview.styles";
import mockData from "./mockData";
import TopGradient from "../../ui/layouts/topGradient/TopGradient.component";
import CardsWithFilter, { Filter, Sorter } from "../../card/cardsWithFilter/CardsWithFilter.component";
import Activity from "../../activity/Activity.domain";
import ActivityCard from "../../activity/activityCard/ActivityCard.component";
import BtnType from "../../enums/BtnType.enum";
import Button from "../../ui/button/Button.component";
import { fontSize } from "../../styling/font.styling";
import colors from "../../styling/color.styling";
import { Store } from "../../store";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { changeStep } from "../../stepper/CurrentStep.store";
import { StepId } from "../../stepper/Stepper.config";

type IconProps = {
  match: any;
  location: any;
  history: any;
  dispatch: any;
};

const ActivityOverviewPage: FunctionComponent<IconProps> = (props: IconProps) => {
  const { history, dispatch } = props;

  const selectedActivities: Activity[] = [];

  useEffect(() => {
    dispatch(changeStep(StepId.ACTIVITIES));
  });

  const isSelected = (activity: Activity): boolean => selectedActivities.includes(activity);

  const activityClickHandler = (activity: Activity): void => {
    history.push("/activity-detail");
  };

  const filters: Filter<Activity>[] = [
    {
      filterLabel: "Category",
      getter: (item: Activity) => item.category
    },
    {
      filterLabel: "Region",
      getter: (item: Activity) => item.region
    }
  ];

  const sorters: Sorter<Activity>[] = [
    {
      sorterLabel: "Price",
      sortFunction: (itemA: Activity, itemB: Activity) => itemA.startingPrice.amount - itemB.startingPrice.amount
    }
  ];

  const renderCard = (item: Activity) => (
    <ActivityCard activity={item} selected={isSelected(item)} onClick={() => activityClickHandler(item)} />
  );

  const numSelected: string = `${selectedActivities.length} selected`;

  return (
    <>
      <TopGradient title={"Activiteiten"}>
        <CardsWithFilter<Activity>
          itemIdAccessor={(activity: Activity) => activity.id}
          items={mockData}
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
            <Button btnType={BtnType.PRIMARY} onClick={() => {}}>
              Continue
            </Button>
          </Styled.Content>
        </Styled.BottomBar>
      )}
    </>
  );
};

const mapStateToProps = (store: Store) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ActivityOverviewPage));
