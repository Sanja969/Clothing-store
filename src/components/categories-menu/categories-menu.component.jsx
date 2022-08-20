import './categories-menu.styles.scss';
import PropTypes from 'prop-types';
import CategoryItem from '../category-item/category-item.component';

const CategoriesMenu = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}

  </div>
);

CategoriesMenu.propTypes = {
  categories: PropTypes.instanceOf(Object).isRequired,
};

export default CategoriesMenu;
