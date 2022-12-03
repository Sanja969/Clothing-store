/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSelector } from 'react-redux';
import {
  CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, Total,
} from './checkout.styles';
import { selectCardItems, selectCardTotal } from '../../store/card/card.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const cardItems = useSelector(selectCardItems);
  const totalPrice = useSelector(selectCardTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>
      {
      cardItems.map((cardItem) => (
        <CheckoutItem key={cardItem.id} cardItem={cardItem} />
      ))
    }
      <Total>
        Total: $
        {totalPrice}
      </Total>
    </CheckoutContainer>
  );
};

export default Checkout;
