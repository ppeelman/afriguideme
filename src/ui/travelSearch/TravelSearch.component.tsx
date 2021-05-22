import React, { FunctionComponent } from 'react';
import { Styled } from './TravelSearch.styles';
import TravelSearchInput from './travelSearchInput/TravelSearchInput.component';
import FormInputType from '../../enums/FormInputType.enum';
import { IconType } from '../icon/Icon.config';

type TravelSearchProps = {
  onSubmit: () => any;
};

const TravelSearch: FunctionComponent<TravelSearchProps> = (props: TravelSearchProps) => {
  const { onSubmit } = props;

  return (
    <Styled.TravelSearch>
      <TravelSearchInput
        formInputType={FormInputType.DROP_DOWN}
        label={'Aantal'}
        iconType={IconType.PERSON}
      />
      <TravelSearchInput
        formInputType={FormInputType.SINGLE_DATE_PICKER}
        label={'Vertrekdatum (optioneel)'}
        iconType={IconType.CALENDAR}
      />
      <Styled.TravelSearchButton onClick={onSubmit}>Let's go!</Styled.TravelSearchButton>
    </Styled.TravelSearch>
  );
};

export default TravelSearch;
