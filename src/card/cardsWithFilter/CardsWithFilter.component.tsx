import React, { useState } from "react";
import * as R from "ramda";

import { Styled } from "./CardsWithFilter.styles";
import FilterControl from "./FilterControl.component";
import SortControl from "./SortControl.component";

export type Filter<T> = {
  filterLabel: string; // eg. 'Country'
  getter: (item: T) => any; // eg. (activity: Activity) => activity.country
};

export type Sorter<T> = {
  sorterLabel: string; // eg. 'Price'
  sortFunction: (itemA: T, itemB: T) => number;
};

type CardFilterProps<T> = {
  items: Array<T>;
  itemIdAccessor: (item: T) => string;
  filters: Filter<T>[];
  sorters: Sorter<T>[];
  renderItemAsCard: (item: T) => React.ReactChild;
};

function CardsWithFilter<T>(props: CardFilterProps<T>) {
  const { items, itemIdAccessor, filters, sorters, renderItemAsCard } = props;

  // State
  const [filteredItems, updateFilteredItems] = useState(items);

  // Functions to be passed to child components
  const totalFilter = (filterFn: (item: T) => boolean): void => updateFilteredItems(items.filter(filterFn));
  const sort = (sortFn: (itemA: T, itemB: T) => number): void =>
    updateFilteredItems((prevFilteredItems: T[]) => R.sort(sortFn, prevFilteredItems));
  const resetSort = () =>
    updateFilteredItems((prevFilteredItems: T[]) => items.filter((item: T) => prevFilteredItems.includes(item)));

  return (
    <Styled.Container>
      <FilterControl<T> filters={filters} totalFilter={totalFilter} items={items} />
      <Styled.HeaderAndCards>
        <SortControl<T> sorters={sorters} numberOfItems={filteredItems.length} sort={sort} reset={resetSort} />
        <Styled.Cards>
          {filteredItems.map(item => (
            <div key={itemIdAccessor(item)}>{renderItemAsCard(item)}</div>
          ))}
        </Styled.Cards>
      </Styled.HeaderAndCards>
    </Styled.Container>
  );
}

export default CardsWithFilter;
