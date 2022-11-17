/* eslint-disable arrow-body-style */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './card-dropdown.styles.scss';
import Button from '../button/button.component';
import CardItem from '../card-item/card-item.component';
import { CardContext } from '../../context/card.context';

const CardDropdown = () => {
  const { cardItems } = useContext(CardContext);
  const navigate = useNavigate();

  const gotToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="card-dropdown-container">
      <div className="card-items">
        {cardItems.map((item) => <CardItem key={item.id} cardItem={item} />)}
      </div>
      <Button onClick={gotToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CardDropdown;
