// EXTERNAL
import React, { FunctionComponent } from "react";

import { Styled } from "./DataItem.styles";
import { fontSize } from "../../styling/font.styling";
import colors from "../../styling/color.styling";
import Text from "../text/Text.component";

type Props = {
  label: string;
  datum: any;
  isEditable?: boolean;
};

const DataItem: FunctionComponent<Props> = (props: Props) => {
  const { label, datum, isEditable } = props;

  return (
    <Styled.Item>
      <Text fontSize={fontSize.XSMALL} bold={true} color={colors.PRIMARY_VERY_LIGHT} uppercase={true}>
        {label}
      </Text>
      <Text fontSize={fontSize.LARGE} bold={false} color={colors.WHITE}>
        {datum}
      </Text>
    </Styled.Item>
  );
};

export default DataItem;
