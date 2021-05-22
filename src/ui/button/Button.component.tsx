// EXTERNAL
import React, { FunctionComponent } from 'react';

// INTERNAL
import BtnType from '../../enums/BtnType.enum';
import { Styled } from './Button.styles';

type ButtonProps = {
  onClick: () => any;
  borderColor?: string;
  btnType: BtnType;
  children?: any;
  style?: any;
};

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { onClick, btnType, children, borderColor, style } = props;
  return (
    <Styled.Button btnType={btnType} style={style} onClick={onClick} borderColor={borderColor}>
      {children}
    </Styled.Button>
  );
};

export default Button;
