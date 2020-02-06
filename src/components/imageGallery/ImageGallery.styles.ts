import styled from 'styled-components';

type IconProps = {
  size: string;
};

const Icon = styled('img')<IconProps>`
  ${({ size }: IconProps) => `height: ${size}`}
`;

export const Styled = {
  Icon
};
