// EXTERNAL
import React, { FunctionComponent, useState } from "react";
//
// INTERNAL
import { Styled } from "./ActivityOrder.styling";
import HeadingType from "../../enums/HeadingType.enum";
import Title from "../../ui/title/Title.component";
import { addDaysToDate, formatDate } from "../../utils/date.util";
import ActivityMap from "../../map/activityMap/ActivityMap.component";
import ActivityDragAndDrop from "../../activity/activityDragAndDrop/ActivityDragAndDrop.component";
import { Store } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import BackButton from "../../ui/button/backButton/BackButton.component";
import Button from "../../ui/button/Button.component";
import BtnType from "../../enums/BtnType.enum";
import { Activity } from "../../activity/Activity.domain";
import { useSelectedActivities } from "../../activity/Activity.hooks";

type ActivityOrderPageProps = {
  match: any;
  location: any;
  history: any;
};

const SINGLE_DAY_HEIGHT = 80; // in px

const ActivityOrderPage: FunctionComponent<ActivityOrderPageProps> = (props: ActivityOrderPageProps) => {
  // Redux
  const locale = useSelector(({ locale }: Store) => locale);
  const dispatch = useDispatch();

  // Custom hook
  const selectedActivities: Activity[] = useSelectedActivities();

  // State
  const [activityInFocus, focusActivity] = useState<string | null>(null);

  const left = (
    <>
      <Styled.Title>
        <BackButton />
      </Styled.Title>
      <ActivityMap activities={selectedActivities} selectedActivity={activityInFocus} />
    </>
  );

  const right = (
    <>
      <Title headingType={HeadingType.H1}>Day planning</Title>
      <Styled.ActivitiesContainer>
        <Styled.Calendar>
          {selectedActivities.map((_, index: number) => (
            <Styled.SingleDay key={index} height={SINGLE_DAY_HEIGHT}>
              <Styled.DayIndexText>Day {index + 1}</Styled.DayIndexText>
              <Styled.DateText>{formatDate(addDaysToDate(new Date(), index), locale)}</Styled.DateText>
            </Styled.SingleDay>
          ))}
        </Styled.Calendar>
        <ActivityDragAndDrop
          singleDayHeight={SINGLE_DAY_HEIGHT}
          activities={selectedActivities}
          onSelectActivity={focusActivity}
        />
      </Styled.ActivitiesContainer>
      <Styled.ContinueButton>
        <Button onClick={() => {}} btnType={BtnType.SECONDARY}>
          Next
        </Button>
      </Styled.ContinueButton>
    </>
  );

  return (
    <Styled.Container>
      <Styled.Left>{left}</Styled.Left>
      <Styled.SplitScreen />
      <Styled.Right>{right}</Styled.Right>
    </Styled.Container>
  );
};

export default withRouter(ActivityOrderPage);
