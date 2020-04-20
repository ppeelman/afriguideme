import styled from "styled-components";
import colors from "../../../styling/color.styling";
import { fontSize } from "../../../styling/font.styling";

const TextField = styled.div`
  position: relative;
`;

const TextArea = styled("textarea")`
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: transparent;
  border: none;
  border: 1px solid ${colors.WHITE};
  border-radius: 1rem;
  color: ${colors.WHITE};
  font-size: ${fontSize.MEDIUM};
  margin: calc(2rem + 2px) 2px;

  &::-webkit-input-placeholder {
    color: ${colors.WHITE};
    font-size: ${fontSize.SMALL};
  }

  &:focus {
    border: 3px solid ${colors.PRIMARY_VERY_LIGHT};
    margin: 2rem 0;
    outline: none;
    padding:
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
  transition: transform 0.2s linear;

  ${({ isVisible }: LabelProps) =>
  isVisible &&
  `
    opacity: 1;
    transform: translateY(-2rem) scale(0.8);
    color: ${colors.PRIMARY_VERY_LIGHT};
  `}
`;

export const Styled = { TextField, TextArea, Label };
