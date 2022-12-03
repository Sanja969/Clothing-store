/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.card;

export const selectCardItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cardItems,
);

export const selectIsCardOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCardOpen,
);

export const selectCardCount = createSelector(
  [selectCardItems],
  (cardItems) => cardItems.reduce((acc, item) => acc + item.quantity, 0),
);

export const selectCardTotal = createSelector(
  [selectCardItems],
  (cardItems) => cardItems.reduce((acc, item) => acc + item.quantity * item.price, 0),
);
