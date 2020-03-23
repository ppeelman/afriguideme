// EXTERNAL
import React, { FunctionComponent } from "react";
import { withRouter } from "react-router";
import { FormattedMessage } from "react-intl";
//
// INTERNAL
// Components
import TravelSearch from "../../ui/travelSearch/TravelSearch.component";
import Title from "../../ui/title/Title.component";
//
// Enums
import HeadingType from "../../enums/HeadingType.enum";
//
// Styles
import { Styled } from "./TravelSearch.styles";

type TravelSearchPageProps = {
  match: any,
  location: any,
  history: any
};

const TravelSearchPage: FunctionComponent<TravelSearchPageProps> = (
  props: TravelSearchPageProps
) => {
  const { history } = props;

  const submitHandler = () => {
    history.push("/first-night");
  };

  return (
    <Styled.FullScreen>
      <Styled.Hero>
        <Styled.Title>
          <Title headingType={HeadingType.HERO}>
            <FormattedMessage id="travelSearch.title" />
          </Title>
          <Styled.SubTitle>
            <FormattedMessage id="travelSearch.subTitle" />
          </Styled.SubTitle>
        </Styled.Title>
        <Styled.Search>
          <TravelSearch onSubmit={submitHandler} />
        </Styled.Search>
      </Styled.Hero>
    </Styled.FullScreen>
  );
};

export default withRouter(TravelSearchPage);
