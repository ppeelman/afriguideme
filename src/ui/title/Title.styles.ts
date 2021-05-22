import styled from 'styled-components';
import { fontSize } from '../../styling/font.styling';
import colors from '../../styling/color.styling';

const common = `
  font-family: 'Pacifico', serif;
  font-weight: 300;
  color: ${colors.WHITE};
`;

const HERO = styled.h1`
  margin: -1rem 0;
  font-size: ${fontSize.HERO};
  ${common}
`;

const H1 = styled.h1`
  margin: 0;
  font-size: ${fontSize.H1};
  text-shadow: 1px 1px 1px ${colors.BLACK};
  ${common}
`;

const H2 = styled.h2`
  font-size: ${fontSize.H2};
  ${common}
  text-transform: uppercase;
  font-family: 'nunito';
`;

export const Styled = {
  HERO,
  H1,
  H2
};
