/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable arrow-body-style */
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CardContext } from '../../context/card.context';

import './card-icon.styles.scss';

const CardIcon = () => {
  const { isCardOpen, setIsCardOpen } = useContext(CardContext);
  const toggleCard = () => setIsCardOpen(!isCardOpen);
  return (
    <div className="card-icon-container" onClick={(toggleCard)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
