// EXTERNAL
import React, { FunctionComponent } from "react";

// INTERNAL
import { icons, IconSize, IconType } from "./Icon.config";
import colors from "../../styling/color.styling";

type IconProps = {
  type: IconType;
  size: IconSize;
  fillColor?: string;
};

const Icon: FunctionComponent<IconProps> = (props: IconProps) => {
  const { type, size, fillColor } = props as IconProps;

  return (
    <svg style={{ fill: fillColor || colors.BLACK, height: size, width: size }} aria-hidden="true" focusable={false}>
      <use href={icons[type]} />;
    </svg>
  );
};

export default Icon;
