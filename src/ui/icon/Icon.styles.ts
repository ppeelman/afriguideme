import styled from 'styled-components';

type IconProps = {
  size: string;
  src: string;
};

const Icon = styled('img')<IconProps>`
  ${({ size }: IconProps) => `height: ${size}`};
  filter: drop-shadow(1px 1px .5px #000000);
`;

export const Styled = {
  Icon
};
