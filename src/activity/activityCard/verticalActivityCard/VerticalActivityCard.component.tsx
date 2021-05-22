import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import { Styled } from "./VerticalActivityCard.styles";
import Card from "../../../card/Card.component";
import { Activity } from "../../Activity.domain";
import { RootState } from "../../../store";

type Props = {
  activity: Activity;
  selected: boolean;
  onClick: () => void;
};

const VerticalActivityCard: FunctionComponent<Props> = (props: Props) => {
  const { activity, selected, onClick } = props;
  const { title, hero, shortDesc, startingPrice, recommended } = activity || {};

  // Redux
  const locale: string = useSelector(({ locale }: RootState) => locale);

  return (
    <Card onClick={onClick} media={hero.url} disabled={!selected} selected={selected} recommended={recommended}>
      <Styled.Body>
        <div>
          <Styled.ActivityTitle>{title}</Styled.ActivityTitle>
          <Styled.ActivityDescription>{shortDesc}</Styled.ActivityDescription>
        </div>
        <Styled.PricePerPerson>vanaf {startingPrice.format(locale)} p.p.</Styled.PricePerPerson>
      </Styled.Body>
    </Card>
  );
};

export default VerticalActivityCard;
