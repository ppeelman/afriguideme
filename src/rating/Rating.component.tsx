import React, { FunctionComponent } from "react";

import Icon from "../ui/icon/Icon.component";
import { Styled } from "./Rating.styles";
import IconType from "../enums/IconType.enum";
import { IconSize } from "../styling/icon.styling";

type RatingProps = {
  children: number;
  size: IconSize;
};

const Rating: FunctionComponent<RatingProps> = (props: RatingProps) => {
  const { children, size } = props;

  const stars = Array(children)
    .fill(null)
    .map((_, idx: number) => <Icon key={idx} type={IconType.STAR} size={size} />);

  return <Styled.Rating size={size}>{stars}</Styled.Rating>;
};

export default Rating;
