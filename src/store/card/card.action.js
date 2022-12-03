/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { createAction } from '../../utils/reducer/reducer.utils';
import { CARD_ACTION_TYPES } from './card.types';

export const setIsCardOpen = (boolean) => (
  createAction(CARD_ACTION_TYPES.SET_IS_CARD_OPEN, boolean));

const addCardItem = (cardItems, productToAdd) => {
  const productExist = cardItems.find((item) => item.id === productToAdd.id);

  if (productExist) {
    return cardItems.map((item) => (
      item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item));
  }

  return [...cardItems, { ...productToAdd, quantity: 1 }];
};

const removeCardItem = (cardItems, productToRemove) => {
  const productExist = cardItems.find((item) => item.id === productToRemove.id);

  if (productExist.quantity === 1) {
    return cardItems.filter((item) => item.id !== productToRemove.id);
  }

  return cardItems.map((item) => (
    item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item));
};

const clearCardItem = (cardItems, productToClear) => {
  return cardItems.filter((item) => item.id !== productToClear.id);
};

export const addItemToCard = (cardItems, productToAdd) => {
  const newCardItems = addCardItem(cardItems, productToAdd);
  return createAction(CARD_ACTION_TYPES.SET_CART_ITEMS, newCardItems);
};

export const removeItemFromCard = (cardItems, productToRemove) => {
  const newCardItems = removeCardItem(cardItems, productToRemove);
  return createAction(CARD_ACTION_TYPES.SET_CART_ITEMS, newCardItems);
};

export const clearItemFromCard = (cardItems, productToRemove) => {
  const newCardItems = clearCardItem(cardItems, productToRemove);
  return createAction(CARD_ACTION_TYPES.SET_CART_ITEMS, newCardItems);
};
