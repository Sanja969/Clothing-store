/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import './card-item.styles.scss';

const CardItem = ({ cardItem }) => {
  const {
    name, quantity, imageUrl, price,
  } = cardItem;
  return (
    <div className="card-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>

    </div>
  );
};

export default CardItem;
