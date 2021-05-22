import styled from "styled-components";
import { fontSize } from "../../styling/font.styling";

type ListProps = {
  color: string;
  dense: boolean;
};

const List = styled("ul")<ListProps>`
  ${({ color, dense }: ListProps) => `
    color: ${color};
    font-size: ${dense ? fontSize.XSMALL : fontSize.MEDIUM};
  `}

  margin-left: 0;
`;

type ListItemProps = {
  dense: boolean;
};

const List__Item = styled.li`
  ${({ dense }: ListItemProps) => `
    padding: ${dense ? 0.05 : 0.5}rem;
  `}
  list-style-type: none;
  display: flex;
  align-items: center;
`;

const List__ItemIcon = styled.div`
  width: 10px;
  height: 10px;
  background-color: currentColor;
  margin-right: 1rem;
`;

const List__ItemText = styled.span`
  font-size: inherit;
`;

export const Styled = {
  List,
  List__Item,
  List__ItemIcon,
  List__ItemText
};
