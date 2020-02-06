import styled from 'styled-components';
import { fontSize } from '../../../styling/font.styling';
import colors from '../../../styling/colors.styling';

const TravelSearchInput = styled.div`
  padding: 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TravelSearchInputLabel = styled.label`
  font-size: ${fontSize.SMALL};
  color: ${colors.LIGHT_GREY};
`;

const TravelSearchInputItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: ${fontSize.LARGE};
  color: ${colors.PRIMARY};
  flex: 1;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Styled = {
  TravelSearchInput,
  TravelSearchInputLabel,
  TravelSearchInputItem
};
