import styled from 'styled-components';

import borderRadius from '../../styling/borderRadius.styling';
import colors, { hexToRgba } from '../../styling/color.styling';
import getShadow from '../../styling/shadows.styling';
import { fontSize } from '../../styling/font.styling';

type CardProps = {
  disabled: boolean;
  width: number;
  height: number;
};

type CardImageProps = {
  imageSrc: string;
};



const Card = styled('div')<CardProps>`
  position: relative;
  border-radius: ${borderRadius.MEDIUM};
  ${({ width, height }: CardProps) => `
    width: ${width}px;
    height: ${height}px;
  `}

  background-color: ${colors.WHITE};
  box-shadow: ${getShadow('MEDIUM')};
  overflow: hidden;

  &:hover .media {
    transform: scale(1.2);
  }

  &::after {
    ${({ disabled }: CardProps) =>
      disabled &&
      `
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 100%;
    background-color: ${hexToRgba(colors.LIGHTEST_GREY, 0.6)};
  `}
  }
`;

const CardImageContainer = styled.div`
  height: 66.66%;
  overflow: hidden;
  position: relative;
`;

const Selected = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 5%;
  left: 5%;
  width: 5rem;
  height: 5rem;
  background-color: ${hexToRgba(colors.PRIMARY, 0.66)};
  border-radius: 1000000px;
  border: 1.5px solid ${colors.WHITE};
  color: ${colors.WHITE};
  font-size: ${fontSize.H2};
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled('div')<CardImageProps>`
  ${({ imageSrc }: CardImageProps) => `background-image: url(${imageSrc});`}
  background-size: cover;
  background-position: center;
  height: 100%;
  transition: all 0.5s;
`;

const CardText = styled.div`
  padding: 10px;
  height: 33.34%;
`;

export const Styled = {
  Selected,
  Card,
  CardImageContainer,
  CardImage,
  CardText
};
