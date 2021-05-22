import React, { ChangeEvent } from "react";

import { Styled } from "./SortControl.styles";
import { Sorter } from "./CardsWithFilter.component";
import Select, { Option } from "../../ui/form/select/Select.component";

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

  let options: Option[] = sorters.map(({ sorterLabel }: Sorter<T>) => ({
    label: sorterLabel,
    value: sorterLabel
  }));

  options = [{ label: "-- Sort on --", value: DEFAULT_VALUE }, ...options];

  return (
    <Styled.Container>
      <Styled.NumberOfResults>{numberOfItems} resultaten</Styled.NumberOfResults>
      <div>
        <Select id={"sort"} name={"sort"} onChange={selectHandler} options={options} />
      </div>
    </Styled.Container>
  );
}

export default SortControl;
