// EXTERNAL
import React, { FunctionComponent } from 'react';

// INTERNAL
import { Styled } from './InlineButton.styles';

type InlineButtonProps = {
  onClick: () => any;
  color: string;
  children?: any;
  style?: any;
};

const InlineButton: FunctionComponent<InlineButtonProps> = (props: InlineButtonProps) => {
  const { onClick, color, children, style } = props;
  return (
    <Styled.Button color={color} style={style} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};

export default InlineButton;
