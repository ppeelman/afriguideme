import React, { FunctionComponent } from "react";
import { TabList, Tabs, TabsOrientation } from "@reach/tabs";
import { useParams, withRouter } from "react-router";

import SplitScreen from "../../ui/layouts/splitScreen/SplitScreen.component";
import BackButton from "../../ui/button/backButton/BackButton.component";
import Title from "../../ui/title/Title.component";
import Text from "../../ui/text/Text.component";
import HeadingType from "../../enums/HeadingType.enum";
import { Styled } from "./ActivityDetail.styles";
import BtnType from "../../enums/BtnType.enum";
import { fontSize } from "../../styling/font.styling";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Activity } from "../../activity/Activity.domain";
import colors from "../../styling/color.styling";
import ImageGallery from "../../ui/imageGallery/ImageGallery.component";
import ButtonWithIcon from "../../ui/button/buttonWithIcon/ButtonWithIcon.component";
import { IconType } from "../../ui/icon/Icon.config";
import { getActivityById } from "../ActivityOverview/mockData";
import DataItem from "../../ui/dataItem/DataItem.component";
import Included from "./Included.page";
import Select from "../../ui/form/select/Select.component";
import { Choice } from "../../planning/Choice.domain";
import { addPlan, removePlan } from "../../planning/Planning.store";
import Plan from "../../planning/Plan.domain";
import { useIsActivitySelected } from "../../activity/Activity.hooks";
import { getPlanIdForActivity } from "../../planning/Planning.store.helper";

type ActivityDetailPageProps = {
  match: any;
  location: any;
  history: any;
};

const ActivityDetailPage: FunctionComponent<ActivityDetailPageProps> = ({ history }: ActivityDetailPageProps) => {
  // Redux
  const planning: Plan[] = useSelector(({ planning }: RootState) => planning);
  const dispatch = useDispatch();

  // Get activity by ID
  const { id }: { id?: string } = useParams();

  // Custom hook
  const isSelected: boolean = useIsActivitySelected(id);

  const activity: Activity | undefined = getActivityById(id);
  if (!activity) return null;

  const {
    id: activityId,
    hero: { url },
    title,
    longDesc,
    type: { mainType, subType },
    features,
    location: { city },
    photos,
    choices
  } = activity;

  const removeActivityHandler = (): void => {
    history.goBack();

    const planId: string | undefined = getPlanIdForActivity(activityId, planning);

    if (planId) {
      dispatch(removePlan(planId));
    }
  };

  const selectActivityHandler = (): void => {
    history.goBack();

    dispatch(
      addPlan(
        new Plan({
          durationInDays: 2,
          activityId
        })
      )
    );
  };

  // @ts-ignore
  // @ts-ignore
  const left = (
    <>
      <Styled.Select>
        <BackButton />
        {isSelected ? (
          <ButtonWithIcon
            btnType={BtnType.PRIMARY_GRADIENT}
            iconType={IconType.DELETE}
            iconColor={colors.WHITE}
            borderColor={colors.BLACK}
            onClick={removeActivityHandler}
          >
            Remove
          </ButtonWithIcon>
        ) : (
          <ButtonWithIcon
            btnType={BtnType.PRIMARY_GRADIENT}
            borderColor={colors.WHITE}
            iconType={IconType.HEART}
            iconColor={colors.WHITE}
            onClick={selectActivityHandler}
          >
            Let's do it!
          </ButtonWithIcon>
        )}
      </Styled.Select>
      <Styled.Content>
        <Styled.OverviewContainer>
          <DataItem label={"Main type"} datum={mainType} />
          <DataItem label={"Sub Type"} datum={subType} />
          <DataItem label={"City"} datum={city} />
          <DataItem label={"Transport"} datum={"Multiple"} />
        </Styled.OverviewContainer>
        <Styled.TitleBlock>
          <Title headingType={HeadingType.H1}>{title}</Title>
          <Text fontSize={fontSize.LARGE}>{longDesc}</Text>
        </Styled.TitleBlock>
        <Styled.Body>
          <Tabs orientation={TabsOrientation.Horizontal} style={{ width: "100%", height: "100%" }}>
            <TabList>
              <Styled.MyTab>Your choices</Styled.MyTab>
              <Styled.MyTab>What's included?</Styled.MyTab>
              <Styled.MyTab>Day Planning</Styled.MyTab>
            </TabList>
            <Styled.MyTabPanels>
              <Styled.MyTabPanel>
                <Styled.FormContainer>
                  {choices.map(({ label, options }: Choice<any>) => (
                    <Select id={label} name={label} label={label} options={options} />
                  ))}
                </Styled.FormContainer>
              </Styled.MyTabPanel>
              <Styled.MyTabPanel>
                <Included features={features} />
              </Styled.MyTabPanel>
              <Styled.MyTabPanel>
                <DataItem
                  label={"Day 1"}
                  datum={
                    "Our Guide will meet you at your Hotel (recommended: Home Saint Jean) at 7:00 am and walk for ten minutes to Karongi Bus park take the bus to Rubengera center (included in the package) and start your adventure on Congo Nile Trail heading to Bumba base camp. This hike will take about 5 hours. On the trail you will be enjoying agricultural activities, beautiful landscapes and scenery around Lake Kivu"
                  }
                />
                <DataItem
                  label={"Day 2"}
                  datum={
                    "Our Guide will meet you at your Hotel (recommended: Home Saint Jean) at 7:00 am and walk for ten minutes to Karongi Bus park take the bus to Rubengera center (included in the package) and start your adventure on Congo Nile Trail heading to Bumba base camp. This hike will take about 5 hours. On the trail you will be enjoying agricultural activities, beautiful landscapes and scenery around Lake Kivu"
                  }
                />
              </Styled.MyTabPanel>
            </Styled.MyTabPanels>
          </Tabs>
        </Styled.Body>
      </Styled.Content>
    </>
  );

  return <SplitScreen backgroundImage={url} contentLeft={left} contentRight={<ImageGallery photos={photos} />} />;
};

export default withRouter(ActivityDetailPage);
