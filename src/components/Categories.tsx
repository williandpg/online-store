import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

type CategoriesList = {
  id: string;
  name: string;
};
type Props = {
  funSearc: (id: string) => Promise<void>
};

function Categories(props:Props) {
  const [navCategories, setNavCategories] = useState<CategoriesList[]>([]);
  const { funSearc } = props;

  useEffect(() => {
    const getCategoriesList = async () => {
      const data = await getCategories();
      setNavCategories(data);
    };
    getCategoriesList();
  }, []);

  return (
    <div id="products">
      {Array.isArray(navCategories) ? navCategories.map((category) => (
        <div key={ category.id }>
          <input
            type="radio"
            id={ category.id }
            name="category"
            data-testid="category"
            onClick={ () => funSearc(category.id) }
          />
          <label htmlFor={ category.id } data-testid="category-label">
            {category.name}
          </label>
        </div>
        // <button
        //   value="radio"
        //   key={ category.id }
        //   data-testid="category"
        // >
        //   {category.name}
        // </button>
      )):null}
    </div>
  );
}

export default Categories;
