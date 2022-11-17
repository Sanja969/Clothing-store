/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

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

export const CardContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cardItems: [],
  addItemToCard: () => {},
  removeItemFromCard: () => {},
  clearItemFromCard: () => {},
  cardCount: 0,
  totalPrice: 0,
});

export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const Count = cardItems.reduce((acc, item) => acc + item.quantity, 0);
    const Total = cardItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setCardCount(Count);
    setTotalPrice(Total);
  }, [cardItems]);

  const addItemToCard = (productToAdd) => {
    setCardItems(addCardItem(cardItems, productToAdd));
  };

  const removeItemFromCard = (productToRemove) => {
    setCardItems(removeCardItem(cardItems, productToRemove));
  };

  const clearItemFromCard = (productToRemove) => {
    setCardItems(clearCardItem(cardItems, productToRemove));
  };

  const value = {
    isCardOpen,
    setIsCardOpen,
    cardItems,
    addItemToCard,
    removeItemFromCard,
    cardCount,
    clearItemFromCard,
    totalPrice,
  };

  return (
    <CardContext.Provider value={value}>
      { children }
    </CardContext.Provider>
  );
};
