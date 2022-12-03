/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import { CardItemContainer, ItemDetails } from './card-item.styles';

const CardItem = ({ cardItem }) => {
  const {
    name, quantity, imageUrl, price,
  } = cardItem;
  return (
    <CardItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>

    </CardItemContainer>
  );
};

export default CardItem;
