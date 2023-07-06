import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

type CategoriesList = {
  id: string;
  name: string;
};

function Categories() {
  const [navCategories, setNavCategories] = useState<CategoriesList[]>([]);

  useEffect(() => {
    const getCategoriesList = async () => {
      const data = await getCategories();
      setNavCategories(data);
    };
    getCategoriesList();
  }, []);

  return (
    <div id="products">
      {navCategories.map((category) => (
        <div key={ category.id }>
          <input
            type="radio"
            id={ category.id }
            name="category"
            data-testid="category"
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
