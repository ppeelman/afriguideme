import React, { ChangeEvent } from "react";

import {Styled} from './SingleFilter.styles';

type SingleFilterProps<T> = {
  allValues: any[];
  selectedValues: any[];
  label: string;
  update: (value: any, isSelected: boolean) => void;
};

function SingleFilter<T>(props: SingleFilterProps<T>) {
  const { label, allValues, selectedValues, update } = props;

  const handleChecked = (value: any) => (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const isChecked: boolean = target.checked;

    update(value, isChecked);
  };

  const isChecked = (value: any): boolean => selectedValues.includes(value);

  return (
    <Styled.Container>
      <Styled.FilterTitle>{label}</Styled.FilterTitle>
      {allValues.map((val: any, idx: number) => (
        <Styled.Label key={idx}>
          <Styled.Input name={`${val}`} type="checkbox" checked={isChecked(val)} onChange={handleChecked(val)} />
          <span>{val}</span>
        </Styled.Label>
      ))}
    </Styled.Container>
  );
}

export default SingleFilter;
