// EXTERNAL
import React, { FunctionComponent } from "react";

import { Styled } from "./List.styles";

type ListProps = {
  items: string[];
  color: string;
  dense?: boolean;
};

const List: FunctionComponent<ListProps> = (props: ListProps) => {
  const { items, color, dense = false } = props;

  const itemElements = items.map((item: string, idx: number) => (
    <Styled.List__Item key={idx} dense={dense}>
      <Styled.List__ItemIcon />
      <Styled.List__ItemText>{item}</Styled.List__ItemText>
    </Styled.List__Item>
  ));

  return (
    <Styled.List dense={dense} color={color}>
      {itemElements}
    </Styled.List>
  );
};

export default List;
