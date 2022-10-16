/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const CardContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
});

export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const value = { isCardOpen, setIsCardOpen };
  return (
    <CardContext.Provider value={value}>
      { children }
    </CardContext.Provider>
  );
};
