import React, { FunctionComponent } from "react";

import { Styled } from "./ActivityCard.styles";
import Card from "../../card/Card.component";
import Activity from "../Activity.domain";
import { Store } from "../../store";
import { connect } from "react-redux";

type ActivityCardProps = {
  activity: Activity;
  selected: boolean;
  onClick: () => void;
  locale: string; // from Redux
};

const ActivityCard: FunctionComponent<ActivityCardProps> = (props: ActivityCardProps) => {
  const { activity, selected, onClick, locale } = props;
  const { title, hero, shortDesc, startingPrice, recommended } = activity || {};

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

const mapStateToProps = (store: Store) => ({
  locale: store.locale
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCard);
