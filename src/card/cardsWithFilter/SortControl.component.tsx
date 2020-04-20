import React, { ChangeEvent } from "react";

import { Styled } from "./SortControl.styles";
import { Sorter } from "./CardsWithFilter.component";

type SortControlProps<T> = {
  sorters: Sorter<T>[];
  sort: (sortFn: (itemA: T, itemB: T) => number) => void;
  numberOfItems: number;
  reset: () => void;
};

const DEFAULT_VALUE = "default";

function SortControl<T>(props: SortControlProps<T>) {
  const { sorters, sort, numberOfItems, reset } = props;

  const selectHandler = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    if (target.value === DEFAULT_VALUE) {
      reset();
    }

    const sorterSelected: Sorter<T> | undefined = sorters.find(
      (sorter: Sorter<T>) => sorter.sorterLabel === target.value
    );

    sorterSelected && sort(sorterSelected.sortFunction);
  };

  return (
    <Styled.Container>
      <Styled.NumberOfResults>{numberOfItems} resultaten</Styled.NumberOfResults>
      <div>
        <Styled.SortLabel>Sorteer op</Styled.SortLabel>
        <select name="sort" onChange={selectHandler}>
          <option key={DEFAULT_VALUE} value={DEFAULT_VALUE}>
            --No filter--
          </option>
          {sorters.map((sorter: Sorter<T>, idx: number) => (
            <option key={idx} value={sorter.sorterLabel}>
              {sorter.sorterLabel}
            </option>
          ))}
        </select>
      </div>
    </Styled.Container>
  );
}

export default SortControl;
