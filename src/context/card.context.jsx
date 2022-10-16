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

export const CardContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cardItems: [],
  addItemToCard: () => {},
  cardCount: 0,
});

export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    const Count = cardItems.reduce((acc, item) => acc + item.quantity, 0);
    setCardCount(Count);
  }, [cardItems]);

  const addItemToCard = (productToAdd) => {
    setCardItems(addCardItem(cardItems, productToAdd));
  };

  const value = {
    isCardOpen,
    setIsCardOpen,
    cardItems,
    addItemToCard,
    cardCount,
  };

  return (
    <CardContext.Provider value={value}>
      { children }
    </CardContext.Provider>
  );
};
