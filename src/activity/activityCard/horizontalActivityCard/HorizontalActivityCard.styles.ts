import styled from "styled-components";

import colors from "../../../styling/color.styling";
import { fontSize } from "../../../styling/font.styling";
import getShadow from "../../../styling/shadows.styling";
import borderRadius from "../../../styling/borderRadius.styling";

type CardProps = {
  height: number;
};

const Card = styled("div")<CardProps>`
  display: flex;
  flex-direction: row;
  box-shadow: ${getShadow("MEDIUM")};
  width: 100%;
  ${({ height }: CardProps) => `height: ${height}px;`}
  border-radius: ${borderRadius.MEDIUM};
  background-color: ${colors.WHITE};
  position: relative;
`;

type CardImageProps = {
  imageSrc: string;
};

const Image = styled("div")<CardImageProps>`
  ${({ imageSrc }: CardImageProps) => `background-image: url(${imageSrc});`}
  background-size: cover;
  background-position: center;
  height: 100%;
  flex-basis: 30%;
  align-items: stretch;
  border-top-left-radius: ${borderRadius.MEDIUM};
  border-bottom-left-radius: ${borderRadius.MEDIUM};
`;

const ActivityDetails = styled.div`
  flex-basis: 40%;
  align-items: stretch;
  padding: 1.5rem;
`;

const ActivityTitle = styled.h2`
  color: ${colors.PRIMARY};
  font-weight: bold;
  font-size: ${fontSize.SMALL};
`;

const ActivityCategory = styled.p`
  color: ${colors.LIGHT_GREY};
  font-size: ${fontSize.XSMALL};
  text-transform: lowercase;
  padding: 2px 0;
`;

const ActivityActions = styled.div`
  flex-basis: 30%;
  align-items: stretch;
  display: flex;
  flex-direction: row;
  transform: skew(-15deg) translateX(1rem);
`;

const Action = styled.div`
  background-color: ${colors.PRIMARY_LIGHT};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  & > * {
    transform: skew(15deg);
  }

  &:not(:last-child) {
    border-right: 1px dashed ${colors.WHITE};
  }

  &:hover {
    background-color: ${colors.PRIMARY_VERY_LIGHT};
    cursor: pointer;
  }
`;

const ActionText = styled.p`
  margin-top: 0.5rem;
  font-size: ${fontSize.XXSMALL};
  color: ${colors.WHITE};
  text-shadow: ${getShadow("MEDIUM")};
`;

export const Styled = {
  Card,
  Number,
  Image,
  ActivityDetails,
  ActivityActions,
  Action,
  ActivityTitle,
  ActivityCategory,
  ActionText
};
