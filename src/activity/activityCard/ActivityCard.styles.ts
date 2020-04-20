import styled from 'styled-components';

import colors from '../../styling/color.styling';
import { fontSize } from '../../styling/font.styling';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ActivityTitle = styled.h2`
  color: ${colors.PRIMARY};
  font-weight: bold;
  font-size: ${fontSize.MEDIUM};
`;

const ActivityDescription = styled.p`
  color: ${colors.LIGHT_GREY};
  font-size: ${fontSize.SMALL};
  padding: 2px 0;
`;

const PricePerPerson = styled.p`
  text-align: right;
  font-size: ${fontSize.MEDIUM};
  color: ${colors.LIGHT_GREY};
`;

export const Styled = {
  Body,
  ActivityTitle,
  ActivityDescription,
  PricePerPerson
};
