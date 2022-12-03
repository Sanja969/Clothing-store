/* eslint-disable arrow-body-style */
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CardDropdownContainer, EmptyMessage, CardItems } from './card-dropdown.styles';
import Button from '../button/button.component';
import CardItem from '../card-item/card-item.component';
import { selectCardItems } from '../../store/card/card.selector';

const CardDropdown = () => {
  const navigate = useNavigate();
  const cardItems = useSelector(selectCardItems);
  const gotToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <CardDropdownContainer>
      <CardItems>
        {
          cardItems.length ? (
            cardItems.map((item) => <CardItem key={item.id} cardItem={item} />)
          ) : (
            <EmptyMessage>Your card is empty</EmptyMessage>
          )
        }
      </CardItems>
      <Button onClick={gotToCheckout}>GO TO CHECKOUT</Button>
    </CardDropdownContainer>
  );
};

export default CardDropdown;
