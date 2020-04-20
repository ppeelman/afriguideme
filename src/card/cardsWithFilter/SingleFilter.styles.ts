import styled from "styled-components";
import colors from "../../styling/color.styling";
import { fontSize } from "../../styling/font.styling";

const Container = styled.div`
  margin-bottom: 2rem;
`;

const FilterTitle = styled.p`
  color: ${colors.LIGHT_GREY};
  font-size: ${fontSize.SMALL};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${colors.LIGHT_GREY};
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  color: ${colors.BLACK};
  font-size: ${fontSize.SMALL};
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 0.5rem;
`;

export const Styled = { Container, FilterTitle, Label, Input };
