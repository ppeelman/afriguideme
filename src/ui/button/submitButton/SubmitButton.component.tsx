// EXTERNAL
import React, { FunctionComponent } from 'react';

// INTERNAL
import BtnType from '../../../enums/BtnType.enum';
import { Styled } from '../Button.styles';

type ButtonProps = {
  btnType: BtnType;
  children?: any;
  style?: any;
};

const SubmitButton: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { btnType, children, style } = props;
  return (
    <Styled.Button type="submit" btnType={btnType} style={style}>
      {children}
    </Styled.Button>
  );
};

export default SubmitButton;
