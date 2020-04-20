import styled from "styled-components";

import borderRadius from "../../styling/borderRadius.styling";
import colors from "../../styling/color.styling";
import { fontSize } from "../../styling/font.styling";

const Container = styled.div`
  position: fixed;
  border-radius: ${borderRadius.MEDIUM};
  padding: 3rem;
  background-color: ${colors.PRIMARY_VERY_LIGHT};
  margin-right: 5rem;
  width: 15vw;
`;

const ResetFilters = styled.p`
  color: ${colors.PRIMARY};
  font-weight: bold;
  font-size: ${fontSize.LARGE};
  margin-bottom: 3rem;
  cursor: pointer;
`;

export const Styled = { Container, ResetFilters };
