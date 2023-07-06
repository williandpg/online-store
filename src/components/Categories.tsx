import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

type CategoriesList = {
  id: string;
  name: string;
};
type Props = {
  setId: (id: string) => void;
  funSearc: () => Promise<void>
};

function Categories(props:Props) {
  const [navCategories, setNavCategories] = useState<CategoriesList[]>([]);
  const { setId, funSearc } = props;

  useEffect(() => {
    const getCategoriesList = async () => {
      const data = await getCategories();
      setNavCategories(data);
    };
    getCategoriesList();
  }, []);

  function handleClick(id: string) {
    setId(id);
    funSearc();
  }

  return (
    <div id="products">
      {navCategories.map((category) => (
        <div key={ category.id }>
          <input
            type="radio"
            id={ category.id }
            name="category"
            data-testid="category"
            onClick={ () => handleClick(category.id) }
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
      ))}
    </div>
  );
}

export default Categories;
