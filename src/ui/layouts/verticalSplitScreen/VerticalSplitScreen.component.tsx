// EXTERNAL
import React, { FunctionComponent } from "react";

import { Styled } from "./VerticalSplitScreen.styles";

type VerticalSplitScreenProps = {
  contentLeft: any;
  contentRight: any;
};

const VerticalSplitScreen: FunctionComponent<VerticalSplitScreenProps> = (props: VerticalSplitScreenProps) => {
  const { contentLeft, contentRight } = props;

  return (
    <Styled.SplitScreen>
      <Styled.ContentLeft>{contentLeft}</Styled.ContentLeft>
      <Styled.ContentRight>{contentRight}</Styled.ContentRight>
    </Styled.SplitScreen>
  );
};

export default VerticalSplitScreen;
