/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { selectCardItems } from '../../store/card/card.selector';
import { addItemToCard } from '../../store/card/card.action';
import {
  ProductCardContainer, ProductCardPrice, ProductCardName,
} from './product-card.styles';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cardItems = useSelector(selectCardItems);
  const handleAddingToCard = () => dispatch(addItemToCard(cardItems, product));
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>
      </div>
      <Button buttonType="inverted" onClick={handleAddingToCard}>Add to Card</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
