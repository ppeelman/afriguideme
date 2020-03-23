import React, { FunctionComponent } from "react";
import IconType from "../../enums/IconType.enum";
import { Styled } from "./Icon.styles";
import icons, { IconSize } from "../../styling/icon.styling";

type IconProps = {
  type: IconType,
  size: IconSize
};

const getImageSrcFor = (iconType: IconType): string => {
  switch (iconType) {
    case IconType.STAR:
      return icons.star;
    case IconType.PERSON:
      return icons.person;
    case IconType.CALENDAR:
      return icons.calendar;
  }
};

const Icon: FunctionComponent<IconProps> = (props: IconProps) => {
  const { type, size } = props;
  return <Styled.Icon size={size} src={getImageSrcFor(type)} />;
};

export default Icon;
