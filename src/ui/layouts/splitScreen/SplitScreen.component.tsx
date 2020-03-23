// EXTERNAL
import React, { FunctionComponent } from 'react';

import { Styled } from './SplitScreen.styles';

type SplitScreenProps = {
  backgroundImage: string;
  contentLeft: any;
  contentRight: any;
};

const SplitScreen: FunctionComponent<SplitScreenProps> = (props: SplitScreenProps) => {
  const { contentLeft, contentRight } = props;

  return (
    <Styled.SplitScreen>
      <Styled.ContentLeft>{contentLeft}</Styled.ContentLeft>
      <Styled.ContentRight>{contentRight}</Styled.ContentRight>
    </Styled.SplitScreen>
  );
};

export default SplitScreen;
