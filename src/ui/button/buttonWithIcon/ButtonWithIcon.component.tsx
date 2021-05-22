// EXTERNAL
import React, { FunctionComponent } from "react";

import BtnType from "../../../enums/BtnType.enum";
import Button from "../Button.component";
import Icon from "../../icon/Icon.component";
import { IconSize, IconType } from "../../icon/Icon.config";
import { Styled } from "./ButtonWithIcon.styles";

type ButtonWithIconProps = {
  btnType: BtnType;
  btnColor?: string;
  iconType: IconType;
  iconColor?: string;
  borderColor?: string;
  onClick: () => void;
  children: any;
};

const ButtonWithIcon: FunctionComponent<ButtonWithIconProps> = (props: ButtonWithIconProps) => {
  const { btnType, iconType, iconColor, onClick, children, borderColor } = props;

  return (
    <Button btnType={btnType} onClick={onClick} borderColor={borderColor}>
      <Icon type={iconType} size={IconSize.SMALL} fillColor={iconColor} />
      <Styled.Text>{children}</Styled.Text>
    </Button>
  );
};

export default ButtonWithIcon;
