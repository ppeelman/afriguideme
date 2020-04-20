// EXTERNAL
import React, { FunctionComponent } from "react";

import { Styled } from "./Text.styling";

type TextProps = {
  children: string;
  fontSize?: string;
  bold?: boolean;
  color?: string;
  uppercase?: boolean;
};

const Text: FunctionComponent<TextProps> = (props: TextProps) => {
  const { children, fontSize, bold, color, uppercase } = props;

  return (
    <Styled.Text fontSize={fontSize} color={color} uppercase={uppercase} bold={bold}>
      {children}
    </Styled.Text>
  );
};

export default Text;
