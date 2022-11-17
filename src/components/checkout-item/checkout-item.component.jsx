/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CardContext } from '../../context/card.context';

const CheckoutItem = ({ cardItem }) => {
  const { clearItemFromCard, addItemToCard, removeItemFromCard } = useContext(CardContext);
  const {
    name, quantity, price, imageUrl,
  } = cardItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => { removeItemFromCard(cardItem); }}>&#10094;</div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => { addItemToCard(cardItem); }}>&#10095;</div>
      </span>
      <span className="name">{price}</span>
      <div onClick={() => clearItemFromCard(cardItem)} className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
