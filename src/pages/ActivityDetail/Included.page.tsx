// EXTERNAL
import React, { FunctionComponent } from "react";

import { Styled } from "./Included.styles";
import { fontSize } from "../../styling/font.styling";
import colors from "../../styling/color.styling";
import Text from "../../ui/text/Text.component";
import List from "../../ui/list/List.component";
import { Features } from "../../activity/Activity.domain";

type Props = {
  features: Features;
};

const Included: FunctionComponent<Props> = (props: Props) => {
  const {
    features: { included, notIncluded }
  } = props;

  return (
    <Styled.IncludedAndNotContainer>
      {Boolean(included.length) && (
        <Styled.Included>
          <Text fontSize={fontSize.MEDIUM} bold={true} color={colors.WHITE} uppercase={true}>
            Included
          </Text>
          <List items={included} color={colors.LIGHTEST_GREY} />
        </Styled.Included>
      )}
      {Boolean(notIncluded.length) && (
        <Styled.NotIncluded>
          <Text fontSize={fontSize.MEDIUM} bold={true} color={colors.WHITE} uppercase={true}>
            Not included
          </Text>
          <List items={notIncluded} color={colors.LIGHTEST_GREY} />
        </Styled.NotIncluded>
      )}
    </Styled.IncludedAndNotContainer>
  );
};

export default Included;
