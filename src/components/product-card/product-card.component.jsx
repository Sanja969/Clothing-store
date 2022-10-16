/* eslint-disable react/prop-types */
import { useContext } from 'react';
import './product-card.styles.scss';
import Button from '../button/button.component';
import { CardContext } from '../../context/card.context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCard } = useContext(CardContext);
  const handleAddingToCard = () => addItemToCard(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddingToCard}>Add to Card</Button>
    </div>
  );
};

export default ProductCard;
