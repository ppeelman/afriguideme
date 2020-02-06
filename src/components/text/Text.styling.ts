import styled from 'styled-components';
import colors from '../../styling/colors.styling';

type TextProps = {
  fontSize: string;
}

const Text = styled.p`
  color: ${colors.LIGHTEST_GREY};
  ${({ fontSize }: TextProps) =>
    `font-size: ${fontSize}`};
`;

export const Styled = {
  Text
};
