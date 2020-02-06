import styled from 'styled-components';
import colors from '../../styling/colors.styling';
import { fontSize } from '../../styling/font.styling';

const List = styled.ul`
  color: ${colors.WHITE};
  font-size: ${fontSize.MEDIUM};
  margin-left: 0;
`;

const List__Item = styled.li`
  list-style-type: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
`;

const List__ItemIcon = styled.div`
  width: 10px;
  height: 10px;
  background-color: currentColor;
  margin-right: 1rem;
`;

const List__ItemText = styled.span``;

export const Styled = {
  List,
  List__Item,
  List__ItemIcon,
  List__ItemText
};
