import React, { useState } from 'react';
import ProductBox from '../components/ProductsBox';
import { getProductsFromCategoryAndQuery } from '../services/api';
export interface Product {
  id: string
  name: string
  thumbnail: string
  price: string
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (searchTerm.trim() === '') {
    //   setErrorMessage('Digite algum termo de pesquisa');
    //   setProducts([]);
    //   return;
    // }

    try {
      const data = await getProductsFromCategoryAndQuery('', searchTerm);
      if (data.results.length === 0) {
        setErrorMessage('Nenhum produto foi encontrado');
      } else {
        setErrorMessage('');
        setProducts(data.results);
      }
    } catch (error) {
      setErrorMessage('Ocorreu um erro ao buscar os produtos');
      setProducts([]);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          data-testid="query-input"
        />
        <button type="submit" data-testid="query-button">
          Enviar
        </button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      {products.length === 0 && !errorMessage && (
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      )}
      {console.log(products)}
      {products.length > 0 && (
        <div id="Produtos">
          {products.map((product) => (
            <ProductBox
              key={product.id}
              {...product}  
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
