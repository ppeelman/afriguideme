import styled from 'styled-components';
import borderRadius from '../../styling/borderRadius.styling';
import colors from '../../styling/color.styling';
import getShadow from '../../styling/shadows.styling';
import { fontSize } from '../../styling/font.styling';

const TravelSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  border-radius: ${borderRadius.MEDIUM};
  background-color: ${colors.WHITE};
  width: 50vw;
  height: 100px;
  box-shadow: ${getShadow('MEDIUM')};
  overflow: hidden;
  box-shadow: ${getShadow('MEDIUM')};

  & > * {
    flex-basis: 33%;
  }
`;

const TravelSearchButton = styled.button`
  background-image: linear-gradient(to right top, ${colors.PRIMARY_LIGHT}, ${colors.PRIMARY});
  color: ${colors.WHITE};
  align-self: stretch;
  border: none;
  outline: none;
  position: relative;
  left: 1.5rem;
  font-size: ${fontSize.LARGE}

  &:active {
    background-image: none;
    background-color: ${colors.PRIMARY_LIGHT};
  }
`;

export const Styled = {
  TravelSearch,
  TravelSearchButton
};
