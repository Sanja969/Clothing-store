/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import {
  CheckoutItemContainer, Arrow, Value, Quantiy, RemoveButton, ImgContainer,
} from './checkout-item.styles';
import { addItemToCard, removeItemFromCard, clearItemFromCard } from '../../store/card/card.action';
import { selectCardItems } from '../../store/card/card.selector';

const CheckoutItem = ({ cardItem }) => {
  const dispatch = useDispatch();
  const cardItems = useSelector(selectCardItems);

  const {
    name, quantity, price, imageUrl,
  } = cardItem;
  return (
    <CheckoutItemContainer>
      <ImgContainer>
        <img src={imageUrl} alt={name} />
      </ImgContainer>
      <span>{name}</span>
      <Quantiy>
        <Arrow onClick={() => dispatch(removeItemFromCard(cardItems, cardItem))}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addItemToCard(cardItems, cardItem))}>&#10095;</Arrow>
      </Quantiy>
      <span>{price}</span>
      <RemoveButton
        onClick={() => dispatch(clearItemFromCard(cardItems, cardItem))}
      >
        &#10005;

      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
