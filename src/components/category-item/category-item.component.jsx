import './category-item.styles.scss';
import PropTypes from 'prop-types';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={
        {
          backgroundImage: `url(${imageUrl})`,
        }
      }
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CategoryItem;
