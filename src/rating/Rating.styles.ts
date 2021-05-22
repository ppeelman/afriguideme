import styled from "styled-components";
import { IconSize } from "../ui/icon/Icon.config";

type RatingProps = {
  size: IconSize
};

const getRightMargin = (size: IconSize) => {
  switch (size) {
    case IconSize.SMALL:
      return 3;
    case IconSize.MEDIUM:
      return 10;
  }
};

const Rating =
  styled("div") <
  RatingProps >
  `
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    ${({ size }: RatingProps) => `margin-right: ${getRightMargin(size)}px;`}
  }
`;

export const Styled = {
  Rating
};
