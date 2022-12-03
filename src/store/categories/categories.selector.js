/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

const selection = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories,
);

export const selectCategories = createSelector(
  [selection],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {}),
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading,
);
