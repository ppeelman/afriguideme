// EXTERNAL
import React, { FunctionComponent } from 'react';

// INTERNAL
import BtnType from '../../enums/BtnType.enum';
import { Styled } from './Button.styles';

type ButtonProps = {
  onClick: () => any;
  btnType: BtnType;
  children?: any;
  style?: any;
};

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { onClick, btnType, children, style } = props;
  return (
    <Styled.Button btnType={btnType} style={style} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};

export default Button;
