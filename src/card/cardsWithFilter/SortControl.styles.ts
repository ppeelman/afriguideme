import styled from "styled-components";
import colors from "../../styling/color.styling";
import { fontSize } from "../../styling/font.styling";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0rem;
`;

const NumberOfResults = styled.p`
  color: ${colors.WHITE};
  font-size: ${fontSize.LARGE}
`;

const SortLabel = styled.span`
  color: ${colors.WHITE};
  font-size: ${fontSize.LARGE};
  margin-right: 2rem;
`;

export const Styled = { Container, NumberOfResults, SortLabel };
