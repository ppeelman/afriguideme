import styled from "styled-components";
import colors from "../../../styling/color.styling";
import { fontSize } from "../../../styling/font.styling";

const TextField = styled.div`
  position: relative;
`;

const Input = styled("input")`
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.WHITE};
  color: ${colors.WHITE};
  font-size: ${fontSize.MEDIUM};
  margin: 2rem 0;
  margin-bottom: calc(2rem + 2px);

  &::-webkit-input-placeholder {
    color: ${colors.WHITE};
    font-size: ${fontSize.SMALL};
  }

  &:focus {
    border-bottom: 3px solid ${colors.PRIMARY_VERY_LIGHT};
    margin-bottom: 2rem;
    outline: none;
  }
`;

type LabelProps = {
  isVisible: boolean;
};

const Label = styled("label")<LabelProps>`
  position: absolute;
  left: 0;
  top: 0;
  margin: 2rem 0;
  color: ${colors.WHITE};
  font-size: ${fontSize.SMALL};
  opacity: 0;
  transition: transform 0.1s linear;

  ${({ isVisible }: LabelProps) =>
    isVisible &&
    `
    opacity: 1;
    transform: translateY(-1.75rem) scale(0.8);
    color: ${colors.PRIMARY_VERY_LIGHT};
  `}
`;

const Error = styled.p`
  position: absolute;
  left: 0;
  bottom: -.5rem;
  color: red;
  font-weight: bold;
  font-size: ${fontSize.SMALL};
`;

export const Styled = { TextField, Input, Label, Error };
