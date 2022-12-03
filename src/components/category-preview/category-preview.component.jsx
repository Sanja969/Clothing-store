/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import { CategoryPreviewContainer, Title } from './category-preview.styles';
import { CategoryContainer } from '../../routes/category/category.styles';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <CategoryContainer>
        {
          products.filter((_, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </CategoryContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
