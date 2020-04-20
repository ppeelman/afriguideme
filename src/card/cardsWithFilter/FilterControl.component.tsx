import React, { useState } from "react";
import * as R from "ramda";

import { Styled } from "./FilterControl.styles";
import { Filter } from "./CardsWithFilter.component";
import SingleFilter from "./SingleFilter.component";

type FilterProps<T> = {
  filters: Filter<T>[];
  totalFilter: (filterFn: (item: T) => boolean) => void;
  items: T[];
};

type State = {
  [label: string]: any[];
};

// Utility Functions
function getUniqueValues<T>(items: T[], getter: (item: T) => any): any[] {
  // @ts-ignore
  return R.compose(R.uniq, R.map(getter))(items);
}

function initializeState<T>(items: T[], filters: Filter<T>[]): State {
  const initialState: State = {};
  filters.forEach((filter: Filter<T>) => {
    initialState[filter.filterLabel] = getUniqueValues(items, filter.getter);
  });
  return initialState;
}

function FilterControl<T>(props: FilterProps<T>) {
  const { filters, totalFilter, items } = props;

  // State
  const [state, setState] = useState<State>(initializeState<T>(items, filters));

  const resetFilter = () => {
    setState(initializeState<T>(items, filters));
    totalFilter((item: T) => true);
  };

  const updateFilter = (label: string) => (value: any, isSelected: boolean): void => {
    setState((prevState: State) => {
      const oldValues: any[] = prevState[label];
      const newValues: any[] = isSelected ? [...oldValues, value] : oldValues.filter((val: any) => val !== value);

      const newState: State = {
        ...prevState,
        [label]: R.uniq(newValues)
      };

      performFilter(newState);
      return newState;
    });
  };

  const performFilter = (state: State): void => {
    const getGetterFnForFilterLabel = (filterLabel: string) => {
      // @ts-ignore
      return filters.find((filter: Filter<T>) => filter.filterLabel === filterLabel).getter;
    };

    const filterFn = (values: any[], getter: (item: T) => any) => (item: T) => values.includes(getter(item));

    const filterLabels: string[] = Object.keys(state);

    const filterFns = filterLabels.map((label: string) => filterFn(state[label], getGetterFnForFilterLabel(label)));

    totalFilter(R.allPass(filterFns));
  };

  return (
    <Styled.Container>
      <Styled.ResetFilters onClick={resetFilter}>Reset filters X</Styled.ResetFilters>
      {filters.map((filter: Filter<T>) => (
        <SingleFilter
          key={filter.filterLabel}
          allValues={getUniqueValues(items, filter.getter)}
          selectedValues={state[filter.filterLabel]}
          label={filter.filterLabel}
          update={updateFilter(filter.filterLabel)}
        />
      ))}
    </Styled.Container>
  );
}

export default FilterControl;
