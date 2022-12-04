import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategories, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);
  const isLoader = useSelector(selectCategoriesIsLoading);
  return (
    isLoader ? <Spinner /> : (
      <>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products} />;
        })}
      </>

    )

  );
};
export default CategoriesPreview;
