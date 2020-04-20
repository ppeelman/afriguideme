// EXTERNAL
import React, { FunctionComponent } from 'react';

import { Styled } from './List.styles';

type ListProps = {
  items: string[];
};

const List: FunctionComponent<ListProps> = (props: ListProps) => {
  const { items } = props;

  const itemElements = items.map((item: string,  idx: number) => (
    <Styled.List__Item key={idx}>
      <Styled.List__ItemIcon />
      <Styled.List__ItemText>{item}</Styled.List__ItemText>
    </Styled.List__Item>
  ));

  return <Styled.List>{itemElements}</Styled.List>;
};

export default List;
