// EXTERNAL
import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router';
//
// INTERNAL
// Components
import HotelCard from '../../components/hotelCard/HotelCard.component';
//
// Domains
import Hotel from '../../domain/Hotel.domain';
//
// Enums
//
//
// Styles
import { Styled } from './HotelSelect.styles';

import images from '../../utils/images';
import TopGradient from '../../components/layouts/topGradient/TopGradient.component';

type HotelSelectPageProps = {
  match: any;
  location: any;
  history: any;
};

const HotelSelectPage: FunctionComponent<HotelSelectPageProps> = (props: HotelSelectPageProps) => {
  const { history } = props;

  const StepperData = [
    {
      stepName: 'Eerste nacht',
      isCompleted: true,
      isCurrent: false
    },
    {
      stepName: 'Activiteiten',
      isCompleted: false,
      isCurrent: true
    },
    {
      stepName: 'Overnachtingen',
      isCompleted: false,
      isCurrent: false
    },
    {
      stepName: 'Uw gegevens',
      isCompleted: false,
      isCurrent: false
    },
    {
      stepName: 'Overzicht',
      isCompleted: false,
      isCurrent: false
    }
  ];

  const hotel = new Hotel({
    name: 'Rubangura',
    rating: 3,
    photos: {
      hero_small: images.hotel,
      hero_large: images.hotel
    }
  });

  const text =
    'Jullie starten jullie avontuur in Kigali, de bruisende hoofdstad van het land. Wij stellen drie hotels voor uit eenlopende prijsklasses. Het geselecteerde hotel zal jullie uitvalsbasis zijn gedurende jullie verblijf in Kigali.';

  const clickHandler = () => {
    history.push('/hotel-detail');
  };

  return (
    <TopGradient stepperData={StepperData} subTitle={'Kigali'} title={'Eerste nacht'} text={text}>
      <Styled.Cards>
        <HotelCard hotel={hotel} onClick={clickHandler} selected={false} />
        <HotelCard hotel={hotel} onClick={clickHandler} selected={false} />
        <HotelCard hotel={hotel} onClick={clickHandler} selected={true} />
      </Styled.Cards>
    </TopGradient>
  );
};

export default withRouter(HotelSelectPage);
