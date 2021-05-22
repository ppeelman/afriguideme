import React, { FunctionComponent } from "react";

import Icon from "../ui/icon/Icon.component";
import { Styled } from "./Rating.styles";
import { IconType, IconSize } from "../ui/icon/Icon.config";
import colors from "../styling/color.styling";

type RatingProps = {
  children: number;
  size: IconSize;
};

const Rating: FunctionComponent<RatingProps> = (props: RatingProps) => {
  const { children, size } = props;

  const stars = Array(children)
    .fill(undefined)
    .map((_, idx: number) => <Icon key={idx} type={IconType.STAR} size={size} fillColor={colors.GOLD} />);

  return <Styled.Rating size={size}>{stars}</Styled.Rating>;
};

export default Rating;
