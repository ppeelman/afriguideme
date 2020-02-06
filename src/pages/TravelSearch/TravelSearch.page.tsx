// EXTERNAL
import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router';
//
// INTERNAL
// Components
import TravelSearch from '../../components/travelSearch/TravelSearch.component';
import Title from '../../components/title/Title.component';
//
// Enums
import HeadingType from '../../enums/HeadingType.enum';
//
// Styles
import { Styled } from './TravelSearch.styles';

type TravelSearchPageProps = {
  match: any;
  location: any;
  history: any;
};

const TravelSearchPage: FunctionComponent<TravelSearchPageProps> = (
  props: TravelSearchPageProps
) => {
  const { history } = props;

  const submitHandler = () => {
    history.push('/first-night');
  };

  return (
    <Styled.FullScreen>
      <Styled.Hero>
        <Styled.Title>
          <Title headingType={HeadingType.HERO}>Rwanda</Title>
          <Styled.SubTitle>Land of a thousand hills</Styled.SubTitle>
        </Styled.Title>
        <Styled.Search>
          <TravelSearch onSubmit={submitHandler} />
        </Styled.Search>
      </Styled.Hero>
    </Styled.FullScreen>
  );
};

export default withRouter(TravelSearchPage);
