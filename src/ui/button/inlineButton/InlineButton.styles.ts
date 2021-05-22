import styled from "styled-components";
import { fontSize } from "../../../styling/font.styling";

type ButtonProps = {
  color: string;
};

const Button = styled("a")<ButtonProps>`
  cursor: pointer;
  border: none;
  transition: all 0.3s;
  font-size: ${fontSize.XSMALL} !important;
  text-transform: uppercase;

  :hover {
    transform: translateY(-1px);
  }

  ${({ color }: ButtonProps) => `color: ${color}`}
`;

export const Styled = {
  Button
};
