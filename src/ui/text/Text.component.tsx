// EXTERNAL
import React, { FunctionComponent } from 'react';

import { Styled } from './Text.styling';

type TextProps = {
  fontSize: string;
  children: string;
}

const Text: FunctionComponent<TextProps> = (props: TextProps) => {
  const { children, fontSize } = props;

  return <Styled.Text fontSize={fontSize}>{children}</Styled.Text>;
};

export default Text;
