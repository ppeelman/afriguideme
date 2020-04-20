import styled from "styled-components";
import colors from "../../styling/color.styling";
import { fontSize } from "../../styling/font.styling";

type TextProps = {
  fontSize?: string;
  bold?: boolean;
  color?: string;
  uppercase?: boolean;
};

const Text = styled.p`
  ${({ color }: TextProps) => `color: ${color || colors.LIGHTEST_GREY}`};
  ${({ fontSize: size }: TextProps) => `font-size: ${size || fontSize.MEDIUM}`};
  ${({ uppercase }: TextProps) => uppercase && `text-transform: uppercase`};
  ${({ bold }: TextProps) => bold && `font-weight: bold`};
`;

export const Styled = {
  Text
};
